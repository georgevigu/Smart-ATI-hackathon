import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Stats({ patient }) {
	// Use patient's scoreHistory or default to [0] if not available
	const scoreHistory = patient?.scoreHistory || [0];
	console.log(patient);

	// Create x-axis labels (time points) based on the history length
	const xAxisData = scoreHistory.map((_, index) => index + 1);

	return (
		<div className="p-4">
			<LineChart
				xAxis={[
					{
						data: xAxisData,
						// label: "Time",
						tickLabelStyle: { fill: "white" },
					},
				]}
				yAxis={[
					{
						min: 0,
						max: 10,
						tickLabelStyle: { fill: "white" },
						colorMap: {
							type: "piecewise",
							thresholds: [3, 7],
							colors: ["red", "yellow", "green"],
						},
					},
				]}
				series={[
					{
						data: scoreHistory,
						// label: "Health Score",
						color: "#00ff00",
						showMark: true,
					},
				]}
				width={500}
				height={300}
				grid={{
					vertical: true,
					horizontal: true,
					stroke: "rgba(255, 255, 255, 0.3)",
					strokeDasharray: "1 1",
				}}
				sx={{
					"& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
						stroke: "white",
					},
					"& .MuiChartsGrid-root line": {
						opacity: 0.2,
						stroke: "white",
						strokeWidth: 1,
					},
					"& .MuiChartsLegend-root": {
						fill: "white",
					},
				}}
			/>
		</div>
	);
}
