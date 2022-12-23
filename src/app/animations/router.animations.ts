import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { URL_PLAYER_PAGE } from '@app/config/routerConstants';

export const slideInAnimation = trigger('routeAnimations', [
  transition(`${URL_PLAYER_PAGE} <=> *`, [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          // top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          // top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ left: '-100%', opacity: 0 }))],
        { optional: true }
      ),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);

// export const childAnimation = trigger('openClose', [
//   state('true', style({ height: '*' })),
//   state('false', style({ height: '0px' })),
//   transition('false <=> true', animate(500))
// ]);



export const childAnimation = trigger('openClose', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'relative',
          // top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ height: '*' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ top: '-100%', opacity: 0 }))],
        { optional: true }
      ),
      query(':enter', [animate('300ms ease-out', style({ top: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);




export const slideChildAnimation =
trigger('routeSlide', [
  transition('* <=> *', [
    group([
      query(':enter', [
        // style({transform: 'translateX({{offsetEnter}}%)'}),
        style({transform: 'translateX(100%)'}),
        animate('0.4s ease-in-out', style({transform: 'translateX(0%)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0%)'}),
        // animate('0.4s ease-in-out', style({transform: 'translateX({{offsetLeave}}%)'}))
        animate('0.4s ease-in-out', style({transform: 'translateX(%)'}))
      ], {optional: true}),
    ])
  ]),
]);