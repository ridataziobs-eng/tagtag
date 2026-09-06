import { Component } from '@angular/core';
import { routes } from '../../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-form-input-groups',
    templateUrl: './form-input-groups.component.html',
    styleUrls: ['./form-input-groups.component.scss'],
    imports: [RouterLink]
})
export class FormInputGroupsComponent {
  public routes = routes;
}
