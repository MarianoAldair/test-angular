import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 40;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroName(): void {
    this.name = this.name == 'ironman' ? 'spiderman' : 'ironman';
  }

  changeHeroAge(): void {
    this.age = this.age == 40 ? 26 : 40;
  }
}
