import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  standalone: true
})
export class CalculatorComponent {
  @Input() value1!: string;
  @Input() value2!: string;
  @Output() result = new EventEmitter<number>();

  private number1!: number;
  private number2!: number;

  ngOnChanges() {
    this.number1 = parseFloat(this.value1);
    this.number2 = parseFloat(this.value2);
  }

  add() {
    this.result.emit(this.number1 + this.number2);
  }

  subtract() {
    this.result.emit(this.number1 - this.number2);
  }

  multiply() {
    this.result.emit(this.number1 * this.number2);
  }

  divide() {
    if (this.number2 !== 0) {
      this.result.emit(this.number1 / this.number2);
    } else {
      alert('No se puede dividir por cero');
    }
  }

  power() {
    this.result.emit(Math.pow(this.number1, this.number2));
  }

  sqrt() {
    this.result.emit(Math.sqrt(this.number1));
  }

  clear() {
    this.result.emit(0);
  }
}
