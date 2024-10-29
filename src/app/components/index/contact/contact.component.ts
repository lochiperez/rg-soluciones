import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { InputComponent } from '../../shared/input/input.component';
import { LinkComponent } from '../../shared/link/link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, InputComponent, LinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(){}
  goToMap(){
    console.log('ingresa a gotomap')
    window.open("https://maps.app.goo.gl/5ZpE9JLCBM445J9B9", '_blank')
  }
}
