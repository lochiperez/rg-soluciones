import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { LinkComponent } from '../shared/link/link.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, LinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
