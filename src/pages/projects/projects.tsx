import React, { Fragment } from 'react'
import { PageHeader } from '../../components/page-header/page-header'
import { ProjectsSummary } from './projects-summary/projects-summary'
import { ProjectsList } from './projects-list/projects-list'

const ProjectsComponents = (props: any) => {

    const ProjectLis = [
        { projectName: 'Website Redesign', tag: 'Marketing & Sales', price: 259, startDate: '05-05-2020', deliveryDate: 'within 5 days', customerName: 'Kassulke Inc', status: 'Verify', statusClass: 'verify' },
        { projectName: 'Website Redesign', tag: 'Marketing & Sales', price: 259, startDate: '05-05-2020', deliveryDate: 'within 5 days', customerName: 'Kassulke Inc', status: 'In Progress', statusClass: 'progress' },
        { projectName: 'Website Redesign', tag: 'Marketing & Sales', price: 259, startDate: '05-05-2020', deliveryDate: 'within 5 days', customerName: 'Kassulke Inc', status: 'In Review', statusClass: 'review' },
        { projectName: 'Website Redesign', tag: 'Marketing & Sales', price: 259, startDate: '05-05-2020', deliveryDate: 'within 5 days', customerName: 'Kassulke Inc', status: 'Waiting', statusClass: 'waiting' },
    ]

    return (
        <Fragment>
            {/* Header  */}
            <PageHeader name="Tickets" title="Tickets" />
            {/* Summary  */}
            <ProjectsSummary />
            {/* List  */}
            {
                ProjectLis.map(item => <ProjectsList projectName={item.projectName} tag={item.tag} price={item.price} startDate={item.startDate} deliveryDate={item.deliveryDate} customerName={item.customerName} status={item.status} statusClass={item.statusClass} />)
            }
        </Fragment>
    )
}

export const Projects = ProjectsComponents;
