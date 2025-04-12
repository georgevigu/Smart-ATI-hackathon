import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";

const Beds = ({ redPatients, yellowPatients, greenPatients }) => {
	const beds = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		occupied: Math.random() > 0.3,
		patientName: Math.random() > 0.3 ? `Patient ${i + 1}` : null,
		status: ["stable", "critical", "recovering"][Math.floor(Math.random() * 3)],
	}));

	const getStatusColor = (status) => {
		switch (status) {
			case "critical":
				return "bg-red-500";
			case "stable":
				return "bg-green-500";
			case "recovering":
				return "bg-yellow-500";
			default:
				return "bg-gray-400";
		}
	};

	// Split into 3 columns
	const columns = [[], [], []];
	beds.forEach((bed, index) => {
		columns[index % 3].push(bed);
	});

	return (
		<div className="flex">
			<PieChart
				series={[
					{
						arcLabel: "value",
						arcLabelMinAngle: 35,
						data: [
							{
								id: 0,
								color: "red",
								value: redPatients,
								label: "Critical Patients",
							},
							{
								id: 1,
								color: "yellow",
								value: yellowPatients,
								label: "Recovering Patients",
							},
							{
								id: 2,
								color: "green",
								value: greenPatients,
								label: "Stable Patients",
							},
						],
					},
				]}
				width={600}
				height={400}
				sx={{
					[`& .${pieArcLabelClasses.root}`]: {
						fontWeight: "bold",
					},
					"& .MuiChartsLegend-root text": {
						fill: "white",
					},
					"& .MuiChartsArcLabel-root": {
						fill: "white",
					},
				}}
			/>

			<div className="flex flex-col items-center justify-center w-full h-full p-4">
				<h2 className="text-xl font-bold mb-4 text-white">
					Hospital Ward Overview
				</h2>
				<div className="flex justify-center gap-8">
					{columns.map((col, colIndex) => (
						<div key={colIndex} className="flex flex-col gap-4">
							{col.map((bed) => {
								const statusColor = bed.occupied
									? getStatusColor(bed.status)
									: "bg-green-200";
								const borderColor = bed.occupied
									? "border-gray-800"
									: "border-green-400";

								return (
									<div
										key={bed.id}
										className={`w-10 h-10 rounded-md border-2 ${borderColor} flex items-center justify-center relative cursor-pointer transition-all hover:scale-110 ${statusColor}`}
										title={
											bed.occupied
												? `${bed.patientName} (${bed.status})`
												: "Available bed"
										}
									>
										<span className="absolute top-1 left-1 text-xs font-bold text-white">
											{bed.id}
										</span>
										{bed.occupied && (
											<span className="w-4 h-4 rounded-full bg-gray-900"></span>
										)}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Beds;
