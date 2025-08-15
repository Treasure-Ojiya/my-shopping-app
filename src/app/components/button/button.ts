import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input('');

  btnClicked = output();

  btnclicker() {
    console.log('button clicked');
  }

  @Input() customClasses = '';
}
