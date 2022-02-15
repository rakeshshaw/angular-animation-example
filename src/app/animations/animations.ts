import { animate, state, style, transition, trigger } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ 
      opacity: 0,
      backgroundColor: 'yellow'
    })),

    transition('void <=> *', [
      animate('1s')
    ])
  ])

  
export let slide = trigger('slide', [

    transition('void => *', [
        style({ 
            transform: 'translateX(-10px)',
            }),
        animate('1s')
    ]),

    transition('* => void', [
        animate('1s', style({ 
            transform: 'translateX(-100%)',
          }))
      ])
  ])