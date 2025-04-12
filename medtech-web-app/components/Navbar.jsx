import React from "react";
import HeartLogo from "../src/assets/logo.png";
import LogoutIcon from "../src/assets/logout.svg";
import { useNavigate } from "react-router";

export default function Navbar() {
	let navigate = useNavigate();

	return (
		<nav className="flex flex-col w-20 items-center justify-between bg-[#1a1a1a] text-white">
			<img src={HeartLogo} alt="Heart Logo" className="h-14 w-14" />
			<button
				className="p-2 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
				aria-label="Logo button"
				onClick={() => navigate("/login")}
			>
				<img src={LogoutIcon} alt="Application Logo" className="h-8 w-8" />
			</button>
		</nav>
	);
}
