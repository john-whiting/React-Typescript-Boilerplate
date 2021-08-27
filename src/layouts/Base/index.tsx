import { FC, ReactNode } from 'react';
import { BaseContainer } from './StyledComponents';

type BaseLayoutProps = {
  children?: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => (
  <BaseContainer>{children}</BaseContainer>
);
export default BaseLayout;
