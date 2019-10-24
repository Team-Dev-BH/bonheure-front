import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition("void => *, * => void", [animate(1500)])
]);

// export const fadeRouterAnimation = trigger("fadeRouterAnimation", [
//   transition(" void => * ", [
//     group([
//       query(":enter", [
//         style({
//           opacity: 0
//         }),
//         animate(1500, style({ opacity: 1 }))
//       ]),
//       query(":leave", [
//         style({ opacity: 1 }),
//         animate(1500, style({ opacity: 0 }))
//       ])
//     ])
//   ])
// ]);
