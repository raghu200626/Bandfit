# BandFit 🏋️‍♂️

> **Your Personal Resistance Band Coach, Workout Planner, Exercise Kinematics Visualizer & Calorie Calculator.**

BandFit is a responsive web application designed to help fitness enthusiasts build muscle and achieve their weight goals using resistance bands. It features an intelligent biometric calorie & macro calculator, custom 7-day workout generation, a food logger with Indian and international food databases, and an interactive 2D skeletal kinematics engine rendering animated exercise technique guides.

---

## ✨ Features

### 1. 🏠 Biometric Dashboard & Nutrition Engine
- **Accurate Metric Calculations**:
  - **BMI (Body Mass Index)** with health classification indicators.
  - **BMR (Basal Metabolic Rate)** calculated using the clinically validated **Mifflin-St Jeor formula**.
  - **TDEE (Total Daily Energy Expenditure)** adapted to 4 physical activity tiers.
  - **Target Calorie Surplus** customized for realistic, safe weekly weight gain.
- **Precision Macronutrient Splitting**:
  - **Protein**: 2.2g per kg of bodyweight for hypertrophy.
  - **Fats**: 25% of total caloric intake.
  - **Carbohydrates**: Remainder of daily energy balance.
- **Personalized Daily Meal Plan**:
  - Automatically structures a 6-meal daily schedule (Breakfast, Mid-morning snack, Lunch, Evening fuel, Dinner, and Post-workout) with balanced Indian and global food suggestions.

### 2. 🏋️ Tailored 7-Day Resistance Band Workout Routine
- Structured split designed specifically for progressive overload with resistance bands:
  - **Day 1**: Chest & Triceps Hypertrophy
  - **Day 2**: Back & Biceps Pull Focus
  - **Day 3**: Lower Body (Quads, Glutes & Calves)
  - **Day 4**: Active Recovery / Band Mobility
  - **Day 5**: Shoulder & Core Sculpt
  - **Day 6**: Full-Body Band Circuit & Conditioning
  - **Day 7**: Full Rest & Recovery
- Complete with sets, rep ranges, rest intervals, and muscle activation notes.

### 3. 🎥 Articulated 2D Skeletal Kinematics & Exercise Library
- **Custom Kinematic Animation Engine**:
  - Renders an interactive 2D skeletal mannequin in SVG using smooth linear interpolation (`lerp`).
  - Displays real-time movement phases: *Start Position*, *Concentric (Lift)*, *Peak Contraction*, and *Eccentric (Lower)*.
  - Visualizes dynamic band stretch, anchor points, and anatomical motion paths.
- **Exercise Catalog**:
  - Filter by muscle group: Chest, Back, Arms, Legs, Shoulders, Core.
  - Modal view featuring enlarged step-by-step execution guides, form cues, rep trackers, and next/previous exercise navigation.

### 4. 🔥 Kcal Calculator & Food Logger
- **Built-in Nutritional Database**: Includes over 80+ common foods, with deep coverage of Indian staples (Idli, Dosa, Chapati, Dal, Paneer, Biryani), snacks, protein sources, junk foods, and beverages.
- **Real-Time Search & Autocomplete**: Instant search by food name with live suggestions.
- **Portion Scaler**: Adjust portion size in grams with instant macro recalculation (Calories, Protein, Carbs, Fat).
- **Daily Food Log**: Add and track items across the day with visual progress counters.

### 5. 📂 Profile Storage & Hybrid Mobile Ready
- **Express Backend API**: Save and load user profiles to local persistent storage (`profiles.json`).
- **Android WebView Bridge**: Integrated support for Android native JavaScript interfaces (`window.Android`), allowing BandFit to be packaged directly into a hybrid mobile app.

---

## 🛠️ Technology Stack

- **Frontend**:
  - HTML5 & CSS3 (Custom design system, CSS variables, glassmorphism UI)
  - Typography: [Syne](https://fonts.google.com/specimen/Syne) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
  - Vanilla JavaScript (ES6+, SVG-based skeletal kinematics engine, zero external JS frameworks)
- **Backend**:
  - [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
  - [CORS](https://www.npmjs.com/package/cors) for flexible cross-origin handling
  - Native Node `fs` & `path` for file-based JSON persistence

---

## 📁 Project Structure

```text
bandfit/
├── index.html            # Main Single-Page Application interface
├── styles.css            # Custom CSS styling, animations, and responsive layout
├── app.js                # Core frontend logic, kinematics engine, food DB & state
├── server.js             # Node.js Express server & REST API
├── profiles.json         # Local persistent storage for saved user profiles
├── package.json          # Node.js project manifest and dependencies
├── package-lock.json     # Locked dependency tree
├── .gitignore            # Git exclusion rules
├── REQUIREMENTS.md       # Detailed system requirements and environment specs
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version `16.x` or higher) and `npm` installed on your machine.

Verify installation:
```bash
node -v
npm -v
```

### 1. Installation

Clone or download the repository to your local machine:
```bash
git clone https://github.com/<your-username>/bandfit.git
cd bandfit
```

Install the required dependencies:
```bash
npm install
```

### 2. Running the Application

Start the local server:
```bash
npm start
```
Or for development with automatic reload on changes:
```bash
npm run dev
```

Once started, open your web browser and navigate to:
```
http://localhost:3000
```

> **Note**: You can also open `index.html` directly in any web browser without running the server. The workout planner, exercise animations, and calorie calculator will function completely offline. The server is only required for saving and loading named profiles to disk.

---

## 📡 API Endpoints

The Express server exposes the following REST API endpoints:

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/profiles` | List all saved profile names | None |
| `GET` | `/api/profile/:name` | Retrieve specific user stats & plan by profile name | None |
| `POST` | `/api/profile` | Save or update a profile | `{ "name": "string", "userStats": { ... } }` |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
