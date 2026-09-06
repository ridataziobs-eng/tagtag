import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../core/core.index';

@Component({
    selector: 'app-ui-offcanvas',
    templateUrl: './ui-offcanvas.component.html',
    styleUrls: ['./ui-offcanvas.component.scss'],
    imports: [RouterLink]
})
export class UiOffcanvasComponent {
     routes = routes;
}
