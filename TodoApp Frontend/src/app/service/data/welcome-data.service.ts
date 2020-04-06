import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean
{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  name=''
  constructor( private http:HttpClient ) { }


  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>('${API_URL}/helloworld-bean');

  }
  
  executeHelloWorldBeanServiceWithParameter(name)
  {

    return this.http.get<HelloWorldBean>(`${API_URL}/helloworld/${name}`);

  }

}
