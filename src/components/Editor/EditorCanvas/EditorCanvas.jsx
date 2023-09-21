import React, { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import {
	setElement,
	setElementPosition,
} from '../../../store/slice/elementSlice.js';
import { createNewElement } from '../../../util/element.js';
import RenderElements from './RenderElements/RenderElements.jsx';
import componentTypes from '../../../data/componentTypes.js';
import DeleteElements from './DeleteElements/index.jsx';

export const snapToGrid = (x, y) => {
	const snappedX = Math.round(x / 25) * 25;
	const snappedY = Math.round(y / 25) * 25;
	return [snappedX, snappedY];
};

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
		// Catch drags within the canvas
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
			<div className="editor-canvas" ref={drop}>
				{isHovering && <DeleteElements />}
				<RenderElements canDrop={canDrop} />
				{isOver && <div className="grid-overlay"></div>}
			</div>
		</>
	);
};

export default EditorCanvas;
