import { Component } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  Event as RouterEvent,
  RouterModule,
} from '@angular/router';
import { SpinnerService } from './core/core.index';
import { LoaderComponent } from './features/common/loader/loader.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule,LoaderComponent]
})
export class AppComponent {
  title = 'template';
  public page = '';

  constructor(private router: Router, private spinner: SpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        const URL = event.url.split('/');
        this.page = URL[1];
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
  }
}
