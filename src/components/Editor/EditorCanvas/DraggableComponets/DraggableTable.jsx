const DraggableTable = () => {
	return (
		<div className="container mx-auto p-4">
			<table className="min-w-[454px]">
				<thead>
					<tr>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Name
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Email
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Role
						</th>
						<th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
							Status
						</th>
					</tr>
				</thead>
				<tbody className="bg-white">
					<tr>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
							John Doe
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							john.doe@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							Developer
						</td>
						<td className="px-6 py-4 whitespace-no-wrap">
							<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
								Active
							</span>
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
							Jane Smith
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							jane.smith@example.com
						</td>
						<td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
							Designer
						</td>
						<td className="px-6 py-4 whitespace-no-wrap">
							<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
								Inactive
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default DraggableTable;
