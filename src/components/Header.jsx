import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
    return (
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">
            Welcome back 👋 Jaydon Frankie
          </h1>
          <div className="flex space-x-4">
            <AiOutlineMail className="h-6 w-6 text-gray-500" />
            {/* Add more icons */}
          </div>
        </header>
    );
};

export default Header;