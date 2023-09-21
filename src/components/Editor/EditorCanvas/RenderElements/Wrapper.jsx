import { useDrag } from 'react-dnd';
import { getStyles } from '../../../../util/element';

const Wrapper = ({ id, type, left, top, children }) => {
	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type,
			item: { id, left, top },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[id, left, top]
	);

	return (
		<div
			id={id}
			ref={drag}
			style={getStyles(left, top, isDragging)}
			className="z-10"
		>
			{children}
		</div>
	);
};

export default Wrapper;
