import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sliderAnimation } from './modules/shared/constants/slide.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    sliderAnimation
  ]
})
export class AppComponent {
  title = 'homework9';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
