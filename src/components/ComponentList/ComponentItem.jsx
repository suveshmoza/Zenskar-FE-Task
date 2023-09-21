const ComponentItem = ({ imgSrc, title, description, onClick }) => (
	<div
		onClick={onClick}
		className="h-12 w-full flex justify-center items-center rounded cursor-pointer"
	>
		<div className="drop-shadow-[3px_4px_20px_rgba(160,184,199,0.537)]">
			<img className="h-12 w-12 rounded" src={imgSrc} alt={title} />
		</div>
		<div className="h-12 flex flex-col justify-stretch  items-start pl-4">
			<h3 className="text-sm font-semibold leading-4">{title}</h3>
			<p className="text-[13px] text-[#707880] w-[176px] leading-5">
				{description}
			</p>
		</div>
	</div>
);

export default ComponentItem;
