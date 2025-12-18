import { Link } from "wouter";
import { useState } from "react";
import { sideBarLinksData } from "../constants/verticalBoxMaterial.jsx";
import profileOpenerImg from "../Assets/profile-img.jpg";
import { SidebarContext } from "../context/Sidebar.context.js";

export default function RootLayout({ children, rightChildren }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <div className="main-wrapper overlay sticky">
        {/* left  content */}
        <aside className="left h-full w-full top-0 flex justify-end flex-col">
          <div className="profile-opener-wrapper absolute top-1">
            <button className={`profile-opener h-13 w-13 lg:hidden 
            rounded-full overflow-hidden 
            ${expanded ? "border-1 border-solid border-blue-500" : "border-none"}`}
              onClick={() => setExpanded(curr => !curr)}>
              <img
                src={profileOpenerImg}
                alt="P"
                className={`profile-image cursor-pointer
                overflow-hidden transition-all`}
              />
            </button>
          </div>
          {/* nav items */}
          <nav className="nav-links-wrapper card-border bg-blur">
            {sideBarLinksData.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-links"
                >
                  <Icon className="nav-link-icon" />
                  <span className="nav-link-labels">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="main-content-column overflow-y-auto card-padding ">{children}</main>

        {/* Right content */}

        <aside 
        className={`right pr-2 sm:pr-1.5 overflow-hidden 
        transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${expanded ? "translate-x-0" : "translate-x-full"}`}>
          {rightChildren}
        </aside>
      </div>
    </SidebarContext.Provider>
  );
}