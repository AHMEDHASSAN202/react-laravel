import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  DashboardView,
  UsersListView,
  StoresListView,
  StoresApprovalListView,
  SettingsView,
  NotFoundView,
} from './views';
import LanguagesListView from './views/Localization/Languages/LanguagesList';
import TranslationList from './views/Localization/Translation/TranslationList';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      {/* Stores Routes */}
      <RouteWithLayout
        component={StoresListView}
        exact
        layout={MainLayout}
        path="/dashboard/stores"
      />
       <RouteWithLayout
        component={StoresApprovalListView}
        exact
        layout={MainLayout}
        path="/dashboard/stores/approvals"
      />
      {/* END Store Routes */}
      {/* Catalog Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/products"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/categories"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/brands"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/attributes"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/attributes/group"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/options"
      />
       <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/tags"
      />
       <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/reviews"
      />
      {/* END Catalog Routes */}
      {/* Sales Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/orders"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/transactions"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/returns"
      />
      {/* END Sales Routes */}
      {/* Customers Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/customers"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/customers/approvals"
      />
      {/* END Customer Routes */}
      {/* Coupon Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/coupons"
      />
      {/* END Coupon Routes */}
      {/* Pages Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/pages"
      />
      {/* END Pages Routes */}
      {/* Media Routes */}
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/media"
      />
      {/* END Media Routes */}
       {/* Localization Routes */}
       <RouteWithLayout
        component={LanguagesListView}
        exact
        layout={MainLayout}
        path="/dashboard/languages"
      />
      <RouteWithLayout
        component={TranslationList}
        exact
        layout={MainLayout}
        path="/dashboard/translations"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/currency-rate"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard/taxes"
      />
      {/* END Localization Routes */}
      {/* Users Routes */}
      <RouteWithLayout
        component={UsersListView}
        exact
        layout={MainLayout}
        path="/dashboard/users"
      />
      <RouteWithLayout
        component={UsersListView}
        exact
        layout={MainLayout}
        path="/dashboard/roles"
      />
      {/* END Users Routes */}
       {/* Reports Routes */}
       <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/dashboard/reports"
      />
      {/* END Reports Routes */}
      {/* Settings Routes */}
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/dashboard/settings"
      />
      {/* END Settings Routes */}
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/dashboard/not-found"
      />
      <Redirect to="/dashboard/not-found"/>
    </Switch>
  );
};

export default Routes;
