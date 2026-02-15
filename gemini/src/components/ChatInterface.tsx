import type React from "react";
import { useEffect, useRef, useState } from "react";
import "../styles/oracle.css";

interface ChatInterfaceProps {
	onAsk: (question: string) => void;
	isThinking: boolean;
	response: string | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
	onAsk,
	isThinking,
	response,
}) => {
	const [input, setInput] = useState("");
	const [displayedResponse, setDisplayedResponse] = useState("");
	const responseRef = useRef<HTMLDivElement>(null);

	// Typewriter effect
	useEffect(() => {
		if (response) {
			setDisplayedResponse("");
			let i = 0;
			const intervalId = setInterval(() => {
				setDisplayedResponse((prev) => prev + response.charAt(i));
				i++;
				if (i >= response.length) {
					clearInterval(intervalId);
				}
			}, 30); // Speed of typing
			return () => clearInterval(intervalId);
		} else {
			setDisplayedResponse("");
		}
	}, [response]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (input.trim() && !isThinking) {
			onAsk(input);
			setInput("");
		}
	};

	return (
		<div className="chat-interface">
			<div className="response-area" ref={responseRef}>
				{displayedResponse}
				<span className="cursor">|</span>
			</div>

			<form onSubmit={handleSubmit} className="input-area">
				<input
					type="text"
					className="oracle-input"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Ask the Oracle anything..."
					disabled={isThinking}
					// biome-ignore lint/a11y/noAutofocus: Intentional UI behavior
					autoFocus
				/>
			</form>
		</div>
	);
};

export default ChatInterface;
