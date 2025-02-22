let button = document.querySelector(".buttonGenerate");
let text = document.querySelector(".txt");
let randomNo = Math.floor((Math.random() * 140) + 1);
let baseURL = `https://catfact.ninja/fact?max_length=${randomNo}`;

const clickRegistry = () => {
    button.addEventListener("click", async ()=>{
        let response = await fetch(baseURL);
        let data = await response.json();
        text.innerText = data.fact;
    })
};
clickRegistry();




