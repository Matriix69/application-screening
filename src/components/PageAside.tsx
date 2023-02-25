import Box from "@mui/material/Box";
import { useState } from "react";
import TabPanels from "./Tabs/TabPanels";
import AppTabs from "./Tabs/Tabs";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import ApplicantPreviewCard from "./ApplicantPreviewCard";
import { allApplicants } from "../app/applicantsSlice";
import { useSelector } from "react-redux";
import { getDisQualifiedApplicants, getNonDisQualifiedApplicants, searchApplicants } from "../libs/utile";
import { mockType } from "../libs/mockData";

export const NotFound = ({ children }: { children: string }) => (
    <div className="font-semibold text-sm text-center py-4">{children}</div>
);

export default function PageAside() {
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState("");
    const [searchArr, setSearchArr] = useState<mockType[]>([]);

    const applicants = useSelector(allApplicants);

    return (
        <div className="bg-[#F6F8F9] p-4 rounded-md lg:sticky top-[94px] min-[780px]:top-[130px]">
            <AppTabs value={value} setValue={setValue} tabs={["QUALIFIED", "DISQUALIFIED"]} />

            <div className="h-[49px] rounded-[6px] bg-white border border-[#DDE2E4] flex items-center gap-2 mt-6 px-4 ">
                <Search />
                <input
                    className="h-full pr-2 bg-transparent placeholder:text-xs w-full outline-none"
                    placeholder="Filter by name email, edu and exp"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSearchArr(searchApplicants(applicants, e.target.value, value === 0 ? false : true));
                    }}
                />
            </div>

            <button className=" text-[#898A8D] text-xs pl-5 text-left mt-[14px]">Select all</button>

            <div className="border-t border-t-[#B5B5B5] mt-2 pt-[18px]">
                <TabPanels className="grid gap-3" value={value} index={0}>
                    {searchArr.length < 1 && search ? (
                        <NotFound children="Not found" />
                    ) : getNonDisQualifiedApplicants(applicants).length > 0 ? (
                        (searchArr.length > 0 ? searchArr : getNonDisQualifiedApplicants(applicants)).map((item) => (
                            <ApplicantPreviewCard key={item.id} item={item} />
                        ))
                    ) : (
                        <NotFound children="No Qualified candidate" />
                    )}
                </TabPanels>
                <TabPanels className="grid gap-3" value={value} index={1}>
                    {searchArr.length < 1 && search ? (
                        <NotFound children="Not found" />
                    ) : getDisQualifiedApplicants(applicants).length > 0 ? (
                        (searchArr.length > 0 ? searchArr : getDisQualifiedApplicants(applicants)).map((item) => (
                            <ApplicantPreviewCard key={item.id} item={item} />
                        ))
                    ) : (
                        <NotFound children="No Disqualified candidate" />
                    )}
                </TabPanels>
            </div>
        </div>
    );
}
