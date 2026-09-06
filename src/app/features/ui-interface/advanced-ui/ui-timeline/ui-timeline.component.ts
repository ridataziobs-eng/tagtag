import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-timeline',
    templateUrl: './ui-timeline.component.html',
    styleUrl: './ui-timeline.component.scss',
    imports: [RouterLink]
})
export class UiTimelineComponent {
  public routes = routes;
}
