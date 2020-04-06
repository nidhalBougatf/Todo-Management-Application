import { Component, OnInit } from '@angular/core';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private basicAuthentificationService: BasicAuthentificationService) { }

  ngOnInit() {
    this.basicAuthentificationService.logout();
  }

}
