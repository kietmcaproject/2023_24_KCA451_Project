const Footer = () => {
  return (
    <div className="bg-sky-800 py-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-green font-bold tracking-tight">
          Hotel Book Karo
        </span>
        <span className="text-red font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
      <div className="text-red font-bold tracking-tight gap-4 container mx-auto flex justify-center text-sm cursor-pointer">
        &copy; 2024 Shivanshu Panwar
      </div>
    </div>
  );
};

export default Footer;
