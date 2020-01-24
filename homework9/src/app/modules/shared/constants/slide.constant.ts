import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
  animateChild,

} from '@angular/animations';

export const slideInAnimation =
  trigger('routerAnimations', [
    transition('login <=> home', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> product', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300000ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300000ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
