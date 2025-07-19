let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let ul = document.getElementById("un");

let student = [
    {name: "b", age: 2},
    {name: "a", age: 20},
    {name: "c", age: 19},
    {name: "d", age: 17}
];

let s = [...student].sort((a,b) => a.name[0].localeCompare(b.name[0]));
let p = [...student].sort((a,b) => a.age - b.age);

function clearList() {
    ul.innerHTML = "";
}

let asd = (i) => {
    let li = document.createElement('li');
    li.textContent = i.name + "  " + i.age;
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
