

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStateService } from '../../app-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public appState: AppStateService) {}

  closeSidebar() {
    this.appState.closeSidebar();
  }
}
