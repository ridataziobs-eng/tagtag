import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-avatar',
    templateUrl: './ui-avatar.component.html',
    styleUrls: ['./ui-avatar.component.scss'],
    imports: [RouterLink]
})
export class UiAvatarComponent {
  public routes = routes;
}
