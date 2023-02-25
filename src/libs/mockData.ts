import Resume from "../assets/resume.pdf";
import Image1 from "../assets/images/applicant1.png";
import Image2 from "../assets/images/applicant2.png";
import Image3 from "../assets/images/applicant3.png";

export interface mockType {
    id: number;
    disQualified: boolean;
    shortlisted: boolean;
    name: string;
    location: string;
    phone: string;
    email: string;
    nationality: string;
    nationalID: string;
    gender: string;
    education: education[];
    experience: experience[];
    resume: any;
    image: any;
}

export interface education {
    from: string | number;
    to: string | number;
    course: string;
    school: string | number;
    country: string;
}

export interface experience {
    from: string | number;
    to: string | number;
    jobTitle: string;
    company: string;
    country: string;
}

export const mockData: mockType[] = [
    {
        id: 1,
        name: "Aaliyah Samdi",
        image: Image1,
        location: "Riyadh",
        phone: "626-398-6547",
        email: "aaliyah.samdi@gmail.com",
        nationality: "Saudi Arabia",
        nationalID: "235769708967",
        gender: "Male",
        disQualified: false,
        shortlisted: false,
        education: [
            {
                from: 2023,
                to: 2019,
                course: "MA History and Political Science",
                school: "HBS- Harvard University",
                country: "United State",
            },
            {
                from: 2023,
                to: 2019,
                course: "MA History and Political Science",
                school: "HBS- Harvard University",
                country: "United State",
            },
        ],
        experience: [
            {
                from: 2023,
                to: 2019,
                jobTitle: "Business Development",
                company: "Saudi Corp",
                country: "UAE",
            },
            {
                from: 2023,
                to: 2019,
                jobTitle: "Business Development",
                company: "Saudi CorpE",
                country: "UAE",
            },
        ],
        resume: Resume,
    },
    {
        id: 2,
        name: "Niran Thampu",
        image: Image2,
        location: "Riyadh",
        phone: "626-398-6547",
        email: "Niran@gmail.com",
        nationality: "Saudi Arabia",
        nationalID: "235769708967",
        gender: "Female",
        disQualified: false,
        shortlisted: false,
        education: [
            {
                from: 2023,
                to: 2019,
                course: "B.ENG Computer engineering",
                school: "California",
                country: "United State",
            },
            {
                from: 2023,
                to: 2019,
                course: "B.ENG Computer engineering",
                school: "California",
                country: "United State",
            },
        ],
        experience: [
            {
                from: 2023,
                to: 2019,
                jobTitle: "Software engineer",
                company: "Morocco",
                country: "UAE",
            },
            {
                from: 2023,
                to: 2019,
                jobTitle: "Software engineer",
                company: "Morocco",
                country: "UAE",
            },
        ],
        resume: Resume,
    },
    {
        id: 3,
        name: "David Samson",
        image: Image3,
        location: "Rivers",
        phone: "626-398-6547",
        email: "David@gmail.com",
        nationality: "Brazil",
        nationalID: "235769708967",
        gender: "Male",
        disQualified: false,
        shortlisted: false,
        education: [
            {
                from: 2023,
                to: 2019,
                course: "Fishery and chicken",
                school: "BSC Oxford University",
                country: "United State",
            },
            {
                from: 2023,
                to: 2019,
                course: "Fishery and chicken",
                school: "BSC Oxford University",
                country: "United State",
            },
        ],
        experience: [
            {
                from: 2023,
                to: 2019,
                jobTitle: "Home Keeping",
                company: "Home keeping and texties",
                country: "North Korea",
            },
            {
                from: 2023,
                to: 2019,
                jobTitle: "Lead Frontend developer",
                company: "Capital placement",
                country: "London",
            },
        ],
        resume: Resume,
    },
];
