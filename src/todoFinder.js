export class todoFinder {
    constructor(todo, todos) {
        this.todo = todo
        this.todos = todos
    }

    find() {
        let index = 0
        this.todos.forEach(listTodo => {

            if (listTodo.id == this.todo.id) {
                index = this.todos.indexOf(listTodo)
            }
        })
        return index
    }

}