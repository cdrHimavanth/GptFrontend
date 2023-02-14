import { Component, OnInit } from '@angular/core';
import { Openai1Service } from 'src/app/services/openai1.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public theme:boolean=false;

  constructor(private openai1:Openai1Service) { }

  ngOnInit(): void {
  }

  callDavinci(){
    this.openai1.davinci().subscribe(a=>{
      console.log(a);
    })
  }

  toggleTheme(){
    this.theme =!this.theme;
  }

}
