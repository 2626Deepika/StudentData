let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let ul = document.getElementById("un");

let student = [
    {name: "Deepika", age: 21},
    {name: "Ganesh", age: 20},
    {name: "Chandrakala", age: 19},
    {name: "Srinivas", age: 17},{
        name:"Vijay",age:18
    },{name:"Vasu",age:16},{name:"Seetha",age:23},{name:"Ram",age:25}
];

let s = [...student].sort((a,b) => a.name[0].localeCompare(b.name[0]));
let p = [...student].sort((a,b) => a.age - b.age);

function clearList() {
    ul.innerHTML = "";
}

let asd = (i) => {
    let li = document.createElement('li');
    li.textContent = i.name + "  " + i.age;
    ul.classList.add('ull')
    ul.appendChild(li);
}

btn1.onclick = () => {
    clearList();
    for(let i of s) {
        asd(i);
    }
}

btn2.onclick = () => {
    clearList();
    for(let i of p) {
        asd(i);
    }
}

btn3.onclick = () => {
    clearList();
    for(let i of student) {
        asd(i);
    }
}
