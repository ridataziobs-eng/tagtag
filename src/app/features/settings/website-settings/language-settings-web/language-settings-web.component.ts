import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { SettingsSidebarComponent } from '../../common/settings-sidebar/settings-sidebar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-language-settings-web',
    templateUrl: './language-settings-web.component.html',
    styleUrls: ['./language-settings-web.component.scss'],
    imports: [SettingsSidebarComponent,FormsModule,RouterLink,CommonModule,MatSelectModule]
})
export class LanguageSettingsWebComponent {
  public routes = routes;
}
