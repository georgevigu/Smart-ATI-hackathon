import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Stats({ scoreLog }) {
	// Verify scoreLog is an array, otherwise use empty array as fallback
	const logEntries = Array.isArray(scoreLog) ? scoreLog : [];

	// Sort entries by timestamp (newest first)
	const sortedEntries = [...logEntries].sort((a, b) => {
		const timeA = new Date(a.timestamp || 0).getTime();
		const timeB = new Date(b.timestamp || 0).getTime();
		return timeB - timeA; // Reverse sort for newest first
	});

	// Extract scores from sorted entries
	const scores = sortedEntries.map((entry) => entry?.scorGeneralFinal || 0);
	const timestamps = sortedEntries.map((entry) => entry?.timestamp || "");

	// Calculate minutes ago from current time
	const now = Date.now();
	const xAxisData = timestamps.map((timestamp) => {
		const entryTime = new Date(timestamp).getTime();
		const diffMs = now - entryTime;
		return Math.floor(diffMs / (1000 * 60)); // Minutes ago
	});

	console.log("Scores (newest first):", scores);
	console.log("Minutes Ago Data:", xAxisData);

	return (
		<div className="p-4">
			<LineChart
				xAxis={[
					{
						data: xAxisData,
						reverse: true,
						label: "Minutes Ago",
						labelStyle: { fill: "white" },
						tickLabelStyle: { fill: "white" },
						valueFormatter: (value) => `${value}`,
					},
				]}
				yAxis={[
					{
						min: 0,
						max: 10,
						label: "Score",
						labelStyle: { fill: "white" },
						tickLabelStyle: { fill: "white" },
						colorMap: {
							type: "piecewise",
							thresholds: [3.1, 6.9],
							colors: ["red", "yellow", "green"],
						},
					},
				]}
				series={[
					{
						data: scores,
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
						fill: "white",
					},
					"& .MuiChartsGrid-root line": {
						opacity: 0.2,
						stroke: "white",
						strokeWidth: 1,
						fill: "white",
					},
				}}
			/>
		</div>
	);
}
