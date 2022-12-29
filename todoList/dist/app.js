"use strict";
// const btnEl = document.getElementById('btn')! as HTMLButtonElement; // ! set not null
const inputEl = document.getElementById('input');
const formEl = document.querySelector('form');
const listEl = document.getElementById('list');
formEl.addEventListener('submit', saveData);
const readData = () => {
    const myList = localStorage.getItem('myList');
    return myList ? JSON.parse(myList) : [];
};
const tasks = readData();
function saveData(e) {
    e.preventDefault();
    const newTask = {
        name: inputEl.value,
        completed: false
    };
    createList(newTask);
    tasks.push(newTask);
    console.log(tasks);
    localStorage.setItem('myList', JSON.stringify(tasks));
}
const createList = (task) => {
    if (task) {
        const liEl = document.createElement('li');
        const checkBoxEl = document.createElement('input');
        checkBoxEl.type = "checkbox";
        checkBoxEl.checked = task.completed;
        checkBoxEl.addEventListener('change', () => {
            task.completed = checkBoxEl.checked;
            updateDate();
        });
        liEl.append(task.name);
        liEl.append(checkBoxEl);
        listEl.append(liEl);
        console.log(task.name);
        inputEl.value = "";
    }
};
const updateDate = () => {
    localStorage.setItem('myList', JSON.stringify(tasks));
};
tasks.forEach(createList);
