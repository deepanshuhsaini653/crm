import React, { Fragment } from 'react';
import { CustomerSummary } from './components/customer-summarry/customer-summarry';
import { CustomerList } from './components/customer-list/customer-list';
import { PageHeader } from '../../components/page-header/page-header';

const CustomersComponent = (props: any) => {
    return (
        <Fragment>
            {/* Customer header */}
            <PageHeader name="Customers" title="Customers" />
            {/* Customer Summary */}
            <CustomerSummary />
            {/* Customer List */}
            <CustomerList />
        </Fragment>
    )
}

export const Customers = CustomersComponent;