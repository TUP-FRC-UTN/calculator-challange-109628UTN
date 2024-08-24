import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule, CalculatorComponent]  
})
export class AppComponent {
  value1!: string;
  value2!: string;
  result!: number;

  handleResult(result: number) {
    this.result = result;
  }
}
