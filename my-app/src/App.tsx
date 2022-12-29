import React, { useState } from 'react';
import Task from './components/Task';
import TaskList from './components/TaskList';
import Item from './components/models/items';
import TaskForm from './components/TaskForm';



function App() {
  const [items, setItems] = useState<Item[]>([]);

  const generateId = () => {
    return +(new Date());
  }

  // life the data from the child component
  const addItem = (name:string) => {
    console.log("value form : ", name);
    setItems([...items, {id: generateId(), name}]);
  }


  return (
    <div className="App">
      <TaskForm onAddItem={addItem}/>
      <TaskList items={items} />
    </div>
  );
}

export default App;
