import {
    GoogleGenAI,
} from '@google/genai';

async function main(promptText) {
    const ai = new GoogleGenAI({
        apiKey: import.meta.env.VITE_GEMINI_API_KEY,
    });
    const config = {};
    const model = 'gemini-2.0-flash-lite';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: promptText,
                    // `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format.`,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });
    // let fileIndex = 0;
    let resultText = '';
    for await (const chunk of response) {
        resultText += chunk.text;
    }

    return resultText

    // try {
    //     const json = JSON.parse(resultText);
    //     console.log(json);
    // } catch (e) {
    //     console.error('Failed to parse JSON:', e, resultText);
    // }
}

export default main;