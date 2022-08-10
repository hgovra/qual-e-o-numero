import styled from "styled-components";

export const Frame = styled.div`
    width: 15vh;
`;

export const Character = styled.svg`
    & .segment {
        fill: #dddddd;
    }

    // 1
    &.num-1 .segment.f,
    &.num-1 .segment.c,

    // 2
    &.num-2 .segment.a,
    &.num-2 .segment.c,
    &.num-2 .segment.g,
    &.num-2 .segment.e,
    &.num-2 .segment.d,

    // 3
    &.num-3 .segment.a,
    &.num-3 .segment.c,
    &.num-3 .segment.g,
    &.num-3 .segment.f,
    &.num-3 .segment.d,

    // 4
    &.num-4 .segment.c,
    &.num-4 .segment.g,
    &.num-4 .segment.f,
    &.num-4 .segment.b,

    // 5
    &.num-5 .segment.a,
    &.num-5 .segment.b,
    &.num-5 .segment.g,
    &.num-5 .segment.f,
    &.num-5 .segment.d,

    // 6
    &.num-6 .segment.a,
    &.num-6 .segment.b,
    &.num-6 .segment.e,
    &.num-6 .segment.g,
    &.num-6 .segment.f,
    &.num-6 .segment.d,

    // 7
    &.num-7 .segment.a,
    &.num-7 .segment.c,
    &.num-7 .segment.f,

    // 8
    &.num-8 .segment.a,
    &.num-8 .segment.b,
    &.num-8 .segment.c,
    &.num-8 .segment.d,
    &.num-8 .segment.e,
    &.num-8 .segment.f,
    &.num-8 .segment.g,

    // 9
    &.num-9 .segment.a,
    &.num-9 .segment.c,
    &.num-9 .segment.g,
    &.num-9 .segment.b,
    &.num-9 .segment.f,
    &.num-9 .segment.d,

    // 0
    &.num-0 .segment.a,
    &.num-0 .segment.b,
    &.num-0 .segment.e,
    &.num-0 .segment.c,
    &.num-0 .segment.f,
    &.num-0 .segment.d {
        fill: #262a34;

        // ACERTOU
        ${`.success`} & {
            fill: #32BF00;
        }

        // ERRO
        ${`.fail`} & {
            fill: #CC3300;
        }
    }
`;
