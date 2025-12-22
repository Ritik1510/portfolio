import { Link, useLocation } from "wouter";
import { useState } from "react";
import { sideBarLinksData } from "../constants/verticalBoxMaterial.jsx";
import profileOpenerImg from "../Assets/profile-img.jpg";
import { SidebarContext } from "../context/Sidebar.context.js";
import { ROUTES } from "../routes/routes.config.js";
import { useGSAP } from "@gsap/react";
import { bottomToTop } from "../Animations/bottomToTop.js";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({ children, rightChildren }) {
  const [expanded, setExpanded] = useState(false);
  const [location] = useLocation();

  // console.log("location:", location);
  const currentRoute =
    ROUTES.find(r => r.path === location);
  // console.log("currentRoute:", currentRoute);

  useGSAP(() => {
    bottomToTop({
      targets: "#id-tab-tracker-heading"
    })
  }, [currentRoute]);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <div id="smooth-wrapper" className="main-body-wrapper">
        <div id="smooth-content" className="main-wrapper sticky">
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
          <main className="main-content-column overflow-y-auto card-padding">
            <div
              id="id-tab-tracker-heading"
              className="tab-tracker-heading mb-2 md:mb-2.5
            rounded-(--borderRadius-medium) w-full bg-blur 
            card-padding">
              <p>{currentRoute?.label ?? "Overview"}</p>
            </div>
            {children}
          </main>

          {/* Right content */}
          <aside
            className={`right pr-2 sm:pr-1.5 overflow-hidden 
        transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${expanded ? "translate-x-0" : "translate-x-full"}`}>
            {rightChildren}
          </aside>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}