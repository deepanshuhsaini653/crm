import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { MinimalLayout, MainLayout } from "./layouts";
import { Login, PageNotFound, Dashboard, Customers, Contacts, CustomerCreate, CustomerEdit, Projects } from "./pages";
import ProviderWithRoutes from "./components/protectWithRoutes/protectWithRoutes";
import { Paths } from "./utils/path.config";

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={Paths.Root} render={() => <Redirect to={Paths.Dashboard} />} />
                <Route exact path={Paths.Login} component={Login} layout={MinimalLayout} />
                <Route exact path={Paths.PageNotFound} component={PageNotFound} />
                <ProviderWithRoutes exact path={Paths.Dashboard} component={Dashboard} layout={MainLayout} />
                <ProviderWithRoutes exact path={Paths.Customers} component={Customers} layout={MainLayout} />
                <ProviderWithRoutes exact path={Paths.CustomerCreate} component={CustomerCreate} layout={MainLayout} />
                <ProviderWithRoutes exact path={Paths.CustomerEdit} component={CustomerEdit} layout={MainLayout} />
                <ProviderWithRoutes exact path={Paths.Contacts} component={Contacts} layout={MainLayout} />
                <ProviderWithRoutes exact path={Paths.Projects} component={Projects} layout={MainLayout} />
                <Redirect from={Paths.All} to={Paths.PageNotFound} />
            </Switch>
        </React.Fragment>
    );
};

export default Routes;
