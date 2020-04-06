import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos:Todo[]
  message:string;
  
  constructor(private todoService:TodoDataService, private router:Router) { }

  ngOnInit() {
    this.getTodos();
  }

  

  getTodos()
  {
    this.todoService.retrieveAllTodos('nidhal').subscribe(
      response => {
        this.todos=response;
        console.log(this.todos);
      }

    );
  }
  
  deleteTodo(id)
  {
    console.log(`${id} todo `);
    this.todoService.deleteTodo('nidhal',id).subscribe(
      response =>
      {
        console.log(response);
        this.message = `todo ${id} deleted successfully ! `;
        this.getTodos();

      }
    );
  }

  updateTodo(id)
  {
    console.log(`update ${id} todo `);
    this.router.navigate(['todos',id])
  }

  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }
  
}
