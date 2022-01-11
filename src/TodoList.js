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
        //console.log('before computer says ', this.todoList[id - 1].status)
        this.todoList[id - 1].status = 'complete'
            //console.log('after computer says ', this.todoList[id - 1].status)
        return this.todoList

    }

    getIncomplete() {
        const output = []
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].status === 'incomplete') {
                output.push(this.todoList[i])
            }

        }
        return output
    }

    getComplete() {
        const output = []
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].status === 'complete') {
                output.push(this.todoList[i])
            }

        }
        return output
    }
    searchItem(id) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                return this.todoList[i]
            }
        }
        return 'negative'
    }

    removeItem(id) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === id) {
                this.todoList.splice([i], 1)
            }
        }
        return this.todoList
    }

}
//Remove a todo item by its ID

module.exports = TodoList