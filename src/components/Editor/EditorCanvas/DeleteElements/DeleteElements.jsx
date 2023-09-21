import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';

import { removeElement } from '../../../../store/slice/elementSlice.js';
import componentTypes from '../../../../data/componentTypes.js';

const DeleteElements = () => {
	const dispatch = useDispatch();
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: componentTypes,
		collect: (monitor) => ({
			canDrop: monitor.canDrop(),
			isOver: monitor.isOver(),
		}),
		drop: (item, monitor) => {
			if (item.id) dispatch(removeElement(item.id));
			return undefined;
		},
	}));

	return (
		<div
			ref={drop}
			className="absolute top-1 left-1/2 transform -translate-x-1/2 z-20 p-3 text-4xl"
		>
			<FaTrash className="text-red-600" />
		</div>
	);
};

export default DeleteElements;
