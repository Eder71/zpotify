import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';

interface Hero {
  name: string;
  img: string;
  role: string;
  lane: string;
}

const HEROES: Hero[] = [
  { name: 'Tigreal', img: 'assets/heroes/tigreal.png', role: 'Tanque', lane: 'Roam' },
  { name: 'Zilong', img: 'assets/heroes/zilong.png', role: 'Luchador', lane: 'EXP Lane' },
  { name: 'Saber', img: 'assets/heroes/saber.png', role: 'Asesino', lane: 'Jungle' },
  { name: 'Eudora', img: 'assets/heroes/eudora.png', role: 'Mago', lane: 'Mid Lane' },
  { name: 'Layla', img: 'assets/heroes/layla.png', role: 'Tirador', lane: 'Gold Lane' },
  { name: 'Rafaela', img: 'assets/heroes/rafaela.png', role: 'Apoyo', lane: 'Roam' },
  // ...agrega más héroes aquí
];

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroCardComponent],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  filteredHeroes = HEROES;
  roles = ['TODO', 'Tanque', 'Luchador', 'Asesino', 'Mago', 'Tirador', 'Apoyo'];
  lanes = ['Gold Lane', 'Jungle', 'Roam', 'Mid Lane', 'EXP Lane'];
  selectedRole = 'TODO';
  selectedLane = '';
  search = '';
  showLaneDropdown = false;

  filterByRole(role: string) {
    this.selectedRole = role;
    this.selectedLane = '';
    this.applyFilters();
  }

  filterByLane(lane: string) {
    this.selectedLane = lane;
    this.selectedRole = '';
    this.showLaneDropdown = false;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredHeroes = this.heroes.filter(hero => {
      const matchRole = this.selectedRole === 'TODO' || hero.role === this.selectedRole;
      const matchLane = !this.selectedLane || hero.lane === this.selectedLane;
      const matchSearch = !this.search || hero.name.toLowerCase().includes(this.search.toLowerCase());
      return matchRole && matchLane && matchSearch;
    });
  }

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.search = value;
    this.applyFilters();
  }

  onSearchChange(value: string) {
    this.search = value;
    this.applyFilters();
  }
}
