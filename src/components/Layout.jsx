import { Link } from "wouter";
import { File } from "lucide-react";

const menuItems = [
  { icon: File, label: "Dashboard", href: "#" },
  { icon: File, label: "Properties", href: "#" },
  { icon: File, label: "Maintenance", href: "#" },
  { icon: File, label: "Make Payment", href: "#" },
  { icon: File, label: "Visitors", href: "#" },
];

export function Layout({ children }){
  return (
    <div className="min-h-screen bg-gray-50 flex justify-around">
      <aside className="left w-full bg-white border-r">
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex"
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
      {/* Main content */}
      <main className="w-full">{children}</main>
      {/* Right box - always present */}
      <aside className="right w-full bg-gray-200 p-4">
        <h2>Right Box Info</h2>
      </aside>
    </div>
  );
}