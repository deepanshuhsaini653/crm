import React from 'react';
import { Grid } from '@material-ui/core';
import { CardItems } from '../../../../components/card-items/card-items';

const CustomerSummaryComponent = (props: any) => {

    const customerSummary = [
        { icons: 'ghg', value: 15, name: 'Total Customers', classname: 'blue first' },
        { icons: 'hghg', value: 10, name: 'Active Customers', classname: 'blue' },
        { icons: 'ghgh', value: 5, name: 'Inactive  Customers', classname: 'blue last' },
    ]

    return (
        <Grid container>
            {customerSummary.map(item => (
                <Grid item md={4}>
                    <CardItems icons={item.icons} value={item.value} name={item.name} classname={item.classname} />
                </Grid>
            ))}
        </Grid>
    )
}


export const CustomerSummary = CustomerSummaryComponent;