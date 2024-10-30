let tasks = []

function addTask(taskText){
    const task = {id:Date.now(),text: taskText, completed: false};
    tasks.push(task);
}

function removeTask(taskId){

    tasks = tasks.filter(task => task.id !== taskId);
}
