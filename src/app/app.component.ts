import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles:[`
    .route-active {
      color: red;
      font-weight: bold;
    }
  `]
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
}
