import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, Grid, IconButton, Badge, Tooltip, Menu, MenuItem } from '@material-ui/core';
import { FormatIndentDecreaseSharp, FormatIndentIncreaseSharp, SearchOutlined, FullscreenOutlined, NotificationsOutlined, AssignmentTurnedInOutlined, AccessTimeOutlined, AccountCircleOutlined, ExitToAppOutlined, AccountCircleSharp, ExitToAppSharp, FullscreenExitOutlined } from '@material-ui/icons';
import { LayoutStyles } from '../layout.style';
// impot logo
import UserImg from './../../../../assets/images/small_1.png';

interface HeaderProps {
    open: Boolean;
    handleDrawerOpen: () => any;
    logOutHandler: () => any;
}

const HeaderComponent: React.FC<HeaderProps> = (props) => {

    const { open, handleDrawerOpen, logOutHandler } = props;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [fullScreen, setFullScreen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const docElem = document.documentElement;
    const fullScreenHandler = () => {
        setFullScreen(true);
        if (docElem.requestFullscreen) {
            docElem.requestFullscreen();
        }
    }
    const exitScreenHandler = () => {
        setFullScreen(false);
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    const classes = LayoutStyles();
    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar className="header">
                {!open && (
                    <IconButton color="inherit" onClick={handleDrawerOpen} className="menuheader" >
                        <FormatIndentDecreaseSharp />
                    </IconButton>)

                }
                <div className="header--search">
                    <input type="text" placeholder="Search..." />
                    <IconButton className="search-icon">
                        <SearchOutlined />
                    </IconButton>
                </div>
                <Grid container alignItems="center">
                    <Grid item md={1}>

                    </Grid>
                    <Grid item md={4}>

                    </Grid>
                    <Grid item md={7}>
                        <div className="header_settings">
                            {!fullScreen ?
                                (<Tooltip title="Full Screen">
                                    <IconButton onClick={fullScreenHandler}>
                                        <FullscreenOutlined />
                                    </IconButton>
                                </Tooltip>) :
                                (<Tooltip title="Full Screen">
                                    <IconButton onClick={exitScreenHandler}>
                                        <FullscreenExitOutlined />
                                    </IconButton>
                                </Tooltip>)
                            }
                            <Tooltip title="Notifications">
                                <IconButton>
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsOutlined />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Todo List">
                                <IconButton>
                                    <Badge badgeContent={2} color="secondary">
                                        <AssignmentTurnedInOutlined />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="My Timesheets">
                                <IconButton>
                                    <AccessTimeOutlined />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Jhon Doe">
                                <IconButton onClick={handleClick}>
                                    <img src={UserImg} alt="" className="userImage" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                className="header--menu"
                            >
                                <MenuItem onClick={handleClose}> <AccountCircleSharp /> Profile</MenuItem>
                                <MenuItem onClick={logOutHandler}> <ExitToAppSharp /> Logout</MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export const Headers = HeaderComponent;