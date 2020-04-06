import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username=""
  password=""
  errormessage="Invalid Credentials"
  invalidLogin=false

  constructor(private router : Router,private BasicAuthentificationService : BasicAuthentificationService) { }

  ngOnInit() {
  }

  handleBasicAuthLogin()
    {
     
      this.BasicAuthentificationService.
      executeJWTAuthenticationService(this.username,this.password).subscribe(
        data =>  {
          console.log(" data = "+data);
          this.invalidLogin=false
        this.router.navigate(['welcome',this.username])
        },
        error =>{
          console.log(" error = "+error);
          this.invalidLogin=true
        }
      )
     

    }
 

}
