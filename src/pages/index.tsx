import { FC, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RoutePath } from '../enums/routePaths';

const HomePage = lazy(() => import('./Home'));

const RoutingPage: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path={RoutePath.HOME}>
        <HomePage />
      </Route>
    </Switch>
  </Suspense>
);
export default RoutingPage;
