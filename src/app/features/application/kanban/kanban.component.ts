import { Component } from '@angular/core';
import { routes } from '../../../core/core.index';


@Component({
    selector: 'app-kanban',
    templateUrl: './kanban.component.html',
    styleUrl: './kanban.component.scss',
    imports: []
})
export class KanbanComponent {
  public routes = routes;
}
