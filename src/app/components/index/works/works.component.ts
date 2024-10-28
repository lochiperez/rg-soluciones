import { Component } from '@angular/core';
import { CardWorkComponent } from '../../shared/card-work/card-work.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CardWorkComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent {

}
