import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute,Router } from '@angular/router';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number;
  todo:Todo;
  constructor(private todoService:TodoDataService ,private route:ActivatedRoute
    ,private router:Router,private basicAuthenticationService:BasicAuthentificationService) { }

  ngOnInit( ) {
    this.id=this.route.snapshot.params['id'];
    this.todo= new Todo(this.id,'',false,new Date())
    if(this.id!=-1)
    this.todoService.retreiveTodo('nidhal',this.id).subscribe(
      data => this.todo = data
    );
  }

  saveTodo()
  {
    
    if(this.id!=-1)  //case creating a new todo
    {
      this.todoService.createTodo('nidhal',this.todo).subscribe(
        data =>{ console.log(data);
          this.router.navigate(['todos']);
        }
        
      );
    }
    else{   //case updating todo
      this.todoService.updateTodo('nidhal',this.id,this.todo).subscribe(
      data =>{ console.log(data);
        this.router.navigate(['todos']);
      }
      
    );
    }
    
  }

 




}
