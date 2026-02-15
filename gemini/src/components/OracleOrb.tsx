import type React from "react";
import type { Mood } from "../lib/oracle";
import "../styles/oracle.css";

interface OracleOrbProps {
	isThinking: boolean;
	mood: Mood;
}

const OracleOrb: React.FC<OracleOrbProps> = ({ isThinking, mood }) => {
	let orbClass = "orb";
	if (isThinking) {
		orbClass += " thinking";
	} else if (mood === "glitchy") {
		orbClass += " glitchy";
	}

	return (
		<div className="orb-wrapper">
			<div className={orbClass}></div>
			{/* Decorative Rings */}
			<div className="rings ring-1"></div>
			<div className="rings ring-2"></div>
			<div className="rings ring-3"></div>

			{/* Optional: Add particles or other effects based on mood here later */}
		</div>
	);
};

export default OracleOrb;
