# 🎯 HueHunter (Color-Guessing-Game)

**HueHunter** is a color-based logic game built with **HTML**, **CSS**, and **Vanilla JavaScript**.  
Players must guess a hidden color sequence within a limited number of attempts and time, based on the selected difficulty.  
The game includes user authentication and a score tracking system.

---

## 📄 Pages

- **Home**: Choose difficulty, see user info after login.
- **Sign Up**: Register with name, email, and password.
- **Sign In**: Login using email and password.
- **Game**: Guess the secret color code using logic.
- **Scores**: View top 10 and bottom 10 player scores.

---

## 🎮 Game Mechanics

- **Available Colors**: `Red`, `Yellow`, `Orange`, `Green`, `Purple`, `Blue`
- **Difficulty Levels**:
  - Easy: 6-color password, 5 minutes
  - Medium: 8-color password, 10 minutes
  - Hard: 10-color password, 15 minutes
- **Max Attempts**: 10 per game
- **Scoring System**:
  - Easy: +5 points
  - Medium: +10 points
  - Hard: +20 points
- Timer turns red in the last 10 seconds
- After each guess, feedback is given:
  - Correct color & position
  - Correct color but wrong position

---

## 🔐 Authentication Rules

- Users must **log in** before starting the game
- **Sign Up** validation:
  - Check for duplicate email
  - Match password confirmation
- **Sign In** validation:
  - Alert for wrong password or unknown email

---

## 🏆 Scores Page

- Displays:
  - Top 10 users with highest scores
  - Bottom 10 users with lowest scores

---

## 🛠️ Tech Stack

- **HTML5** – page structure  
- **CSS3** – layout, colors, animations  
- **JavaScript (Vanilla)** – game logic, authentication, timers  
- **LocalStorage** – saving users, scores, and session data (no backend)

---

## ✅ Features in Progress
 Sign Up / Sign In (with LocalStorage)

 Home page with level selection

 Color selection and feedback logic

 Timer with visual alerts

 Scoreboard with sorting logic

 Password reveal and reset after game ends

---

## ✍️ Team Members
[Mohammad Niko] 

[Ghazaal Norouzi]

[Member 3]

[Member 4]



