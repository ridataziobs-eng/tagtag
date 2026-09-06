import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-stickynote',
    templateUrl: './ui-stickynote.component.html',
    styleUrls: ['./ui-stickynote.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink]
})
export class UiStickynoteComponent {
  notes = [];
  public routes = routes;
}
