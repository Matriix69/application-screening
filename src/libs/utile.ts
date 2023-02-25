import { education, experience, mockType } from "./mockData";

export const getNonDisQualifiedApplicants = (applicantsArr: mockType[]): mockType[] => {
    return applicantsArr.filter((applicants) => !applicants.disQualified && !applicants.shortlisted);
};

export const getDisQualifiedApplicants = (applicantsArr: mockType[]): mockType[] => {
    return applicantsArr.filter((applicants) => applicants.disQualified && !applicants.shortlisted);
};
export const getShortListedApplicants = (applicantsArr: mockType[]): mockType[] => {
    return applicantsArr.filter((applicants) => applicants.shortlisted);
};

export const getDataCount = (applicantsArr: mockType[]) => {
    const allInList = applicantsArr.filter((applicants) => !applicants.shortlisted && !applicants.disQualified).length;
    const Shortlisted = applicantsArr.filter((applicants) => applicants.shortlisted).length;

    return {
        Recommended: allInList,
        Shortlisted,
        Offer: 0,
        Hired: 0,
    };
};

const filterKeys = ["name", "email", "education", "experience"];

export const searchApplicants = (applicants: mockType[], value: string, disQualified: boolean, shortListed?: boolean) => {
    let filterArr;

    //filter our search requirement by page and tabs, eg: qualified vs disqualified and shortlisted page
    if (shortListed) filterArr = getShortListedApplicants(applicants);
    else filterArr = disQualified ? getDisQualifiedApplicants(applicants) : getNonDisQualifiedApplicants(applicants);

    const newValueToLower = value.toLowerCase(); //drop search value to lowercase

    //filter by multiple keys
    return filterArr.filter((applicant: mockType) =>
        filterKeys.some((key) => {
            if (["education", "experience"].includes(key)) {
                return applicant[key as keyof mockType].some((item: education | experience) =>
                    Object.values(item).some((val) => String(val).toLowerCase().includes(newValueToLower))
                );
            }
            return String(applicant[key as keyof mockType])
                .toLowerCase()
                .includes(newValueToLower);
        })
    );
};
