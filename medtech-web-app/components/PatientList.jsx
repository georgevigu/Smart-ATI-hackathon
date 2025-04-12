import React from "react";
import PatientCard from "./PatientCard";

export default function PatientList({
	patients,
	selectedPatientId,
	onSelectPatient,
}) {
	const handleClick = (patientId) => {
		onSelectPatient(patientId);
	};

	return (
		<div className="w-full h-screen overflow-y-auto bg-[#1a1a1a] p-4 scrollbar-thin scrollbar-thumb-[#034c81] scrollbar-track-[#141629]">
			{patients.map((patient) => (
				<PatientCard
					key={patient.id}
					patient={patient}
					selected={patient.id == selectedPatientId ? true : false}
					onClick={() => handleClick(patient.id)}
				/>
			))}
		</div>
	);
}
