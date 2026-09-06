import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-video',
    templateUrl: './ui-video.component.html',
    styleUrl: './ui-video.component.scss',
    imports: [RouterLink]
})
export class UiVideoComponent {
  public routes = routes;
}
