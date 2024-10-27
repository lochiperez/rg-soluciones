import { Component } from '@angular/core';
import { LinkComponent } from '../shared/link/link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
