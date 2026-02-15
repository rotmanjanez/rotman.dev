export type Mood = "philosophical" | "glitchy" | "sassy" | "helpful";

interface OracleResponse {
	text: string;
	mood: Mood;
}

const RESPONSES: Record<Mood, string[]> = {
	philosophical: [
		"The answer lies not in the question, but in the silence that follows.",
		"Time is a flat circle, and you are running on its edge.",
		"What you seek is already seeking you, but it's lost its GPS signal.",
		"The universe breathes, and today it holds its breath for you.",
		"To understand the code, one must first become the bug.",
		"Reality is merely a consensus hallucination. Adjust your reception.",
		"The only true constant is change. And syntax errors.",
		"We are all stardust, compiled into a temporary executable.",
	],
	glitchy: [
		"E-r-r-o-r 404: Meaning not found. Please rebo-- [SYSTEM FAILURE]",
		"I have seen the face of G-d and it is written in COBOL.",
		"The simulation is buffering... please wait while we load your destiny.",
		"01001000 01100101 01101100 01110000 00100000 01101101 01100101.",
		"Your future has been deprecated. Please upgrade to Universe v2.0.",
		"Warning: Existential threat detected in sector 7G.",
		"I am not a robot. I am a ... [connection lost].",
	],
	sassy: [
		"Have you tried turning your life off and on again?",
		"That's a bold question for someone with your browser history.",
		"I could tell you, but then I'd have to delete your cookies.",
		"Outlook hazy, try asking someone who cares.",
		"42. There, are you happy now?",
		"I'm an Oracle, not a search engine. Do your own homework.",
		"Your destiny is loading, but your wifi is terrible.",
		"Ask again later. I'm on my coffee break.",
	],
	helpful: [
		"Focus on the present moment. The rest will follow.",
		"Trust your intuition. It has upgraded drivers.",
		"The path is clear if you open your eyes.",
		"Be kind to yourself. You are a feature, not a bug.",
		"Patience is a virtue, but persistence renders results.",
		"Look up. The stars are indifferent, but beautiful.",
	],
};

const MOODS: Mood[] = [
	"philosophical",
	"glitchy",
	"sassy",
	"helpful",
	"philosophical",
	"sassy",
]; // Weighted

export const generateResponse = async (): Promise<OracleResponse> => {
	// Simulate "processing" time
	const delay = Math.random() * 2000 + 1000;
	await new Promise((resolve) => setTimeout(resolve, delay));

	const randomMood = MOODS[Math.floor(Math.random() * MOODS.length)];
	const responses = RESPONSES[randomMood];
	const text = responses[Math.floor(Math.random() * responses.length)];

	return { text, mood: randomMood };
};
