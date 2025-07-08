
import { Component } from '@angular/core';
import { AppStateService } from '../../app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLang = 'EN';
  constructor(public appState: AppStateService) {}

  openLogin() {
    this.appState.openLogin();
  }

  onLangChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    if (select && select.value) {
      this.currentLang = select.value;
      // Aquí puedes agregar lógica para cambiar textos globales, cargar archivos de idioma, etc.
    }
  }
}
