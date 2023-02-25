import { ReactElement } from "react";

const Card = ({ title, children }: { title?: string; children: ReactElement }) => {
    return (
        <div className="shadow-[3px_3px_14px_rgba(190,190,190,0.3)] rounded-[20px] overflow-hidden text-lg sm:text-2xl">
            {title && <div className="p-4 sm:p-5 sm:px-7 font-semibold text-sm border-b border-b-[#E7E7E7] ">{title}</div>}
            <div className="p-4 sm:p-7">{children}</div>
        </div>
    );
};

export default Card;
