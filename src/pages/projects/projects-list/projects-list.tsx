import React from 'react'
import { Grid, IconButton } from '@material-ui/core';
import { DescriptionOutlined, MoreHorizRounded } from '@material-ui/icons';

import UserLogo from './../../../assets/images/small_1.png';


interface ProjectsListProps {
    projectName: string;
    tag: string;
    price: number;
    startDate: string;
    deliveryDate: string;
    customerName: string;
    status: string;
    statusClass: string;
}

const ProjectsListComponent = (props: ProjectsListProps) => {
    const { projectName, tag, price, startDate, deliveryDate, customerName, status, statusClass } = props;


    return (
        <div className="project__list">
            <Grid container alignItems="center">
                <Grid item md={1}>
                    <div className="project__list--logo">
                        <DescriptionOutlined />
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="project__list--name">
                        <h4>{projectName}</h4>
                        <h6><span>{tag}</span></h6>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="project__list--price">
                        <h4>${price}</h4>
                        <h6 className="label">Task Price</h6>
                        <h5 className="delvery">Start Date: <span>{startDate}</span></h5>
                        <h5 className="delvery">Delivery: <span>{deliveryDate}</span></h5>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="project__list--customer">
                        <div className="customer--img">
                            <img src={UserLogo} alt="" />
                        </div>
                        <div className="customer--details">
                            <h4>Kassulke Inc</h4>
                            <h6 className="label">{customerName}</h6>
                        </div>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="project__list--assigned">
                        <div className="assigned--img">
                            <img src={UserLogo} alt="" />
                            <img src={UserLogo} alt="" />
                            <img src={UserLogo} alt="" />
                            <img src={UserLogo} alt="" />
                            <img src={UserLogo} alt="" />
                        </div>
                        <div className="assigned--details">
                            <h6 className="label">Assigned To</h6>
                        </div>
                    </div>
                </Grid>
                <Grid item md={2}>
                    <div className="project__list--action">
                        <h6 className={statusClass}>{status}</h6>
                    </div>
                </Grid>
                <Grid item md={1}>
                    <div className="project__list--link">
                        <IconButton>
                            <MoreHorizRounded />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export const ProjectsList = ProjectsListComponent;