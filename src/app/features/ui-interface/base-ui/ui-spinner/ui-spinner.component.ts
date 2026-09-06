import { Component } from '@angular/core';
import { routes } from '../../../../core/core.index';
import { CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ui-spinner',
    templateUrl: './ui-spinner.component.html',
    styleUrls: ['./ui-spinner.component.scss'],
    imports: [DragDropModule, RouterLink]
})
export class UiSpinnerComponent {
  public routes = routes;
}
