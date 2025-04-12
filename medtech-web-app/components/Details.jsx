import React from "react";
import Stats from "./Stats";

export default function Details({ patient }) {
	console.log(patient);
	const scoreColor =
		patient.score <= 3
			? "bg-red-500"
			: patient.score <= 6
			? "bg-yellow-500"
			: "bg-green-500";

	return Object.keys(patient).length === 0 ? (
		<p>No patient selected</p>
	) : (
		<div className="flex flex-col">
			<h1 className="text-5xl">{patient.name}</h1>
			<div className="flex mt-4">
				<h2>Relocation score</h2>
				<div
					className={`${scoreColor} text-white font-bold w-8 h-8 px-3 ml-2 py-1 rounded-full`}
				>
					{patient.score}
				</div>
			</div>
			<div className="flex justify-around">
				<h2 className="text-2xl mb-2 mt-5">Parametri</h2>
				<h2 className="text-2xl mb-2 mt-5">Evolutia starii pacientului</h2>
			</div>
			<div className="flex w-full overflow-hidden">
				<table className="w-100 divide-y divide-gray-200">
					<tbody className="bg-white divide-y divide-gray-200">
						{/* Glasgow Coma Scale */}
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Scor Glasgow (GCS)
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								13
							</td>
						</tr>

						{/* Blood Pressure */}
						<tr className="bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								TA, suport inotrop, stabilitate hemodinamică
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								120/80 mmHg
							</td>
						</tr>

						{/* Vasopressors */}
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Necesitate vasopresoare
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Nu
							</td>
						</tr>

						{/* Breathing Type */}
						<tr className="bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Tip respirație
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Spontană
							</td>
						</tr>

						{/* Ventilation */}
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Ventilație și stabilitate respiratorie
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Nu
							</td>
						</tr>

						{/* Oxygen Need */}
						<tr className="bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Necesitate oxigen și stabilitatea acestuia
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Da (2L/min)
							</td>
						</tr>

						{/* Infection Presence */}
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Prezența unei infecții
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Da
							</td>
						</tr>

						{/* Contagiousness */}
						<tr className="bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Contagiozitate
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Nu
							</td>
						</tr>

						{/* Infection Control */}
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Infecție controlată
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								Da
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex flex-col">
					<Stats patient={patient} />
				</div>
			</div>
		</div>
	);
}
