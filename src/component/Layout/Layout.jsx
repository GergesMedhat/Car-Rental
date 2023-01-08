import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../SideBar/SideBar";
import TopNav from "../topNav/topNav";


const Layout= () => {
    return(
        <div className="layout">
            <Sidebar />
            <div className="main__layout">
                <TopNav />
            </div>
            <div className="content">
                <Router />
            </div>
        </div>
    )
}

export default Layout;