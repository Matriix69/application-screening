import { useState } from "react";
import TabPanels from "./Tabs/TabPanels";
import AppTabs from "./Tabs/Tabs";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import ApplicantPreviewCard from "./ApplicantPreviewCard";
import { allApplicants } from "../app/applicantsSlice";
import { useSelector } from "react-redux";
import { getShortListedApplicants, searchApplicants } from "../libs/utile";
import { mockType } from "../libs/mockData";
import { NotFound } from "./PageAside";

const ShortListedAside = () => {
    const [value, setValue] = useState(0);
    const applicants = useSelector(allApplicants);

    const [search, setSearch] = useState("");
    const [searchArr, setSearchArr] = useState<mockType[]>([]);

    return (
        <div className="bg-[#F6F8F9] p-4 rounded-md sticky top-[94px] min-[780px]:top-[130px]">
            <AppTabs value={value} setValue={setValue} tabs={["SHORTLISTED", "DROPPED"]} />

            <div className="h-[49px] rounded-[6px] bg-white border border-[#DDE2E4] flex items-center gap-2 mt-6 px-4 ">
                <Search />
                <input
                    className="h-full pr-2 bg-transparent placeholder:text-xs w-full outline-none"
                    placeholder="Filter by name email, edu and exp"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setSearchArr(searchApplicants(applicants, e.target.value, value === 0 ? false : true, true));
                    }}
                />
            </div>

            <button className=" text-[#898A8D] text-xs pl-5 text-left mt-[14px]">Select all</button>

            <div className="border-t border-t-[#B5B5B5] mt-2 pt-[18px]">
                <TabPanels className="grid gap-3" value={value} index={0}>
                    {searchArr.length < 1 && search ? (
                        <NotFound children="Not found" />
                    ) : getShortListedApplicants(applicants).length > 0 ? (
                        getShortListedApplicants(applicants).map((item) => <ApplicantPreviewCard key={item.id} item={item} />)
                    ) : (
                        <NotFound children="No Short Listed candidate" />
                    )}
                </TabPanels>
                <TabPanels className="grid gap-3" value={value} index={1}>
                    <NotFound children="Nothing here" />
                </TabPanels>
            </div>
        </div>
    );
};

export default ShortListedAside;
