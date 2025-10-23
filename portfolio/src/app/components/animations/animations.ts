import { animation, style, animate } from '@angular/animations';

/**
 * Makes item appear from bottom left
 * @param timing - duration of animation
 * @param x - x axis
 * @param y - y axis
 */
export const fadeInBottomLeft = animation([
    style({
        opacity: 0,
        transform: 'translate3d(-{{ x }}, {{ y }}, 0)',
    }),
    animate(
        '{{ timing }}',
        style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        })
    )
]);

export const fadeInBottomRight = animation([
    style({
        opacity: 0,
        transform: 'translate3d({{ x }}, {{ y }}, 0 )',
    }),
    animate(
        '{{ timing }}',
        style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        })
    )
]);

export const fadeInBottom = animation([
    style({
        opacity: 0,
        transform: 'translate3d(0, {{ y }}, 0 )',
    }),
    animate(
        '{{ timing }}',
        style({
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
        })
    )
]);
