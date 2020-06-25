
export interface ICustomerModel {
    company: string;
    primaryContact: string;
    primaryEmail: string;
    phone: number;
    status: string;
    groups: string;
    actions: string;
}

function createData(
    company: string,
    primaryContact: string,
    primaryEmail: string,
    phone: number,
    status: string,
    groups: string,
    actions: string,
): ICustomerModel {
    return { company, primaryContact, primaryEmail, phone, status, groups, actions };
}


export const CustomerData = [
    createData('Bauch Inc', 'Kennedy Hessel', 'flebsack@example.net', 8958687452, 'true', 'Wholesaler', ''),
    createData('Feest-Lehner', 'Chaim Lebsack', 'clement.schaefer@example.org	', 2587489698, 'false', 'High Budget', ''),
];