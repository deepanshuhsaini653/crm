import React from 'react'
import { Grid, Typography, Breadcrumbs, IconButton, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ArrowBackOutlined } from '@material-ui/icons';
import { CustomRouterLink } from '../customRouterLink/customRouterLink';

interface PageHeaderProps {
    name: string;
    title: string;
    link?: string;
    showBack?: boolean;
}

const PageHeaderComponent: React.FC<PageHeaderProps> = (props) => {
    const { name, title, link, showBack = false } = props;

    return (
        <div className="customer__header">
            <Grid container justify="space-between">
                <Grid item md={6}>
                    <div className="header--primary">
                        <Typography variant="h5" component="h5">
                            {name}
                        </Typography>
                        <Breadcrumbs aria-label="breadcrumb" className="braedcrumbs">
                            <Link color="inherit" to="/dashboard"  >
                                Home
                            </Link>
                            <Typography color="textPrimary"> {title}</Typography>
                        </Breadcrumbs>
                    </div>
                </Grid>
                <Grid item md={6}>
                    {showBack && (
                        <div className="header--primary back">
                            <Tooltip title={`Back to ${name}`}>
                                <IconButton component={CustomRouterLink} to={link}>
                                    <ArrowBackOutlined />
                                </IconButton>
                            </Tooltip>
                        </div>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}

export const PageHeader = PageHeaderComponent;
