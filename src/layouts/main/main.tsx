import React from 'react';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { LayoutStyles } from './components/layout.style';
import { Headers } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { LogOut } from '../../store/actions/user.action';


interface MainCompoonentProps {
    logOut: () => any;
    children: any;
}

const MainCompoonent: React.FC<MainCompoonentProps> = (props) => {
    const { logOut } = props;
    const classes = LayoutStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logOutHandler = () => {
        logOut();
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Headers open={open} handleDrawerOpen={handleDrawerOpen} logOutHandler={logOutHandler} />
            <Sidebar open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />
            <main className={classes.content}>
                {props.children}
            </main>
        </div>
    )
}

export const MainLayout = connect(null, { logOut: LogOut })(MainCompoonent);