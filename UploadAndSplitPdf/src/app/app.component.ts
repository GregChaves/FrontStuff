import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rawq1de: string = ' '
  rawyzd9: string = ' '

  constructor(private title: Title) {
    this.title.setTitle('Salina Soledade')
  }
}
