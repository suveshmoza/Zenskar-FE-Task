import { v4 as uuidv4 } from 'uuid';
import { defaultData } from '../data/componentTypes';

export const createNewElement = (elementType) => {
	const id = uuidv4();

	return {
		key: id,
		metaData: {
			...defaultData[elementType],
			type: elementType,
			top: 20,
			left: 80,
			id,
		},
	};
};

export const getStyles = (left, top, isDragging) => {
	const transform = `translate3d(${left}px, ${top}px, 0)`;
	return {
		position: 'absolute',
		transform,
		WebkitTransform: transform,
		opacity: isDragging ? 0 : 1,
		height: isDragging ? 0 : '',
	};
};
