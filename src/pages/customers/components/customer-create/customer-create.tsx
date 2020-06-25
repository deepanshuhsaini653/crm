import React, { Fragment } from 'react';
import { PageHeader } from '../../../../components/page-header/page-header';
import { CustomerForm } from './customer-form';

const CustomerCreateComponent = (props: any) => {
    return (
        <Fragment>
            {/* Customer header */}
            <PageHeader name="Customer" title="Customer Create" link="/customers" showBack={true} />
            {/* Customer Form */}
            <CustomerForm />
        </Fragment>
    )
}


export const CustomerCreate = CustomerCreateComponent;