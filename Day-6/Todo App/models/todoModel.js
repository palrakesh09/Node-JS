let todos = [
    { id: 1, task: 'Learn MVC structure', completed: true },
    { id: 2, task: 'Implement To-Do app', completed: false }
];

let nextId = 3;


function getAllTodos() {
    return todos;
}

function addTodo(task) {
    if (!task) return null;
    const newTodo = {
        id: nextId++,
        task: task,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}

function toggleTodoCompleted(id) {
    const todoId = parseInt(id);
    const todo = todos.find(t => t.id === todoId);
    if (todo) {
        todo.completed = !todo.completed;
        return true;
    }
    return false;
}

function getTodoById(id) {
    const todoId = parseInt(id);
    return todos.find(t => t.id === todoId);
}

function updateTodoTask(id, newTask) {
    const todoId = parseInt(id);
    const todo = todos.find(t => t.id === todoId);

    if (todo && newTask && newTask.trim() !== '') {
        todo.task = newTask.trim();
        return true;
    }
    return false;
}

function deleteTodo(id) {
    const initialLength = todos.length;
    const todoId = parseInt(id);
    todos = todos.filter(t => t.id !== todoId);
    return todos.length < initialLength;
}

module.exports = {
    getAllTodos,
    addTodo,
    toggleTodoCompleted,
    deleteTodo,
    getTodoById,
    updateTodoTask
};