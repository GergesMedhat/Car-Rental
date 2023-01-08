import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sideBar.css"; 


const SideBar = () => {
    return(
        <div className="sidebar">
            <div className="sidebar_top">
                <h2>
                  <span> <i class="ri-reactjs-line"></i></span>Motiv.
                </h2>
            </div>
            <div className="sidebar_content">
                <div className="menu">
                    <ul className="nav_list">
                    {
                        navLinks.map((item, index)=>(
                            <li className="nav_item" key={index}>
                              <NavLink to={item.path} className={navClass => navClass.isActive ? 'nav__active nav__link' : 'nav__link'}>
                               
                                    <i className={item.icon}></i>
                                
                                {item.display}
                              </NavLink>
                            </li>
                        ))

                    }   
                    </ul>
                </div>
                <div className="sidebar__bottom">
                    <span><i class="ri-settings-2-line"></i>Settings</span>
                    <span><i class="ri-logout-box-line"></i>Log Out</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar;