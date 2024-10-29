import { Routes } from '@angular/router';
import { MainComponent } from './components/index/main/main.component';
import { MainWorkComponent } from './components/work-description/main/main-work.component';
import { FormLetsTalkComponent } from './components/lets-talk/form/form-lets-talk.component';
import { MainScheduleComponent } from './components/schedule/main/main-schedule.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'home',
        component: MainComponent
    },
    {
        path:'work-description',
        component: MainWorkComponent
    },
    {
        path:'schedule',
        component: MainScheduleComponent
    },
    {
        path:'lets-talk',
        component: FormLetsTalkComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        component:NotFoundComponent
    }
];
