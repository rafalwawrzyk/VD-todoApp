//create todo complete component        
var TodosComponent = Vue.extend({
    data: function () {
        return {
            edit: false
        }
    },
    props: ['todo'],
    template: '<p :class="{taskDone:todo.complete}"><span @click="onclicked" v-show="!edit">{{todo.name}}</span><span v-show="edit"><input @keyup.enter="savedTodo" v-model="todo.name"  class="searchInput"/><button @click="savedTodo"><i class="fa fa-pencil" aria-hidden="true"></i></button></span> </p>',
    methods: {
        onclicked: function () {
            this.edit = true;
        },
        savedTodo: function () {
            this.edit = false;
        }
    }
})

Vue.component('todo-component', TodosComponent);

//default vue instance
new Vue({
    el: "#app",
    data: {
        title: "ToDo App",
        show: true,
        visibility: 'all',
        hide: false,
        search: '',
        todos: [{
                name: 'first task',
                complete: false,
                    },
            {
                name: 'second',
                complete: false
                    }
                ],

        complete: 'complete'
    },
    methods: {
        //add todo method
        addTodo: function () {
            let input = document.querySelector('.addBox input');
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
            if (input.value != "") {
                this.todos.push({
                    name: input.value,
                    complete: false,
                })
                input.value = "";
            }


        },
        //remove todo method
        removeTodo: function (index) {
            this.todos.splice(index, 1)

        },
        //filter uncompleted
        uncompleted: function () {
            let list = document.querySelectorAll('p')
            for (let i = 0; i < list.length; i++) {
                if (list[i].className == "taskDone") {
                    list[i].parentElement.style.display = "none"
                } else {
                    list[i].parentElement.style.display = "block"
                }
            }
        },
        //filter completed
        completed: function () {
            let list = document.querySelectorAll('p')
            for (let i = 0; i < list.length; i++) {
                if (list[i].className !== "taskDone") {
                    list[i].parentElement.style.display = "none"
                } else {
                    list[i].parentElement.style.display = "block"
                }
            }
        },
        //filter all
        all: function () {
            let list = document.querySelectorAll('p');
            for (let i = 0; i < list.length; i++) {
                list[i].parentElement.style.display = "block"
            }
        },




    },
    // search input method
    computed: {
        filtered: function () {
            return this.todos.filter((todo) => {
                return todo.name.match(this.search)
            })
        }
    },
    // local Storage methods
    watch: {
        todos: {
            //set todos to local storage
            handler: function () {
                localStorage.setItem('todos', JSON.stringify(this.todos))
            },
            deep: true

        }
    },
    mounted: function () {
        //get todos form localStorage
        //and set todos to json todos
        if (localStorage.getItem('todos')) {
            this.todos = JSON.parse(localStorage.getItem('todos'));
        }
    },
    beforeMount:function(){
        console.log('hello');
        let fullpage = document.querySelector('.fullpage-animate');
        fullpage.classList.add('hideAnimate')
    }
})


