import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-work',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card-work.component.html',
  styleUrl: './card-work.component.scss'
})
export class CardWorkComponent {
  @Input() alt:string = ''
  @Input() img:string = ''
  @Input() title:string= ''
  @Input() text:string = ''
  @Input() url:string = ''

  redirectWorkDescription(url:string){
    console.log('redirigir', url)
  }
}
