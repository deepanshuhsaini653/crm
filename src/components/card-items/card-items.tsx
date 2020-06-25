import React from 'react'
import { Grid } from '@material-ui/core';
import { GroupSharp } from '@material-ui/icons';

interface CardItemsComponentProps {
    icons: string;
    classname: string;
    value: number;
    name: string;
}

const CardItemsComponent = (props: CardItemsComponentProps) => {

    const { icons, value, name, classname } = props;

    return (
        <div className={classname ? `customer_summary_box ${classname}` : 'customer_summary_box blue'}>
            <Grid container>
                <Grid item md={6}>
                    <div className="customer_summary_box--icon">
                        <GroupSharp />
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className="customer_summary_box--details">
                        <h5>{value}</h5>
                        <p>{name}</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export const CardItems = CardItemsComponent;
