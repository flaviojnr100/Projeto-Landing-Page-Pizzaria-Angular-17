import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodComponent } from './components/food/food.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'food',
        component:FoodComponent
    }
];
