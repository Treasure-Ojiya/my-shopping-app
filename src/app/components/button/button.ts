import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input('');

  btnClicked = output();

  btnclicker() {
    console.log('button clicked');
  }
}
