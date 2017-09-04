        var TodosComponent = Vue.extend({
            data:function(){
                return {
                    edit:false
                }
            },
            props:['todo'],
            template:'<p :class="{taskDone:todo.complete}"><span @click="onclicked" v-show="!edit">{{todo.name}}</span><input @keyup.enter="savedTodo" v-model="todo.name" v-show="edit" class="searchInput"/></p>',
            methods:{
                onclicked:function(){
                    this.edit = true;
                },
                savedTodo:function(){
                    this.edit = false;
                }
            }
        })
        
        Vue.component('todo-component',TodosComponent);

        new Vue({
            el: "#app",
            data: {
                title: "ToDo App",
                show: true,
                visibility: 'all',
                hide:'hide',
                search:'',
                todos: [{
                        name: 'first task',
                        complete: false
                    },
                    {
                        name: 'second',
                        complete: false
                    }
                ],
                
                complete: 'complete'
            },
            methods: {
                addTodo:function() {
                    let input = document.querySelector('.addBox input');
                    if (input.value != "") {
                        this.todos.unshift({
                            name: input.value,
                            complete: false
                        })
                      input.value = "";
                    }


                },
                removeTodo: function(index) {
                    this.todos.splice(index,1)
                    
                },
                uncompleted: function() {
                    let list = document.querySelectorAll('p')
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].className == "taskDone") {
                            list[i].parentElement.style.display = "none"
                        } else {
                            list[i].parentElement.style.display = "block"
                        }
                    }
                },
                completed: function() {
                    let list = document.querySelectorAll('p')
                    for (let i = 0; i < list.length; i++) {
                        if (list[i].className !== "taskDone") {
                            list[i].parentElement.style.display = "none"
                        } else {
                            list[i].parentElement.style.display = "block"
                        }
                    }
                },
                all: function() {
                    let list = document.querySelectorAll('p');
                    for (let i = 0; i < list.length; i++) {
                        list[i].parentElement.style.display = "block"
                    }
                },
               
              


            },
            computed:{
                filtered:function(){
                    return this.todos.filter((todo)=>{
                        return todo.name.match(this.search)
                    })
                }
            }
        })
        
  //      hide loading element after 2sec
        function hideLoadingPage(){
            setTimeout(function(){
               let fullpage = document.querySelector('.fullpage-animate');
                fullpage.classList.add('hideAnimate')
                
            },1000)
        }
        hideLoadingPage();