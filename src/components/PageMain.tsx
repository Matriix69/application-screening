import styled from "@emotion/styled";
import { ReactComponent as Delete } from "../assets/icons/delete.svg";
import { Button as Btn } from "@mui/material";
import AppTabs from "./Tabs/Tabs";
import { Fragment, useState } from "react";
import TabPanels from "./Tabs/TabPanels";
import Card from "./Card";
import { activeSelectedApplicant, disqualifyApplicant, shortListApplicant } from "../app/applicantsSlice";
import { useSelector } from "react-redux";
import { education, experience } from "../libs/mockData";
import { useAppDispatch } from "../app/hook";

const Button = styled(Btn)({
    color: "#A80000",
    textTransform: "capitalize",
});
const StyledButton = styled(Btn)({
    color: "#fff",
    background: "black",
    textTransform: "capitalize",
    padding: "5px 20px",

    "&: hover": {
        color: "#fff",
        background: "black",
    },
});

const PageMain = ({ shortListed }: { shortListed?: boolean }) => {
    const [value, setValue] = useState(0);
    const selectedApplicant = useSelector(activeSelectedApplicant);
    const dispatch = useAppDispatch();

    const { id, name, nationalID, location, phone, email, nationality, gender, education, experience, resume, disQualified } =
        selectedApplicant || {};

    if (!selectedApplicant) return <div className=" font-bold p-5 text-center">No Candidate</div>;
    return (
        <div className="p-5">
            {!shortListed && (
                <div className="flex gap-3 justify-end items-center mb-8">
                    {!disQualified && (
                        <Button
                            className=" text-sm font-semibold flex items-center gap-2"
                            onClick={() => {
                                if (typeof id !== "undefined") dispatch(disqualifyApplicant(id));
                            }}
                        >
                            <Delete />
                            <span className="text-[#A80000] font-semibold text-sm">Disqualify</span>
                        </Button>
                    )}
                    <StyledButton
                        onClick={() => {
                            if (typeof id !== "undefined") dispatch(shortListApplicant(id));
                        }}
                        className=" text-sm font-semibold bg-black rounded-md  px-3 h-[35px] flex items-center justify-center text-neutral-50"
                    >
                        <span className="text-sm">Move to Shortlist</span>
                    </StyledButton>
                </div>
            )}

            <div className=" sticky top-[64px] min-[780px]:top-[100px] bg-white pt-8">
                <AppTabs value={value} setValue={setValue} tabs={["Profile", "Video", " Evaluation", "Notes"]} />
            </div>

            <div className="py-5">
                <TabPanels value={value} index={0}>
                    <div className="grid md:grid-cols-2 gap-5">
                        <Card>
                            <Fragment>
                                <h2 className="font-bold text-xl mb-5">{name}</h2>
                                <div>
                                    <div className="grid gap-3">
                                        <div className="grid grid-cols-2">
                                            <div className=" font-semibold text-sm text-[#A5A5A5]">Current Location</div>
                                            <div className=" text-sm">{location}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className=" font-semibold text-sm text-[#A5A5A5]">Phone</div>
                                            <div className=" text-sm">{phone}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className=" font-semibold text-sm text-[#A5A5A5]">Email</div>
                                            <div className=" text-sm break-words">{email}</div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        </Card>
                        <Card title="Personal Information">
                            <div className="grid gap-3">
                                <div className="grid grid-cols-2">
                                    <div className=" font-semibold text-sm text-[#A5A5A5]">Nationality</div>
                                    <div className=" text-sm">{nationality}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className=" font-semibold text-sm text-[#A5A5A5]">National ID </div>
                                    <div className=" text-sm">{nationalID}</div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className=" font-semibold text-sm text-[#A5A5A5]">Gender </div>
                                    <div className=" text-sm break-words">{gender}</div>
                                </div>
                            </div>
                        </Card>
                        <Card title="Education">
                            <div className="grid gap-3">
                                {education?.map((item: education, idx: number) => (
                                    <div className="grid grid-cols-[1fr_2fr] gap-1" key={idx}>
                                        <div className=" font-semibold text-sm text-[#A5A5A5]">
                                            {item.from} – {item.to}
                                        </div>
                                        <div className=" text-sm">
                                            <div className=" font-medium mb-[2px]">{item.course},</div>
                                            <div>
                                                H{item.school}, {item.country}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card title="Experience">
                            <div className="grid gap-3">
                                {experience?.map((item: experience, idx: number) => (
                                    <div className="grid grid-cols-[1fr_2fr] gap-1" key={idx}>
                                        <div className=" font-semibold text-sm text-[#A5A5A5]">
                                            {item.from} – {item.to}
                                        </div>
                                        <div className=" text-sm">
                                            <div className=" font-medium mb-[2px]">{item.jobTitle},</div>
                                            <div>
                                                {item.company}, {item.country}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                    <div className="mt-8">
                        <Card>
                            <Fragment>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-semibold">Resume</h3>
                                    <Button>
                                        <span className="text-red text-sm">Download</span>
                                    </Button>
                                </div>
                                <div className="mt-6">
                                    <object aria-label="pdf" width="100%" height="500" data={resume}></object>
                                </div>
                            </Fragment>
                        </Card>
                    </div>
                </TabPanels>
            </div>
        </div>
    );
};

export default PageMain;
