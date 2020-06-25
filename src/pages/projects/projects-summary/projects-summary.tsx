import React from 'react'
import { Grid } from '@material-ui/core';
import { CardItems } from '../../../components/card-items/card-items';

const ProjectsSummaryComponent = (props: any) => {

    const projectsSummary = [
        { icons: 'ghg', value: 15, name: 'Not Started', classname: 'pink first' },
        { icons: 'hghg', value: 10, name: 'In Progress', classname: 'pink' },
        { icons: 'ghgh', value: 5, name: 'On Hold', classname: 'pink' },
        { icons: 'ghgh', value: 5, name: 'Cancelled', classname: 'pink' },
        { icons: 'ghgh', value: 5, name: 'Finished', classname: 'pink last' },
    ]


    return (
        <Grid container>
            {projectsSummary.map(item => (
                <Grid item style={{ flexGrow: 1 }}>
                    <CardItems icons={item.icons} value={item.value} name={item.name} classname={item.classname} />
                </Grid>
            ))}
        </Grid>
    )
}

export const ProjectsSummary = ProjectsSummaryComponent;