// const btnEl = document.getElementById('btn')! as HTMLButtonElement; // ! set not null
const inputEl = document.getElementById('input')! as HTMLInputElement;
const formEl = document.querySelector('form')!;
const listEl = document.getElementById('list')!;
formEl.addEventListener('submit', saveData);


interface Task {
    name:string,
    completed:boolean
}

const readData = ():Task[] => {
    const myList = localStorage.getItem('myList');
    return myList ? JSON.parse(myList) : [];
}


const tasks:Task[] = readData();


function saveData(e:SubmitEvent){
    e.preventDefault();
    const newTask : Task = {
        name : inputEl.value,
        completed : false
    }
    createList(newTask);
    tasks.push(newTask);
    console.log(tasks);
    localStorage.setItem('myList', JSON.stringify(tasks));
}


const createList = (task: Task) => {
    if (task) {
        const liEl = document.createElement('li');
        const checkBoxEl = document.createElement('input');
        checkBoxEl.type = "checkbox";
        checkBoxEl.checked = task.completed;
        checkBoxEl.addEventListener('change', () => {
            task.completed = checkBoxEl.checked;
            updateDate();
        })
        liEl.append(task.name);
        liEl.append(checkBoxEl);
        listEl.append(liEl);
        console.log(task.name);
        inputEl.value = "";
    }
}

const updateDate = () => {
    localStorage.setItem('myList', JSON.stringify(tasks));
}

tasks.forEach(createList);