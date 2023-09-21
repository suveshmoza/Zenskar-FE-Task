import { useDispatch } from 'react-redux';
import { setElement } from '../../store/slice/elementSlice';
import ComponentItem from './ComponentItem';

const ComponentList = ({ componentListData, createNewElement }) => {
	const dispatch = useDispatch();

	const onClickCreate = (type) => {
		const newElement = createNewElement(type);
		dispatch(setElement(newElement));
	};

	return (
		<>
			{componentListData.map((component, index) => (
				<div key={index}>
					<ComponentItem
						imgSrc={component.imgSrc}
						title={component.title}
						description={component.description}
						onClick={() => onClickCreate(component.type)}
					/>
					<div className="border border-[#E9EFF2] w-[232px] bg-red-500 my-6"></div>
				</div>
			))}
		</>
	);
};

export default ComponentList;
