export class Paths {
    // Basic Paths
    static All = "*";
    static Root = "/";

    // Auth Paths
    static Login = "/login";
    static Register = "/register";

    // 404 Paths
    static PageNotFound = "/404";

    // Dashboard Paths
    static Dashboard = "/dashboard";

    // Customer Paths
    static Customers = "/customers";
    static CustomerCreate = "/customers/create";
    static CustomerEdit = "/customers/edit/:id";

    // Contacts Paths
    static Contacts = "/contacts";

    // Contacts Paths
    static Projects = "/tickets";

    static withParam(url: string, params: any) {
        for (let param in params) {
            const value = params[param];
            url = url.replace(`:${param}`, value);
        }
        return url;
    }
}
