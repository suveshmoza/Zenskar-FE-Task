import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import RenderElements from './RenderElements/RenderElements';
import DeleteElements from './DeleteElements/DeleteElements';

import {
	setElement,
	setElementPosition,
} from '../../../store/slice/elementSlice.js';

import { createNewElement, snapToGrid } from '../../../util/element.js';

import componentTypes from '../../../data/componentTypes.js';

const EditorCanvas = () => {
	const { elements } = useSelector((state) => state.elements);
	const [isHovering, setIsHovering] = useState(false);

	const dispatch = useDispatch();

	const moveBox = useCallback(
		(id, left, top) => {
			dispatch(
				setElementPosition({
					id,
					left,
					top,
				})
			);
		},
		[elements]
	);

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: componentTypes,
		collect: (monitor) => {
			const elementType = monitor.getItemType();
			setIsHovering(monitor.canDrop());
			if (
				monitor.getDropResult() &&
				elementType &&
				!(monitor.getItem() && monitor.getItem().id)
			) {
				dispatch(setElement(createNewElement(elementType)));
			}
			return {
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
			};
		},
		drop: (item, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset();
			if (item.id && delta) {
				let left = Math.round(item.left + delta.x);
				let top = Math.round(item.top + delta.y);
				[left, top] = snapToGrid(left, top);
				moveBox(item.id, left, top);
			}
			return undefined;
		},
	}));

	return (
		<>
			<div className="editor-canvas overflow-scroll" ref={drop}>
				{isHovering && <DeleteElements />}
				<RenderElements canDrop={canDrop} />
				{isOver && <div className="grid-overlay"></div>}
			</div>
		</>
	);
};

export default EditorCanvas;
