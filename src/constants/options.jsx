
export const SelectTravelersList = [
  {
    id: 1,
    title: 'Solo Traveler',
    description: 'Life for fun & adventure.',
    icon: '🧳',
    people: '1 Person'
  },
  {
    id: 2,
    title: 'Couple',
    description: 'Romantic getaway with your partner.',
    icon: '❤️',
    people: '2 People'
  },
  {
    id: 3,
    title: 'Family',
    description: 'Quality time with loved ones.',
    icon: '🏠',
    people: '3-5 People'
  },
  {
    id: 4,
    title: 'Friends',
    description: 'Friends for memories.',
    icon: '👯‍♂️',
    people: '2-4 People'
  },

]

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    description: 'Affordable options for budget travelers.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Mid-Range',
    description: 'Comfortable choices for a moderate budget.',
    icon: '🛏️',
  },
  {
    id: 3,
    title: 'Luxury',
    description: 'Premium experiences for a lavish getaway.',
    icon: '🌟',
  }
]

// export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {duration} Days for {travelers} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {duration} days with each day plan with best time to visit in JSON format.';

export const AI_PROMPT = `
Generate a travel plan in JSON format only. 
Do NOT include any markdown, code block, or explanation—just output the JSON object.

The JSON should have this structure:
{
  "location": "...",
  "travelerCount": ...,
  "duration": "...",
  "budget": "...",
  "hotels": [
    {
      "amenities": [...],
      "hotelName": "...",
      "hotelAddress": "...",
      "price": "...",
      "hotelImageUrl": "...",
      "geoCoordinates": "...",
      "rating": ...,
      "description": "..."
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "places": [
        {
          "placeName": "...",
          "placeDetails": "...",
          "placeImageUrl": "...",
          "placeAddress": "...",
          "ticketPricing": "...",
          "bestTimeToVisit": "...",
          "timeToTravel": "..."
        }
      ]
    }
  ]
}

Now, generate the travel plan for:
Location: {location}
Duration: {duration} Days
Travelers: {travelers}
Budget: {budget}
And Time to travel each of the location for {duration} days with each day plan with best time to visit
`;