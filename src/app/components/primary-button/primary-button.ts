import { CommonModule } from '@angular/common';
import { Component, Input, input, NgModule, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();

  // handleButtonClick() {
  //   console.log('Button clicked!');
  // }

  @Input() customClasses = '';
}
