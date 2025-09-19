import { Link } from "wouter";
import { File } from "lucide-react";

const sideBarLinks = [
  { icon: File, label: "Projects", href: "/projects" },
  { icon: File, label: "Skills", href: "/skills" },
  { icon: File, label: "About", href: "/about" },
  { icon: File, label: "Contact", href: "/contact" },
  { icon: File, label: "Resume", href: "/resume" },
];

export default function RootLayout({ children }) {
  return (
    <div className="main-wrapper h-screen w-screen flex justify-around">
      <aside className="left bg-blur w-full h-full flex justify-between flex-col border">
        <div className="hero-heading">
          <h1>Hi I'm Ritik</h1>
        </div>
        <nav className="mt-6">
          {sideBarLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="sidebar-links"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Main content */}
      <main className="center h-full bg-blur">{children}</main>
      <aside className="right bg-blur w-full">
        <h2>Right Box Info</h2>
      </aside>
    </div>
  );
}