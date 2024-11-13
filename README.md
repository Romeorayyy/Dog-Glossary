# Dog Breeds Discovery 🐕

A React-based web application that allows users to explore and learn about different dog breeds. The application provides detailed information about various dog breeds, including their characteristics, temperament, and physical attributes.

## Features

- Search for dog breeds by name
- Detailed information cards for each breed including:
  - Good with children rating
  - Good with other dogs rating
  - Trainability level
  - Energy level
  - Barking tendency
  - Protectiveness
  - Shedding level
  - Grooming needs
- Physical characteristics:
  - Height and weight ranges
  - Life expectancy
- Responsive design that works on desktop and mobile devices
- Modern, clean UI with smooth animations

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)
- API Ninjas (Dog Breeds API)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Romeorayyy/Dog-Glossary.git
   cd Dog-Glossary
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Get your API key

   - Visit [API Ninjas](https://api-ninjas.com/)
   - Click "Get a Free API Key" or "Sign Up"
   - Create an account and get your API key

4. Create a `.env` file in the root directory and add your API Ninja key or use the .env.example file just remove the ".example"

   ```bash
   VITE_API_NINJA_KEY=your_api_key_here
   ```

5. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Locally preview the production build
- `npm run lint` - Run ESLint to check for code issues
