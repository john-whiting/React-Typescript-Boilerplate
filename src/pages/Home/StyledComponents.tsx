import styled from 'astroturf/react';

export const HomeContainer = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  display: flex;
  background-color: $theme-color-primary;
`;

export const D0 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-0;
  color: $theme-color-background-text-disabled;
`;
export const D1 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-1;
  color: $theme-color-background-text;
`;
export const D2 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-2;
  color: $theme-color-background-text-high;
`;
export const D3 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-3;
  color: $theme-color-background-text-medium;
`;
export const D4 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-4;
`;
export const D6 = styled('div')`
  @import '../../themes/Dark/_variables.scss';

  background-color: $theme-depth-6;
`;
