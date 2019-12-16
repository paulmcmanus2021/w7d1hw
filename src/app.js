import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos:[
        {name: "Buy Shopping", priority: "High"},
        {name: "Clean Bathroom", priority: "Low"},
        {name: "MOT", priority: "High"}
      ],
      newTask: ""
    },
    methods: {
      saveNewTask : function (){
        let taskObject = {name: this.newTask, priority: this.priority.value  }
        this.todos.push(taskObject)
        this.newTask = ""
      }


    }
  })
})
