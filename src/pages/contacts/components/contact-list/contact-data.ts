
export interface IContactModel {
    photoUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phone: number;
    status: string;
    position: string;
}

function createData(
    photoUrl: string,
    firstName: string,
    lastName: string,
    email: string,
    company: string,
    phone: number,
    status: string,
    position: string
): IContactModel {
    return { photoUrl, firstName, lastName, email, company, phone, status, position };
}

const imgUrl = 'https://www.perfexcrm.com/demo/uploads/staff_profile_images/1/small_1.png';

export const ContactData = [
    createData(imgUrl, 'Adeline', 'Sporer', 'jerel.steuber@example.com', 'Fay, Hagenes and Greenholt', 2589684785, 'true', 'Deburring Machine Operator'),
    createData(imgUrl, 'Al', 'Kohler', 'iliana99@example.org', 'iliana99@example.org', 2547858585, 'true', 'English Language Teacher'),
    createData(imgUrl, 'Carson', 'Konopelski', 'destin55@example.com', 'Emmerich, Weissnat and Zieme', 1245869686, 'true', 'Court Reporter'),
    createData(imgUrl, 'Konopelski', 'Carson', 'Carson@example.com', 'Emmerich, Weissnat and Zieme', 1258969663, 'false', 'Court Reporter'),
    createData(imgUrl, 'Carson', 'Konopelski', 'destin55@example.com', 'Emmerich, Weissnat and Zieme', 1245858596, 'true', 'Court Reporter'),
    createData(imgUrl, 'Carson', 'Konopelski', 'destin55@example.com', 'Emmerich, Weissnat and Zieme', 1245788996, 'false', 'Court Reporter'),
    createData(imgUrl, 'Carson', 'Konopelski', 'destin55@example.com', 'Emmerich, Weissnat and Zieme', 2545785869, 'true', 'Court Reporter'),
];