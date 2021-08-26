import { FC, ReactNode } from 'react';

type BaseLayoutProps = {
  children?: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => <>{children}</>;
export default BaseLayout;
