import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { NewsComponent } from './pages/news/news.component';
import { VideosComponent } from './pages/videos/videos.component';
import { FanArtComponent } from './pages/fan-art/fan-art.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'fan-art', component: FanArtComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: NotFoundComponent },
];
