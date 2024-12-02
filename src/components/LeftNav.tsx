import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextApi";
import { sidebarItems } from "../data/sidebar";
import LeftNavMenuItem from "./LeftMenuItem";

const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } =
        useContext(Context);

    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-0" : ""
                }`}
        >
            <div className="flex px-5 flex-col">
                {sidebarItems.map((item) => {
                    return (
                        <React.Fragment key={item.title}>
                            <LeftNavMenuItem
                                text={item.title}
                                icon={item.IconOrImgUrl}
                                action={() => {

                                    navigate(item.url);
                                }}
                                className={`${selectedCategory === item.title
                                    ? "bg-white/[0.15]"
                                    : ""
                                    }`}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default LeftNav;