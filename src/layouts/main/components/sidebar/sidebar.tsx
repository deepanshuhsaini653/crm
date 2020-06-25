import React from 'react';
import clsx from 'clsx';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Typography } from '@material-ui/core';
import { DashboardOutlined, PersonOutline, SubscriptionsOutlined, InsertDriveFileOutlined, DescriptionOutlined, ContactMailOutlined, FormatListBulletedOutlined, LoyaltyOutlined, PermMediaOutlined, GroupOutlined, FormatIndentIncreaseSharp, GroupSharp, ConfirmationNumberOutlined } from '@material-ui/icons';
import { LayoutStyles } from '../layout.style';
import { CustomRouterLink } from '../../../../components/customRouterLink/customRouterLink';
import Logo from './../../../../assets/images/logo.png';
import Logo1 from './../../../../assets/images/logos.png';

interface SidebarProps {
    open: Boolean;
    handleDrawerClose: () => any;
    handleDrawerOpen: () => any;
}

const SidebarComponent: React.FC<SidebarProps> = (props: any) => {
    const { open, handleDrawerClose, handleDrawerOpen } = props;
    const classes = LayoutStyles();

    return (
        <Drawer

            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <div className="sidebar--logo">
                    {open ? (
                        <Typography variant="h5" component="h5">

                            <img width="30" src={Logo1} alt="" />
                            CPCB
                        </Typography>
                    ) :
                        (<img width="30" className="hidelogo" src={Logo1} alt="" />)
                    }
                </div>
                <IconButton onClick={handleDrawerClose}>
                    <FormatIndentIncreaseSharp />
                </IconButton>
            </div>
            <List component="ul" className="sidebar__list" onMouseOver={handleDrawerOpen}>
                <ListItem button component={CustomRouterLink} to="/dashboard">
                    <ListItemIcon>
                        <DashboardOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={CustomRouterLink} to="/customers">
                    <ListItemIcon>
                        <GroupSharp />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>
                {/* <ListItem button component={CustomRouterLink} to="/contacts">
                    <ListItemIcon>
                        <PersonOutline />
                    </ListItemIcon>
                    <ListItemText primary="Contacts" />
                </ListItem> */}
                {/* <ListItem button>
                    <ListItemIcon>
                        <SubscriptionsOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Subscriptions" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DescriptionOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Expenses" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InsertDriveFileOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Contracts" />
                </ListItem> */}
                <ListItem button component={CustomRouterLink} to="/tickets">
                    <ListItemIcon>
                        <ConfirmationNumberOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Tickets" />
                </ListItem>
                {/* <ListItem button>
                    <ListItemIcon>
                        <FormatListBulletedOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Tasks" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LoyaltyOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Support" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <GroupOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Leads" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PermMediaOutlined />
                    </ListItemIcon>
                    <ListItemText primary="knowledge Base" />
                </ListItem> */}
            </List>
        </Drawer>
    )
}


export const Sidebar = SidebarComponent;