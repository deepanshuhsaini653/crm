import React from 'react'
import { Grid } from '@material-ui/core'
import { CardItems } from '../../../../components/card-items/card-items'

const ContactSummaryComponent = (props: any) => {

    const contactSummary = [
        { icons: 'ghg', value: 25, name: 'Total Contacts', classname: 'blue first' },
        { icons: 'hghg', value: 20, name: 'Active Contacts', classname: 'blue' },
        { icons: 'ghgh', value: 5, name: 'Inactive  Contacts', classname: 'blue last' },
    ]

    return (
        <Grid container>
            {contactSummary.map(item => (
                <Grid item md={4}>
                    <CardItems icons={item.icons} value={item.value} name={item.name} classname={item.classname} />
                </Grid>
            ))}

        </Grid>
    )
}

export const ContactSummary = ContactSummaryComponent;