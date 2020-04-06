import { Component, OnInit } from '@angular/core';
import { BasicAuthentificationService } from '../service/basic-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private basicAuthentificationService:BasicAuthentificationService) { }

  ngOnInit() {

  
  }

}
