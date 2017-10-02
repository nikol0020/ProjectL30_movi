import {Component} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'app/features/shared/header/header.component.html',
  styleUrls: ['app/features/shared/header/header.component.css']
})
export class HeaderComponent {
  name = 'Movies'
}
