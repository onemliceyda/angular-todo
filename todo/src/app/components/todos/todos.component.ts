import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
todos!:Todo[];
inputTodo:string=""
constructor(){}
ngOnInit(): void {
  this.todos=[{
    content:"First Todo",
    completed:false
  },
  {
    content:"Second Todo",
    completed:true
  },
]
}

toggleDone(id:number){
this.todos.map((todo,i)=>{
if(i==id) todo.completed= !todo.completed
return todo
})
}

deleteTodo(id:number)
{
this.todos=this.todos.filter((todo,i)=>i!==id )
}

addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  this.inputTodo=""
}
}
