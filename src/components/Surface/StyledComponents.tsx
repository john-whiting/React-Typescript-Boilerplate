import styled from 'astroturf/react';
import { depth, emphasis } from '../../types';

type SurfaceContainerProps = {
  depth: depth;
  emphasis: emphasis;
  shadowDepth: depth;
};

export const SurfaceContainer = styled.div<SurfaceContainerProps>`
  @import '../../index.scss';

  display: flex;
  flex-direction: column;
  border-radius: 0.33rem;
  padding: 1em;
  margin: 0.66em;
  box-sizing: border-box;

  &.emphasis-highest {
    color: $theme-color-surface-text;
  }

  &.emphasis-high {
    color: $theme-color-surface-text-high;
  }

  &.emphasis-medium {
    color: $theme-color-surface-text-medium;
  }

  &.emphasis-disabled {
    color: $theme-color-surface-text-disabled;
  }

  &.shadow-depth-0 {
    box-shadow: none;
  }

  &.shadow-depth-1 {
    box-shadow: 0 2px 6px 1px #12121212;
  }

  &.shadow-depth-2 {
    box-shadow: 0 2px 6px 1.5px #121212;
  }

  &.shadow-depth-3 {
    box-shadow: 0 2px 6px 2px #121212;
  }

  &.shadow-depth-4 {
    box-shadow: 0 2px 6px 2.5px #121212;
  }

  &.shadow-depth-6 {
    box-shadow: 0 2px 6px 3px #121212;
  }

  &.shadow-depth-8 {
    box-shadow: 0 2px 6px 3.5px #121212;
  }

  &.shadow-depth-12 {
    box-shadow: 0 2px 6px 4px #121212;
  }

  &.shadow-depth-16 {
    box-shadow: 0 2px 6px 4.5px #121212;
  }

  &.shadow-depth-24 {
    box-shadow: 0 2px 6px 5px #121212;
  }

  &.depth-0 {
    background-color: $theme-color-depth-0;
    border: 2px solid $theme-color-depth-2;
  }

  &.depth-1 {
    background-color: $theme-color-depth-1;
    border: 2px solid $theme-color-depth-1;
    box-shadow: 0 2px 6px 1px #12121212;
  }

  &.depth-2 {
    background-color: $theme-color-depth-2;
    border: 2px solid $theme-color-depth-2;
    box-shadow: 0 2px 6px 1.5px #121212;
  }

  &.depth-3 {
    background-color: $theme-color-depth-3;
    border: 2px solid $theme-color-depth-3;
    box-shadow: 0 2px 6px 2px #121212;
  }

  &.depth-4 {
    background-color: $theme-color-depth-4;
    border: 2px solid $theme-color-depth-4;
    box-shadow: 0 2px 6px 2.5px #121212;
  }

  &.depth-6 {
    background-color: $theme-color-depth-6;
    border: 2px solid $theme-color-depth-6;
    box-shadow: 0 2px 6px 3px #121212;
  }

  &.depth-8 {
    background-color: $theme-color-depth-8;
    border: 2px solid $theme-color-depth-8;
    box-shadow: 0 2px 6px 3.5px #121212;
  }

  &.depth-12 {
    background-color: $theme-color-depth-12;
    border: 2px solid $theme-color-depth-12;
    box-shadow: 0 2px 6px 4px #121212;
  }

  &.depth-16 {
    background-color: $theme-color-depth-16;
    border: 2px solid $theme-color-depth-16;
    box-shadow: 0 2px 6px 4.5px #121212;
  }

  &.depth-24 {
    background-color: $theme-color-depth-24;
    border: 2px solid $theme-color-depth-24;
    box-shadow: 0 2px 6px 5px #121212;
  }
`;
