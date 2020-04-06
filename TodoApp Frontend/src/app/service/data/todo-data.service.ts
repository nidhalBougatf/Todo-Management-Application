import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {


  username=''
  constructor( private http:HttpClient ) { }


  retrieveAllTodos(username)
  {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username,id)
  {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retreiveTodo(username,id)
  {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);

  }

  updateTodo(username,id,todo)
  {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`,todo);

  }
  createTodo(username,todo)
  {
    console.log("user =>>>>  "+username);
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`,todo);

  }


}
