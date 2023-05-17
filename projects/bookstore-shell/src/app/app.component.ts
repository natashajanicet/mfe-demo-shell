import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bookstore-shell';

  

  onLoginSuccess = (event: Event) => {
    console.log((event as any).detail);
    console.log(this);
  }

  ngOnInit(): void {
    console.log('add event')
    window.addEventListener('loginSuccess', this.onLoginSuccess);
  }
}
