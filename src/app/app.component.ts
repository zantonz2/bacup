import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private config: NgSelectConfig
  ) {
    this.config.notFoundText = 'Не найдено';
  }

  ngOnInit() { }
}
