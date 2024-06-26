import { Component } from '@angular/core';


@Component({
  selector: 'app-headerbar-cmp',
  standalone: true,
  templateUrl: 'headerbar.component.html'
})
export class HeaderbarComponent {

  sidebarVisible: boolean = false;

  sidebarToggle() {
    var body = document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
