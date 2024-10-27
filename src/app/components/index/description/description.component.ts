import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

}
