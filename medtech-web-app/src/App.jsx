import "./App.css";
import React from "react";
import PatientList from "../components/PatientList";
import Details from "../components/Details";
import Navbar from "../components/Navbar";

function App() {
	const [selectedPatient, setSelectedPatient] = React.useState({});

	return (
		<div className="flex w-full h-screen bg-black text-white">
			<Navbar />
			<div className="w-1/3 m-5 h-[calc(100vh-40px)] border-1 border-[#c9bbaa] rounded-md overflow-y-scroll scrollbar-hide">
				<PatientList
					onSelectPatient={(patient) => {
						setSelectedPatient(patient);
					}}
				/>
			</div>

			<div className="w-2/3 m-5 flex items-start pl-4  bg-[#1a1a1a] border-1 border-[#c9bbaa] rounded-md">
				<Details patient={selectedPatient} />
			</div>
		</div>
	);
}

export default App;
