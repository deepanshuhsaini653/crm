import React from "react";
import { Route, RouteProps, Redirect } from "react-router";
import { connect } from "react-redux";
import { IState } from "../../store/state.interface"; 
import { AppState } from "../../store";
import { getAuthToken } from "../../utils/types";

interface ProviderProps extends RouteProps {
    user: IState<any>;
    layout: any;
    component: any;
}

function ProviderWithRoutes(props: ProviderProps) {
    const { layout: Layout, component: Component, user, ...rest } = props; 
    const isLoggedIn = user.loaded && user.data ;
    const routerComponent = (matchProps: any) =>
        isLoggedIn ? (
            <Layout>
                <Component {...matchProps} />
            </Layout>
        ) : (<Redirect to="/login" />);
    return <Route {...rest} render={routerComponent} />;
}

export default connect((state: AppState) => ({ user: state.user }))(ProviderWithRoutes);
