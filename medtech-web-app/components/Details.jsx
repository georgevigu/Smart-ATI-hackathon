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

	return (
		<div>
			<h1 className="text-5xl">{patient.name}</h1>
			<div
				className={`${scoreColor} text-white font-bold w-8 px-3 py-1 rounded-full`}
			>
				{patient.score}
			</div>
			<Stats patient={patient} />
		</div>
	);
}
