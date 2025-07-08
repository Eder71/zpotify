import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppStateService {
  private sidebarOpen = new BehaviorSubject<boolean>(false);
  private loginOpen = new BehaviorSubject<boolean>(false);

  sidebarOpen$ = this.sidebarOpen.asObservable();
  loginOpen$ = this.loginOpen.asObservable();

  openSidebar() { this.sidebarOpen.next(true); }
  closeSidebar() { this.sidebarOpen.next(false); }
  toggleSidebar() { this.sidebarOpen.next(!this.sidebarOpen.value); }

  openLogin() { this.loginOpen.next(true); }
  closeLogin() { this.loginOpen.next(false); }
  toggleLogin() { this.loginOpen.next(!this.loginOpen.value); }
}
