import React from "react";
import Stats from "./Stats";
import Beds from "./Beds";
import Parametres from "./Paramtres";
import BasicTabs from "./BasicTabs";

export default function Details({ scoreLog, patient }) {
	const scoreColor =
		patient.scorGeneralFinal <= 3
			? "bg-red-500"
			: patient.scorGeneralFinal <= 6
			? "bg-yellow-500"
			: "bg-green-500";

	return Object.keys(patient).length === 0 ? (
		<p>beds</p>
	) : (
		<div className="flex flex-col items-center w-full px-4">
			{/* Header section */}
			<div className="text-center w-full max-w-4xl">
				<h1 className="text-5xl">{patient.nume}</h1>
				<div className="flex mt-5 justify-center items-center">
					<h2>Relocation score</h2>
					<div
						className={`${scoreColor} text-white font-bold w-8 h-8 px-3 ml-2 py-1 rounded-full flex items-center justify-center`}
					>
						{patient.scorGeneralFinal}
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center">
				<BasicTabs scoreLog={scoreLog} patient={patient} />
			</div>
		</div>
	);
}
