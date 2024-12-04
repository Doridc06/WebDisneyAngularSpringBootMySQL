import { Routes } from '@angular/router';
import { CenicientaComponent } from './cenicienta/cenicienta.component';
import { SirenitaComponent } from './sirenita/sirenita.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BellaBestiaComponent } from './bellaBestia/bellaBestia.component';
import { BellaDurmienteComponent } from './bellaDurmiente/bellaDurmiente.component';
import { EnredadosComponent } from './enredados/enredados.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cenicienta', component: CenicientaComponent },
  { path: 'sirenita', component: SirenitaComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'bellaBestia', component: BellaBestiaComponent },
  { path: 'bellaDurmiente', component: BellaDurmienteComponent },
  { path: 'enredados', component: EnredadosComponent },
  { path: '**', redirectTo: '' }
];

