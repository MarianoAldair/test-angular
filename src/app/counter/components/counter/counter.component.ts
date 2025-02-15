import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>
    <button (click)="takeOne()">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="addOne()">+1</button>
  `
})
export class CounterComponent {
  public counter: number = 0;

  public addOne(): void {
    this.counter += 1;
  }

  public takeOne(): void {
    this.counter -= 1;
  }

  public resetCounter(): void {
    this.counter = 0;
  }
}
