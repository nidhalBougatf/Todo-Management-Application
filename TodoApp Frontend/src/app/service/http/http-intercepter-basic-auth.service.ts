import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthentificationService } from '../basic-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor( private  basicAuthentificationService : BasicAuthentificationService ) {}

  // intercept request // add headers // proceed to next
  intercept(request: HttpRequest<any>,   next:HttpHandler)
  {
   
    let basicAuthHeaderString = this.basicAuthentificationService.getAuthenticatedToken();
    let username = this.basicAuthentificationService.getAuthenticatedUser();

    if(basicAuthHeaderString && username )
    {
      request= request.clone(
      {
        setHeaders:{
          Authorization : basicAuthHeaderString
        }
      }
    )
    }
    

    return next.handle(request);
  }


}
