import React, { Fragment } from 'react'
import { PageHeader } from '../../components/page-header/page-header';
import { CardItems } from '../../components/card-items/card-items';
import { ContactSummary } from './components/contact-summary/contact-summary';
import { ContactList } from './components/contact-list/contact-list';

const ContactsComponents = (props: any) => {
    return (
        <Fragment>
            {/* Customer header */}
            <PageHeader name="Contacts" title="Contacts" />
            {/* Customer Summary */}
            <ContactSummary />
            {/* Customer List */}
            <ContactList />
        </Fragment>
    )
}


export const Contacts = ContactsComponents;