import { Component, Input } from '@angular/core';

export interface Link {
  title: string;
  route: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  @Input() backLink: Link;
}
