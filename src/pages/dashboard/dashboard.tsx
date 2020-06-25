import React, { Fragment } from 'react';
import { PageHeader } from '../../components/page-header/page-header';

const DashboardComponent = (props: any) => {
    return (
        <Fragment>
            <PageHeader name="Dashboard" title="Dashboard" />
        </Fragment>
    )
};

export const Dashboard = DashboardComponent;