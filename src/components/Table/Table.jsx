const Table = ({ tableHead, entries, row, col }) => {
	return (
		<div className="container mx-auto shadow-xl">
			<table>
				<thead>
					<tr>
						{tableHead.map((item) => (
							<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="bg-white">
					{entries.map((entry, index) => (
						<tr key={index}>
							{entry.map((cell, index) => (
								<td
									key={index}
									className={`px-6 py-4 whitespace-no-wrap text-sm leading-5  ${
										index === 0 ? 'font-medium text-gray-900' : 'text-gray-500'
									}`}
								>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
