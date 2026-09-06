import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../core/helpers/routes';

@Component({
    selector: 'app-under-maintenance',
    templateUrl: './under-maintenance.component.html',
    styleUrls: ['./under-maintenance.component.scss'],
    imports: [RouterLink]
})
export class UnderMaintenanceComponent {
  public routes = routes;
}
