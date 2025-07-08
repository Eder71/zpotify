
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from './app-state.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SidebarComponent, LoginPopupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mobile-legends-hub';
  loginOpen$;
  constructor(public appState: AppStateService) {
    this.loginOpen$ = this.appState.loginOpen$;
  }
}
