import React from "react";

import SideBar from "../components/SideBar";

const HomeDesktopLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start mt-5">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side overflow-hidden">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <SideBar />
      </div>
    </div>
  );
};

export default HomeDesktopLayout;
