import { useEffect } from "react";
import { switchSelected } from "../app/applicantsSlice";
import { useAppDispatch } from "../app/hook";
import PageMain from "../components/PageMain";
import ShortListedAside from "../components/ShortListedAside";

const ShortListed = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(switchSelected("shortListed"));
    }, [dispatch]);

    return (
        <div className="grid lg:grid-cols-[370px_1fr] items-start gap-2">
            <ShortListedAside />
            <PageMain shortListed={true} />
        </div>
    );
};

export default ShortListed;
