
const {createApp} = Vue;

createApp ({
    data() {
        return {
            newTodo:'',
            todos: [
                {
                text: 'TheFinals',
                done: true,
                 },
                {
                text: 'Valorant',
                done: true,
                },
                {
                text: 'Apex Legends',
                done: true,
                },
                {
                text: 'Fortnite',
                done: false,
                }
            ]
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length > 0) {
                let newElem={};
                newElem.text = this.newTodo;
                newElem.done = false
                // this.todos.push(this.newTodo.trim());
                // this.newTodo = '';
                this.todos.push(newElem);
                this.newTodo= '';
            }
        },
        removeTodo(i) {
            console.log(i, this.todos[i]);
            this.todos.splice(i, 1);
        }
    }
}).mount('#app');