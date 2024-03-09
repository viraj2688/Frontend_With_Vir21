const text = document.getElementById("text").textContent;
const btn1 = document.getElementById("btn");


btn1.addEventListener("click",() =>{
    let i=1;
    navigator.clipboard.writeText(text + ++i);
});


// const text =document.getElementById('text').textContent;

// const btn =document.getElementById('').t
