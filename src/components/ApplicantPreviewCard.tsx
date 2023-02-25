import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { mockType } from "../libs/mockData";
import { useAppDispatch } from "../app/hook";
import { viewApplicant } from "../app/applicantsSlice";

const ApplicantPreviewCard = ({ item }: { item: mockType }) => {
    const { id, name, location, nationality, education, image } = item;

    const dispatch = useAppDispatch();

    return (
        <button
            className=" text-left w-full p-[22px] grid grid-cols-[50px_1fr] gap-5 items-center rounded-md bg-white shadow-[0px_1px_2px_rgba(0, 0, 0, 0.32)]"
            style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.32)" }}
            onClick={() => dispatch(viewApplicant(id))}
        >
            <img src={image} className=" w-[50px] h-[50px] object-cover rounded-full " />
            <div>
                <h2 className="font-bold text-base mb-3">{name}</h2>
                <div className="flex gap-2 items-center mb-1">
                    <LocationOnIcon fontSize="small" />
                    <div className="text-[10px]">
                        {location}, {nationality}
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <SchoolIcon fontSize="small" />
                    <div className="text-[10px]">{education[0].course}</div>
                </div>
            </div>
        </button>
    );
};

export default ApplicantPreviewCard;
