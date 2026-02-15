import { useState } from "react";
import "./styles/oracle.css"; // Import custom styles
import ChatInterface from "./components/ChatInterface";
import OracleOrb from "./components/OracleOrb";
import { generateResponse, type Mood } from "./lib/oracle";

function App() {
	const [response, setResponse] = useState<string | null>(null);
	const [mood, setMood] = useState<Mood>("philosophical");
	const [isThinking, setIsThinking] = useState(false);

	const handleAsk = async (_question: string) => {
		setIsThinking(true);
		setResponse(null); // Clear previous response

		// Simulate different "thinking" moods or just default while processing
		setMood("philosophical");

		try {
			const oracleData = await generateResponse();
			setResponse(oracleData.text);
			setMood(oracleData.mood);
		} catch (error) {
			console.error("Oracle malfunction:", error);
			setResponse("I seem to have lost my connection to the ether. Try again.");
			setMood("glitchy");
		} finally {
			setIsThinking(false);
		}
	};

	return (
		<div className="oracle-container">
			<OracleOrb isThinking={isThinking} mood={mood} />

			<div className={`response-area ${response ? "fade-in" : "hidden"}`}>
				{/* The ChatInterface handles the typewriter effect, pass the string here? 
            Wait, ChatInterface handles input AND output based on my design. 
            Let's adjust. */}
			</div>

			<ChatInterface
				onAsk={handleAsk}
				isThinking={isThinking}
				response={response}
			/>
		</div>
	);
}

export default App;
