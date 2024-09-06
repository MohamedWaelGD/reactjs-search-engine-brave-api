import React from "react";
import { NavLink } from "react-router-dom";

const Links = () => {
    return (
        <div className="px-96 flex gap-10">
            <div className="w-fit">
                <NavLink
                    to="/all"
                    className={({ isActive }) =>
                        isActive
                            ? "text-md after:block after:w-full after:h-0.5 after:bg-sky-900 after:rounded-full after:mt-1"
                            : "text-md after:block after:w-full after:h-0.5 after:bg-slate-300 after:rounded-full after:mt-1"
                    }
                >
                    🔎 All
                </NavLink>
            </div>
            <div className="w-fit">
                <NavLink
                    to="/news"
                    className={({ isActive }) =>
                        isActive
                            ? "text-md after:block after:w-full after:h-0.5 after:bg-sky-900 after:rounded-full after:mt-1"
                            : "text-md after:block after:w-full after:h-0.5 after:bg-slate-300 after:rounded-full after:mt-1"
                    }
                >
                    📰 News
                </NavLink>
            </div>
            <div className="w-fit">
                <NavLink
                    to="/images"
                    className={({ isActive }) =>
                        isActive
                            ? "text-md after:block after:w-full after:h-0.5 after:bg-sky-900 after:rounded-full after:mt-1"
                            : "text-md after:block after:w-full after:h-0.5 after:bg-slate-300 after:rounded-full after:mt-1"
                    }
                >
                    📷 Images
                </NavLink>
            </div>
            <div className="w-fit">
                <NavLink
                    to="/videos"
                    className={({ isActive }) =>
                        isActive
                            ? "text-md after:block after:w-full after:h-0.5 after:bg-sky-900 after:rounded-full after:mt-1"
                            : "text-md after:block after:w-full after:h-0.5 after:bg-slate-300 after:rounded-full after:mt-1"
                    }
                >
                    📺 Videos
                </NavLink>
            </div>
        </div>
    );
};

export default Links;
