import { FC, ReactNode, useMemo } from 'react';
import { depth, emphasis } from '../../types';
import { SurfaceContainer } from './StyledComponents';

type CardProps = {
  depth?: depth;
  emphasis?: emphasis;
  shadowDepth?: depth;
  children?: ReactNode;
};

const Card: FC<CardProps> = ({
  depth = '1',
  emphasis = 'high',
  shadowDepth,
  children,
}) => {
  const finalShadowDepth = useMemo(
    () => shadowDepth ?? depth,
    [shadowDepth, depth]
  );

  return (
    <SurfaceContainer
      depth={depth}
      emphasis={emphasis}
      shadowDepth={finalShadowDepth}
    >
      {children}
    </SurfaceContainer>
  );
};
export default Card;
