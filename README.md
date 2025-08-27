# 🗺️ Tour Guide

Tour Guide is a modern AI-powered travel planning web app built with React. It helps users discover destinations, generate personalized itineraries, and manage their trips with ease. The app leverages Google Places Autocomplete, Gemini GenAI, and Firebase to deliver a seamless and interactive travel experience.

---

## ✨ Features

- **AI-Powered Trip Planning:**  
  Generate custom travel plans and itineraries using Google Gemini GenAI.

- **Google Places Integration:**  
  Effortless destination search and autocomplete with Google Places API.

- **Personalized Recommendations:**  
  Get hotel and activity suggestions tailored to your preferences.

- **Trip Management:**  
  Save, view, and manage your planned trips.

- **Authentication:**  
  Secure Google Sign-In for a personalized experience.

- **Responsive Design:**  
  Mobile-friendly interface with a hamburger menu for easy navigation.

---

## 🚀 Demo

**Live Demo:**  
[https://tourguide-8c872.web.app/](TourGuide)

---

## 🚀 How It Works

1. **Sign In:**  
   Users sign in with Google to access personalized features.

2. **Plan a Trip:**

   - Enter your destination, trip duration, number of travelers, and budget.
   - The app uses Gemini GenAI to generate a detailed travel plan in JSON format.

3. **View Itinerary:**

   - See day-wise plans, recommended hotels, and must-visit places.
   - All cards (hotels, places) are styled for consistent appearance.

4. **Manage Trips:**
   - Save your favorite trips.
   - View and manage all your planned trips from the dashboard.

---

## 🛠️ Tech Stack

- **Frontend:**

  - [React](https://react.dev/) (with Vite)
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [Shadcn/UI](https://ui.shadcn.com/) for modern UI components
  - [React Router](https://reactrouter.com/) for routing

- **APIs & AI:**

  - [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) for location autocomplete
  - [Google Gemini GenAI](https://aistudio.google.com/) for itinerary generation

- **Backend & Storage:**

  - [Firebase](https://firebase.google.com/) for authentication and Firestore database

- **Other:**
  - [Sonner](https://sonner.emilkowal.ski/) for notifications
  - [Lucide React](https://lucide.dev/) for icons

---

## 📦 Project Structure

```
public/
  assets/           # Images and static assets
src/
  components/       # Reusable UI and custom components
  constants/        # App-wide constants (options, prompts)
  lib/              # Utility functions
  service/          # API and Firebase config
  tour-guide/       # Layout, header, footer, home
  view-trip/        # Trip viewing components
  App.jsx           # Main app component
  main.jsx          # Entry point
```

---

## ⚡ Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/tour-guide.git
   cd tour-guide
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your Firebase and Google API keys:
     ```
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
     VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
     VITE_GEMINI_API_KEY=your_gemini_api_key
     ```

4. **Run the app:**

   ```sh
   npm run dev
   ```

5. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## 📱 Responsive Design

- The header adapts to mobile screens with a hamburger menu.
- All cards and sections are styled for a consistent look on all devices.

---

## 📝 License

This project is for educational and demonstration purposes.

---

## 🙏 Acknowledgements

- Google for Maps, Places, and Gemini APIs
- Firebase for backend services
- Shadcn/UI and Tailwind CSS for beautiful UI
- All open-source contributors

---

## 👨‍💻 Developed By: _Shivansh Singh_

**Happy Travels! 🌍✈️**
