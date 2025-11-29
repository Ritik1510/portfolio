import { Link } from "wouter";
import { useState } from "react";
import { sideBarLinksData } from "../constants/verticalBoxMaterial.jsx";

export default function RootLayout({ children, rightChildren }) {
  const [Open, setOpen] = useState(false); 

  return (
    <div className="main-wrapper overlay">
      {/* left  content */}
      <aside className="left">
        <div className="hero-heading">
          <h1>Hi I'm Ritik</h1>
        </div>
        <nav className="nav-links-wrapper card-border bg-blur">
          {sideBarLinksData.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="nav-links"
              >
                <Icon className="nav-link-icon"/>
                 <span className="nav-link-labels">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Main content */}
      <main className="center overflow-y-auto">{children}</main>
 
      {/* Right content */}
      <aside className="right vertical-boxes-paddings sticky top-0">
          {rightChildren}
      </aside>
    </div>
  );
}