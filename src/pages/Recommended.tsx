import { useEffect } from "react";
import { switchSelected } from "../app/applicantsSlice";
import { useAppDispatch } from "../app/hook";
import PageAside from "../components/PageAside";
import PageMain from "../components/PageMain";

const Recommended = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(switchSelected("recommended"));
    }, [dispatch]);

    return (
        <div className="grid lg:grid-cols-[370px_1fr] items-start gap-2">
            <PageAside />
            <PageMain />
        </div>
    );
};

export default Recommended;
