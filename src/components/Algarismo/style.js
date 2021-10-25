import styled from "styled-components";

export const Caixa = styled.div`
  width: 15vh;
`;

export const Digito = styled.svg`
  & .segmento {
    fill: #dddddd;
  }

  // 1
  &.num-1 .segmento.g,
  &.num-1 .segmento.c,

  // 2
  &.num-2 .segmento.a,
  &.num-2 .segmento.c,
  &.num-2 .segmento.h,
  &.num-2 .segmento.f,
  &.num-2 .segmento.d,

  // 3
  &.num-3 .segmento.a,
  &.num-3 .segmento.c,
  &.num-3 .segmento.h,
  &.num-3 .segmento.g,
  &.num-3 .segmento.d,

  // 4
  &.num-4 .segmento.c,
  &.num-4 .segmento.h,
  &.num-4 .segmento.g,
  &.num-4 .segmento.b,

  // 5
  &.num-5 .segmento.a,
  &.num-5 .segmento.b,
  &.num-5 .segmento.h,
  &.num-5 .segmento.g,
  &.num-5 .segmento.d,

  // 6
  &.num-6 .segmento.a,
  &.num-6 .segmento.b,
  &.num-6 .segmento.f,
  &.num-6 .segmento.h,
  &.num-6 .segmento.g,
  &.num-6 .segmento.d,

  // 7
  &.num-7 .segmento.a,
  &.num-7 .segmento.c,
  &.num-7 .segmento.g,

  // 8
  &.num-8 .segmento.a,
  &.num-8 .segmento.b,
  &.num-8 .segmento.c,
  &.num-8 .segmento.d,
  &.num-8 .segmento.e,
  &.num-8 .segmento.f,
  &.num-8 .segmento.g,
  &.num-8 .segmento.h,

  // 9
  &.num-9 .segmento.a,
  &.num-9 .segmento.c,
  &.num-9 .segmento.h,
  &.num-9 .segmento.b,
  &.num-9 .segmento.g,
  &.num-9 .segmento.d,
  
  // 0
  &.num-0 .segmento.a,
  &.num-0 .segmento.b,
  &.num-0 .segmento.f,
  &.num-0 .segmento.c,
  &.num-0 .segmento.g,
  &.num-0 .segmento.d {
    fill: #262a34;
  }

  // ACERTO
  // 1
  ${`.acerto`} &.num-1 .segmento.g,
  ${`.acerto`} &.num-1 .segmento.c,

  // 2
  ${`.acerto`} &.num-2 .segmento.a,
  ${`.acerto`} &.num-2 .segmento.c,
  ${`.acerto`} &.num-2 .segmento.h,
  ${`.acerto`} &.num-2 .segmento.f,
  ${`.acerto`} &.num-2 .segmento.d,

  // 3
  ${`.acerto`} &.num-3 .segmento.a,
  ${`.acerto`} &.num-3 .segmento.c,
  ${`.acerto`} &.num-3 .segmento.h,
  ${`.acerto`} &.num-3 .segmento.g,
  ${`.acerto`} &.num-3 .segmento.d,

  // 4
  ${`.acerto`} &.num-4 .segmento.c,
  ${`.acerto`} &.num-4 .segmento.h,
  ${`.acerto`} &.num-4 .segmento.g,
  ${`.acerto`} &.num-4 .segmento.b,

  // 5
  ${`.acerto`} &.num-5 .segmento.a,
  ${`.acerto`} &.num-5 .segmento.b,
  ${`.acerto`} &.num-5 .segmento.h,
  ${`.acerto`} &.num-5 .segmento.g,
  ${`.acerto`} &.num-5 .segmento.d,

  // 6
  ${`.acerto`} &.num-6 .segmento.a,
  ${`.acerto`} &.num-6 .segmento.b,
  ${`.acerto`} &.num-6 .segmento.f,
  ${`.acerto`} &.num-6 .segmento.h,
  ${`.acerto`} &.num-6 .segmento.g,
  ${`.acerto`} &.num-6 .segmento.d,

  // 7
  ${`.acerto`} &.num-7 .segmento.a,
  ${`.acerto`} &.num-7 .segmento.c,
  ${`.acerto`} &.num-7 .segmento.g,

  // 8
  ${`.acerto`} &.num-8 .segmento.a,
  ${`.acerto`} &.num-8 .segmento.b,
  ${`.acerto`} &.num-8 .segmento.c,
  ${`.acerto`} &.num-8 .segmento.d,
  ${`.acerto`} &.num-8 .segmento.e,
  ${`.acerto`} &.num-8 .segmento.f,
  ${`.acerto`} &.num-8 .segmento.g,
  ${`.acerto`} &.num-8 .segmento.h,

  // 9
  ${`.acerto`} &.num-9 .segmento.a,
  ${`.acerto`} &.num-9 .segmento.c,
  ${`.acerto`} &.num-9 .segmento.h,
  ${`.acerto`} &.num-9 .segmento.b,
  ${`.acerto`} &.num-9 .segmento.g,
  ${`.acerto`} &.num-9 .segmento.d,
  
  // 0
  ${`.acerto`} &.num-0 .segmento.a,
  ${`.acerto`} &.num-0 .segmento.b,
  ${`.acerto`} &.num-0 .segmento.f,
  ${`.acerto`} &.num-0 .segmento.c,
  ${`.acerto`} &.num-0 .segmento.g,
  ${`.acerto`} &.num-0 .segmento.d {
    fill: #32BF00;
  }

  // ERRO
  // 1
  ${`.falha`} &.num-1 .segmento.g,
  ${`.falha`} &.num-1 .segmento.c,

  // 2
  ${`.falha`} &.num-2 .segmento.a,
  ${`.falha`} &.num-2 .segmento.c,
  ${`.falha`} &.num-2 .segmento.h,
  ${`.falha`} &.num-2 .segmento.f,
  ${`.falha`} &.num-2 .segmento.d,

  // 3
  ${`.falha`} &.num-3 .segmento.a,
  ${`.falha`} &.num-3 .segmento.c,
  ${`.falha`} &.num-3 .segmento.h,
  ${`.falha`} &.num-3 .segmento.g,
  ${`.falha`} &.num-3 .segmento.d,

  // 4
  ${`.falha`} &.num-4 .segmento.c,
  ${`.falha`} &.num-4 .segmento.h,
  ${`.falha`} &.num-4 .segmento.g,
  ${`.falha`} &.num-4 .segmento.b,

  // 5
  ${`.falha`} &.num-5 .segmento.a,
  ${`.falha`} &.num-5 .segmento.b,
  ${`.falha`} &.num-5 .segmento.h,
  ${`.falha`} &.num-5 .segmento.g,
  ${`.falha`} &.num-5 .segmento.d,

  // 6
  ${`.falha`} &.num-6 .segmento.a,
  ${`.falha`} &.num-6 .segmento.b,
  ${`.falha`} &.num-6 .segmento.f,
  ${`.falha`} &.num-6 .segmento.h,
  ${`.falha`} &.num-6 .segmento.g,
  ${`.falha`} &.num-6 .segmento.d,

  // 7
  ${`.falha`} &.num-7 .segmento.a,
  ${`.falha`} &.num-7 .segmento.c,
  ${`.falha`} &.num-7 .segmento.g,

  // 8
  ${`.falha`} &.num-8 .segmento.a,
  ${`.falha`} &.num-8 .segmento.b,
  ${`.falha`} &.num-8 .segmento.c,
  ${`.falha`} &.num-8 .segmento.d,
  ${`.falha`} &.num-8 .segmento.e,
  ${`.falha`} &.num-8 .segmento.f,
  ${`.falha`} &.num-8 .segmento.g,
  ${`.falha`} &.num-8 .segmento.h,

  // 9
  ${`.falha`} &.num-9 .segmento.a,
  ${`.falha`} &.num-9 .segmento.c,
  ${`.falha`} &.num-9 .segmento.h,
  ${`.falha`} &.num-9 .segmento.b,
  ${`.falha`} &.num-9 .segmento.g,
  ${`.falha`} &.num-9 .segmento.d,
  
  // 0
  ${`.falha`} &.num-0 .segmento.a,
  ${`.falha`} &.num-0 .segmento.b,
  ${`.falha`} &.num-0 .segmento.f,
  ${`.falha`} &.num-0 .segmento.c,
  ${`.falha`} &.num-0 .segmento.g,
  ${`.falha`} &.num-0 .segmento.d {
    fill: #CC3300;
  }
`;
