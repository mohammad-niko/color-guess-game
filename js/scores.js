const div = document.createElement("div");
document.body.append(div);
div.classList.add("container", "bg-light", "shadow", "mt-5");
const h1 = document.createElement("h1");
div.append(h1);
h1.classList.add("p-3")
h1.textContent = "LeaderBoard";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";

async function fetchData() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    try {
        const { data } = await axios.get("https://6877a681dba809d901f05905.mockapi.io/scores/scores", config);
        // console.log(data);
        return data;
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export async function playerHeighestSore() {

    const table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    div.append(table);
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.append(tr);
    const th1 = document.createElement("th");
    th1.textContent = "Full Name";
    const th2 = document.createElement("th");
    th2.textContent = "Score";
    tr.append(th1, th2);
    const tbody = document.createElement("tbody");
    table.append(thead, tbody);
    
    const divbtn = document.createElement("div");
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-success","mb-3");
    btn.textContent = "Show Lowest Scores";
    const a2 = document.createElement("a");
    a2.classList.add("btn", "btn-success","ms-3","mb-3");
    a2.textContent = "Home";
    a2.href = "./index.html";
    divbtn.append(btn,a2);
    div.append(divbtn);

    btn.addEventListener("click", () => {
        table.style.display = "none"
    })
    btn.addEventListener("click", playerLowestSore);
    btn.addEventListener("click", () => {
        divbtn.style.display="none"
    })

    try {

        const response = await fetchData();
        // console.log(response);
        
        const filtering = response.filter((element) => element.score > 90);
        // console.log(filtering);
        filtering.sort((a, b) => b.score - a.score);

        filtering.forEach((element,index) => {
            if (index===10) {
                throw new Error;
            }
                const tr = document.createElement("tr");
                tbody.append(tr);
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td2.classList.add("td2");
                tr.append(td1, td2);
                td1.textContent = element.name;
                td2.textContent = element.score;

        });
               

    } catch (error) {
        console.log(error.message);
        
    }
    
}

 async function playerLowestSore() {

    const table = document.createElement("table");
    table.classList.add("table", "table-bordered");
    div.append(table);
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.append(tr);
    const th1 = document.createElement("th");
    th1.textContent = "Full Name";
    const th2 = document.createElement("th");
    th2.textContent = "Score";
    tr.append(th1, th2);
    const tbody = document.createElement("tbody");
    table.append(thead, tbody);
    
    const divbtn = document.createElement("div");
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-success","mb-3");
    btn.textContent = "Show Lowest Scores";
    const a2 = document.createElement("a");
    a2.classList.add("btn", "btn-success","ms-3","mb-3");
    a2.textContent = "Home";
    a2.href = "./index.html";
    divbtn.append(btn,a2);
    div.append(divbtn);


    try {

        const response = await fetchData();
        // console.log(response);
        const filtering = response.filter((element) => element.score < 10);
        filtering.sort((a, b) => a.score - b.score);
        filtering.forEach((element,index) => {
            if (index===10) {
                throw new Error;
            }
                const tr = document.createElement("tr");
                tbody.append(tr);
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                td2.classList.add("td2");
                tr.append(td1, td2);
                td1.textContent = element.name;
                td2.textContent = element.score;
        });
 

    } catch (error) {
        console.log(error.message);
        
    }

}
