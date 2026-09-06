import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-breadcrumb',
    templateUrl: './ui-breadcrumb.component.html',
    styleUrls: ['./ui-breadcrumb.component.scss'],
    imports: [RouterLink]
})
export class UiBreadcrumbComponent {
  public routes = routes;
}
