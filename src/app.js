import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos:[
        "Buy Shopping", "Clean Bathroom", "MOT"
      ],
      newTask: ""
    },
    methods: {
      saveNewTask : function (){
        let newTask = this.newTask
        this.todos.push(newTask)
        this.newTask= ""
      }


    }
  })
})
