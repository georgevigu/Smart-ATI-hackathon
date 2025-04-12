import React from "react";

export default function Parameters({ patient }) {
	const keyLabels = {
		apacheII: "Apache II Score",
		areInfectie: "Has Infection",
		areVasopresoare: "On Vasopressors",
		esteContagios: "Contagious",
		frecventaCardiaca: "Heart Rate",
		gcs: "GCS Score",
		infectieControlata: "Infection Controlled",
		instabilHemodinamic: "Hemodynamic Instability",
		lactat: "Lactate Level",
		oxigenStabil: "Stable Oxygen",
		scorCardiac: "Cardiac Score",
		scorComa: "Coma Score",
		scorGeneralFinal: "Final General Score",
		scorGeneralMedian: "Median General Score",
		scorGeneralMinim: "Minimum General Score",
		scorInfectios: "Infectious Score",
		scorRespirator: "Respiratory Score",
		sofa: "SOFA Score",
		spo2: "SpO₂",
		tensiune: "Blood Pressure",
		tipRespiratie: "Respiration Type",
	};

	const keys = Object.keys(keyLabels);
	const middleIndex = Math.ceil(keys.length / 2);
	const col1 = keys.slice(0, middleIndex);
	const col2 = keys.slice(middleIndex);

	return (
		<div className="grid grid-cols-2 gap-x-6">
			{[col1, col2].map((col, colIndex) => (
				<table
					key={colIndex}
					className="w-full text-xs border border-gray-700 overflow-hidden"
				>
					<tbody className="bg-[#1a1a1a] divide-y divide-gray-700">
						{col.map((key, index) => (
							<tr key={key} className={index % 2 === 1 ? "bg-[#222222]" : ""}>
								<td className="px-3 py-1 text-lg font-medium text-white">
									{keyLabels[key]}
								</td>
								<td className="px-3 py-1 text-lg text-gray-300">
									{typeof patient[key] === "boolean"
										? patient[key]
											? "Yes"
											: "No"
										: patient[key]}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			))}
		</div>
	);
}
