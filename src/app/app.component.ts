import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/index/main/main.component';
import { MainScheduleComponent } from './components/schedule/main/main-schedule.component';
import { FormComponent } from './components/schedule/form/form.component';
import { MainWorkComponent } from './components/work-description/main/main-work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
  FooterComponent,
  MainComponent,
  MainScheduleComponent,
  FormComponent,
  MainWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rg-soluciones-informaticas';
}
