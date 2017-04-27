import{Routes, RouterModule} from '@angular/router';
import{UserComponent } from './user/user.component';
import{HomeScreenComponent } from './home-screen/home-screen.component';

const APP_ROUTES: Routes = [
    {path: 'projects', component: UserComponent},
    {path: 'about me', component: UserComponent},
    {path: 'home', component: HomeScreenComponent},
    {path: '', component: HomeScreenComponent}
    ];

export const routes = RouterModule.forRoot(APP_ROUTES);