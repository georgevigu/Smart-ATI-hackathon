import React from "react";

const Beds = () => {
	// Sample patient data
	const beds = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		occupied: Math.random() > 0.3, // 70% chance of being occupied
		patientName: Math.random() > 0.3 ? `Patient ${i + 1}` : null,
		status: ["stable", "critical", "recovering"][Math.floor(Math.random() * 3)],
	}));

	// Calculate positions for U-shaped arrangement without overlapping
	const calculatePosition = (index) => {
		const leftColumnCount = 10;
		const bottomRowCount = 10;

		// Dimensions (percentage-based)
		const uWidth = 80;
		const uHeight = 70;
		const uLeft = 10;
		const uTop = 15;

		// Calculate spacing based on count
		const leftRightSpacing = uHeight / (leftColumnCount + 1);
		const bottomSpacing = uWidth / (bottomRowCount + 1);

		let left, top;

		if (index < leftColumnCount) {
			// Left column
			left = uLeft;
			top = uTop + (index + 1) * leftRightSpacing;
		} else if (index < leftColumnCount + bottomRowCount) {
			// Bottom row
			const bottomIndex = index - leftColumnCount;
			left = uLeft + (bottomIndex + 1) * bottomSpacing;
			top = uTop + uHeight;
		} else {
			// Right column
			const rightIndex = index - leftColumnCount - bottomRowCount;
			left = uLeft + uWidth;
			top = uTop + uHeight - (rightIndex + 1) * leftRightSpacing;
		}

		return { left, top };
	};

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

	return (
		<div className="relative w-full h-full max-w-[800px] max-h-[700px] border-1 border-gray-600 bg-[#1a1a1a] rounded-sm">
			{beds.map((bed, index) => {
				const position = calculatePosition(index);
				const statusColor = bed.occupied
					? getStatusColor(bed.status)
					: "bg-green-200";
				const borderColor = bed.occupied
					? "border-gray-800"
					: "border-green-400";

				return (
					<div
						key={bed.id}
						className={`absolute w-10 h-10 rounded-md border-2 ${borderColor} flex items-center justify-center text-xs font-bold cursor-pointer transition-all hover:scale-150 hover:z-10 ${statusColor}`}
						style={{
							left: `${position.left}%`,
							top: `${position.top}%`,
							transform: "translate(-50%, -50%)",
						}}
						title={
							bed.occupied
								? `${bed.patientName} (${bed.status})`
								: "Available bed"
						}
					>
						<span className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-white">
							{bed.id}
						</span>
						{bed.occupied && (
							<span className="w-4 h-4 rounded-full bg-gray-900"></span>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Beds;
