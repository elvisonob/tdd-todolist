class TodoList {
    constructor() {
        this.todoList = [] //one, two, three
    }

    create(description) {
        const todo = {
            id: this.todoList.length + 1,
            text: description,
            status: "incomplete"
        }
        this.todoList.push(todo)
        return todo

    }

    activity() {
        return this.todoList
    }
    setToComplete(id) {
        console.log('before computer says ', this.todoList[id - 1].status)
        this.todoList[id - 1].status = 'complete'
        console.log('after computer says ', this.todoList[id - 1].status)
        return this.todoList

    }

}

module.exports = TodoList

module.exports = TodoList