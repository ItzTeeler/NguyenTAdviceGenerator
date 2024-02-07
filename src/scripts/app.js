const AdviceApi = async () => {
    const promise = await fetch("https://nguyentadvicegen.azurewebsites.net/AdviceGen/AdviceGen")
    const data = await promise.text()
    return data;
}


let btn = document.getElementById("btn")
let advice = document.getElementById("advice")
let adviceNum = document.getElementById("advice-id");
btn.addEventListener("click", async ()=>{
    let data = await AdviceApi();
    let randomNum = await RandomNumGen();
    console.log(data)
    advice.innerText = data;
    adviceNum.innerText = randomNum;
})

const RandomNumGen = () =>{
    return Math.floor(Math.random() * 100) + 1
}