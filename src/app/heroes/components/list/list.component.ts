import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNamesList: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];

  public lastHeroDeleted: string | undefined = '';

  deleteLastHero(): void {
    this.lastHeroDeleted = this.heroesNamesList.pop();
  }
}
