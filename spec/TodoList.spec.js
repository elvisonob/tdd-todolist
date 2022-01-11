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

    it("Get incomplete todo items", () => {
        // set up
        const expected = [{
                id: 2,
                text: "taking a hike",
                status: "incomplete"
            },

        ]

        // execute
        todoList.create('turn the heating on!')
        todoList.setToComplete(1)
        todoList.create('taking a hike')
        const result = todoList.getIncomplete(2)


        // verify
        expect(result).toEqual(expected)
    })

    it("Get Complete todo items", () => {
        // set up
        const expected = [{
                id: 1,
                text: "turn the heating on!",
                status: "complete"
            },

            {
                id: 2,
                text: 'making a meal',
                status: 'complete'
            },

            {
                id: 3,
                text: 'having dinner',
                status: 'complete'
            }


        ]

        // execute
        todoList.create('turn the heating on!')
        todoList.setToComplete(1)
        todoList.create('making a meal')
        todoList.setToComplete(2)
        todoList.create('having dinner')
        todoList.setToComplete(3)
        todoList.create('taking a hike')
        const result = todoList.getComplete()


        // verify
        expect(result).toEqual(expected)
    })

    it("Search and return a todo item by its ID", () => {
        // set up
        const expected = {
                id: 3,
                text: 'having dinner',
                status: 'incomplete'
            }
            // execute
        todoList.create('turn the heating on!')
        todoList.create('making a meal')
        todoList.create('having dinner')
        const result = todoList.searchItem(3)
            // verify
        expect(result).toEqual(expected)
    })

    it("Return a message that doesn't exist", () => {
        // set up
        const expected = 'negative'
            // execute
        todoList.create('turn the heating on!')
        todoList.create('making a meal')
        todoList.create('having dinner')
        const result = todoList.searchItem(4)
            // verify
        expect(result).toEqual(expected)
    })

    it("Remove a todo item", () => {
        // set up
        const expected = []
            // execute
        todoList.create('turn the heating on!')
        const result = todoList.removeItem(1)
            // verify
        expect(result).toEqual(expected)
    })
})