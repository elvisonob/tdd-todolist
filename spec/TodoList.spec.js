const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
    let todoList

    beforeEach(() => {
        todoList = new TodoList()
    })

    it("creates a todo item", () => {
        // set up
        const expected = {
                id: 1,
                text: "turn the heating on!",
                status: "incomplete"
            }
            // execute
        const result = todoList.create("turn the heating on!")
            // verify
        expect(result).toEqual(expected)
    })

    //Get all todo items
    it("Get todo list", () => {
        // set up
        const expected = [{
                id: 1,
                text: "turn the heating on!",
                status: "incomplete"
            },
            {
                id: 2,
                text: "making a meal",
                status: "incomplete"
            }
        ]

        // execute
        todoList.create('turn the heating on!')
        todoList.create('making a meal')
        const result = todoList.activity()

        // verify
        expect(result).toEqual(expected)
    })

    //Set a todo completed by its ID
    it("Set todo to complete", () => {
        // set up
        const expected = [{
                id: 1,
                text: "turn the heating on!",
                status: "complete"
            },

        ]

        // execute
        todoList.create('turn the heating on!')
        const result = todoList.setToComplete(1)

        // verify
        expect(result).toEqual(expected)
    })
})