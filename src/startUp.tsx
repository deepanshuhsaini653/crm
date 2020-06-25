import React from "module";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { useState, useEffect } from "react";
import { GetUSer } from "./store/actions/user.action"; 
import { AppState } from "./store";

interface StartUpProps extends RouteComponentProps {
    getUser: () => any;
    children?: any;
}

const StartupComponent: React.FC<StartUpProps> = props => {
    const { getUser, children } = props;

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUser()
                .then(() => {
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return loading ? null : children;
};

export const StartUp = connect(
    (state: AppState) => ({
        user: state.user
    }),
    { getUser: GetUSer }
)(withRouter(StartupComponent));
