# 🎯 HueHunter (Color-Guessing Game)

**HueHunter** is a logic-based color guessing game built using **HTML**, **CSS**, and **Vanilla JavaScript**.  
Players must guess a hidden color sequence within a limited number of attempts and time, based on the selected difficulty.  
The game includes user authentication and a dynamic scoring system powered by a **mock API**.

---

## 📄 Pages

- **Home** – Choose difficulty and view user info after login  
- **Sign Up** – Register using name, email, and password  
- **Sign In** – Log in with email and password  
- **Game** – Guess the secret color sequence using logic  
- **Scores** – View the top 10 and bottom 10 user scores  

---

## 🎮 Game Mechanics

- **Available Colors**: Red, Yellow, Orange, Green, Purple, Blue  
- **Difficulty Levels**:
  - 🟢 Easy – 6-color code, 5-minute timer  
  - 🟠 Medium – 8-color code, 10-minute timer  
  - 🔴 Hard – 10-color code, 15-minute timer  
- **Max Attempts**: 10 per game  
- **Scoring System**:
  - Easy → +5 points  
  - Medium → +10 points  
  - Hard → +20 points  
- **Timer Behavior**: Turns red during the last 10 seconds  
- **Feedback After Each Guess**:
  - ✅ Correct color in correct position  
  - ⚠️ Correct color but in wrong position  

---

## 🔐 Authentication

- Users must log in to play the game  
- **Sign Up Validation**:
  - Check for duplicate email via mock API  
  - Password confirmation required  
- **Sign In Validation**:
  - Alerts for invalid email or incorrect password (via API)

---

## 🏆 Scores Page

Displays real-time rankings:
- 🥇 Top 10 players with the highest scores  
- 🧊 Bottom 10 players with the lowest scores  
- All data is retrieved from the **mock API**

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Layout, colors, animations  
- **Vanilla JavaScript** – Game logic, authentication, timers  
- **Mock API** – Simulated backend for users, scores, and sessions  

---

## ✅ Features in Progress

- [x] Sign Up / Sign In (with mock API)  
- [x] Home page with difficulty selection  
- [x] Color selection and feedback logic  
- [x] Countdown timer with visual alert  
- [x] Scoreboard with API-driven sorting  
- [x] Secret password reveal and reset after game ends  

---

## ✍️ Team Members
[Mohammad Niko] 

[Ghazaal Norouzi]

[Member 3]

[Member 4]



