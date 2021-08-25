import { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

type AppWrapperProps = {
  children?: ReactNode;
};

const AppWrapper: FC<AppWrapperProps> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
export default AppWrapper;
