import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() =>
  import(/* webpackChunkName: "Home.page" */ './pages/HomePage')
);

const LifeCyclePage = lazy(() =>
  import(/* webpackChunkName: "LifeCycle1.page" */ './pages/LifeCyclePage1')
);

const LifeCycleHookPage = lazy(() =>
  import(/* webpackChunkName: "LifeCycle2.page" */ './pages/LifeCyclePage2')
);

const Tutorial1Page = lazy(() =>
  import(/* webpackChunkName: "Tutorial1.page" */ './pages/Tutorial1Page')
);

const Tutorial2Page = lazy(() =>
  import(/* webpackChunkName: "Tutorial2.page" */ './pages/Tutorial2Page')
);

const renderPageComponent = (Comp) => (
  <Suspense
    fallback={
      <div className="flex flex-col items-center justify-center w-full h-screen my-auto align-middle">
        <p className="text-center">กำลังโหลด...</p>
      </div>
    }
  >
    <Comp />
  </Suspense>
);

const routes = [
  {
    path: '/',
    component: renderPageComponent(HomePage),
  },
  {
    path: '/lifecycle',
    component: renderPageComponent(LifeCyclePage),
  },
  {
    path: '/lifecycle-hook',
    component: renderPageComponent(LifeCycleHookPage),
  },
  {
    path: '/tutorial-1',
    component: renderPageComponent(Tutorial1Page),
  },
  {
    path: '/tutorial-2',
    component: renderPageComponent(Tutorial2Page),
  },
];

const RoutesComp = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default RoutesComp;
