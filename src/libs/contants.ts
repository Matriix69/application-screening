interface Routes {
    title: string;
    path: string;
}
export interface RoutesTitle {
    title: string;
}

export const routes: Routes[] = [
    {
        title: "Recommended",
        path: "/",
    },
    {
        title: "Shortlisted",
        path: "/shortlisted",
    },
    {
        title: "Offer",
        path: "/offer",
    },
    {
        title: "Hired",
        path: "/hired",
    },
];
