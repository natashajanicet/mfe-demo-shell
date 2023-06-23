import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bookstore-shell';

  onLoginSuccess = (event: Event) => {
    console.log((event as any).detail);
    console.log(this);
  };

  ngOnInit(): void {
    console.log('add event');
    window.addEventListener('loginSuccess', this.onLoginSuccess);
  }

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('id');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('id');
  }

  toggleLanguage() {
    if (this.translate.currentLang === 'id') {
      this.translate.use('en');
      localStorage.setItem('locale', 'en');
      const event = new CustomEvent('changeLang', {
        detail: { lang: 'en' },
      });
      window.dispatchEvent(event);
    } else {
      this.translate.use('id');
      localStorage.setItem('locale', 'id');
      const event = new CustomEvent('changeLang', {
        detail: { lang: 'id' },
      });
      window.dispatchEvent(event);
    }
  }
}
