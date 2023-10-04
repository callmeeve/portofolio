const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold text-[#24252a]">
              Portfolio
            </span>
          </div>

          <div className="block w-auto">
            <div className="font-medium flex md:space-x-8 md:mt-0 text-[#24252a]">
              <a className="block pl-3 pr-4 text-[#24252a]">2023</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
