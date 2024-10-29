import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { LinkComponent } from '../shared/link/link.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LinkComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  active:boolean = false

scroll(section:string){
  const element = document.getElementById(section)
  if(element) element.scrollIntoView({behavior:'smooth'})
    this.active = false
}

ngOnInit(): void {
  
}

menu(){
  this.active = !this.active
}
}
