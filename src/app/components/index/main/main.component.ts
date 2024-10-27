import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { DescriptionComponent } from '../description/description.component';
import { ContactComponent } from '../contact/contact.component';
import { WorksComponent } from '../works/works.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent, DescriptionComponent,WorksComponent, ContactComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
