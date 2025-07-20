//تایمر و پایان زمان

const div = document.createElement("div");
document.body.append(div);

const p = document.createElement("p");
p.style.fontSize = "1.5rem";
p.style.fontWeight = "bold";
div.append(p);
let min = 4;
let sec = 59;
export const timerEasy=setInterval(() => {
        p.textContent = `Time Left: ${min} : ${sec}`;  
        sec--;
        if (sec === 0) {
            min--;
            sec = 59;
        };
         if (min === 0 && sec === 9) {
            p.style.color = "red";
        }
         if (min < 0) {
            clearInterval(timerEasy)
        };
}, 1000);

const p2 = document.createElement("p");
p2.style.fontSize = "1.5rem";
p2.style.fontWeight = "bold";
div.append(p2);
let min2 = 9;
let sec2 = 59;
export const timerMedium =setInterval(() => {
    p2.textContent = `Time Left: ${min2} : ${sec2}`;
    sec2--;
    if (sec2===0) {
        min2--;
        sec2 = 59;
    }
    if (min2===0&&sec2===9) {
        p2.style.color = "red";
    }
    if (min2<0) {
        clearInterval(timerMedium);
    }
}, 1000);

const p3 = document.createElement("p");
p3.style.fontSize = "1.5rem";
p3.style.fontWeight = "bold";
div.append(p3);
let min3 = 14;
let sec3 = 59;
export const timerHard=setInterval(() => {
    p3.textContent = `Time Left: ${min3} : ${sec3}`;
    sec3--;
    if (sec3===0) {
        min3--;
        sec3 = 59;
    }
    if (min3===0&&sec3===9) {
        p3.style.color = "red";
    }
    if (min3<0) {
        clearInterval(timerHard);
    }
}, 1000);