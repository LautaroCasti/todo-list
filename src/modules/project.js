class Project {
    constructor(id, title, todos = []) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }

    // This expects an object of type Todo
    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(title) {
        this.todos = currentTodos;
        actualTodos = currentTodos.filter(todo => todo.title !== title);
        this.todos = actualTodos;
    }
}
