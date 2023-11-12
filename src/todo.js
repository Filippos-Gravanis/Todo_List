export class todo {
    constructor(title, duedate, priority,group) {
        this.id = Date.now() + Math.floor(Math.random() * 100000)
        this.title = title
        this.duedate = duedate
        this.priority = priority
        this.group = group
        this.completed = false

    }
}