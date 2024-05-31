import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { LogoutAlertDialog } from "@/components/AlertDialog";
import { UserAvatar } from "@/components/Avatar";

export default function Navbar({
  isLoggedIn,
  handleLoggedIn,
}: {
  isLoggedIn: boolean;
  handleLoggedIn: () => void;
}) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">RSS Scraper</div>
        <div className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <UserAvatar />
              </Link>
              <LogoutAlertDialog handleLoggedIn={handleLoggedIn} />
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="default">Sign In</Button>
              </Link>
              <Link to="/signIn">
                <Button variant="outline" className="font-sans-serif">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
