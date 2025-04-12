import React from "react";

// Sample patient data
const patients = Array.from({ length: 50 }, (_, i) => {
	// Generate 5 random scores between 0-10
	const scoreHistory = Array.from({ length: 5 }, () =>
		Math.floor(Math.random() * 11)
	);

	// Current score is the most recent (first) in the history array
	const currentScore = scoreHistory[scoreHistory.length - 1];

	return {
		id: i + 1,
		name: `Patient ${i + 1}`,
		score: currentScore,
		scoreHistory: scoreHistory, // Array of 5 random scores (0-10)
		condition: ["Stable", "Critical", "Recovering"][
			Math.floor(Math.random() * 3)
		],
	};
});

function PatientCard({ patient, onClick }) {
	const scoreColor =
		patient.score <= 3
			? "bg-red-500"
			: patient.score <= 6
			? "bg-yellow-500"
			: "bg-green-500";

	return (
		<div
			className="w-full p-4 mb-2 rounded-lg bg-[#1a1a1a] hover:bg-[#1E2137] transition-colors cursor-pointer border-b border-[rgba(255,255,255,0.08)]"
			onClick={onClick}
		>
			<div className="flex justify-between items-center">
				<div>
					<h3 className="text-white font-medium">{patient.name}</h3>
					<p className="text-[rgba(255,255,255,0.7)] text-sm">
						Condition: {patient.condition}
					</p>
				</div>
				<div
					className={`${scoreColor} text-white font-bold px-3 py-1 rounded-full`}
				>
					{patient.score}
				</div>
			</div>
		</div>
	);
}

export default function PatientList({ onSelectPatient }) {
	return (
		<div className="w-full h-screen overflow-y-auto bg-[#1a1a1a] p-4 scrollbar-thin scrollbar-thumb-[#034c81] scrollbar-track-[#141629]">
			{patients.map((patient) => (
				<PatientCard
					key={patient.id}
					patient={patient}
					onClick={() => onSelectPatient(patient)}
				/>
			))}
		</div>
	);
}
