import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </span>
        <span className="text-white font-bold tracking-tight flrex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Term of Service</p>
          <p className="cursor-pointer">About Me</p>
        </span>
      </div>
      <div className="text-white font-bold tracking-tight gap-4 container mx-auto flex justify-center text-sm cursor-pointer">
        &copy; 2024 Sushant Singh Negi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
