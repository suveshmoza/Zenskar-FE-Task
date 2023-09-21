import { useDispatch } from 'react-redux';
import { setElement } from '../../store/slice/elementSlice';

const ComponentListCompact = ({ createNewElement, componentListData }) => {
	const dispatch = useDispatch();

	const onClickCreate = (type) => {
		const newElement = createNewElement(type);
		dispatch(setElement(newElement));
	};

	return (
		<div className="flex justify-around items-center p-1">
			{componentListData.map((component, index) => (
				<div
					key={index}
					className="flex flex-col justify-center items-center cursor-pointer"
					onClick={() => onClickCreate(component.type)}
				>
					<img
						src={component.imgSrc}
						className="border rounded h-12 w-12 drop-shadow-[3px_4px_20px_rgba(160,184,199,0.537)]"
					/>
					<h3 className="text-sm font-semibold">{component.title}</h3>
				</div>
			))}
		</div>
	);
};

export default ComponentListCompact;
