import {Button} from "@/components/ui/button.tsx";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold font-sans-serif">
                    MyApp
                </div>
                <div className="flex space-x-4">
                    <Button variant="default">Sign In</Button>
                    <Button variant="outline" className="font-sans-serif">Sign Up</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;