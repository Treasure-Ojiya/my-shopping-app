import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();

  // handleButtonClick() {
  //   console.log('Button clicked!');
  // }
}
