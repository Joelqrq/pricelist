import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'jp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Justify Print');
  }
}
