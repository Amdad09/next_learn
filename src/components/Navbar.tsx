import CustomLink from "@/ui/CustomLink";

const Navbar = () => {
  return (
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-slate-300 bg-slate-900">
          <h2 className="text-xl font-bold">NextLearn</h2>
          <ul className="flex gap-6">
              <CustomLink path="/">Home</CustomLink>
              <CustomLink path='/courses'>Courses</CustomLink>
              <CustomLink path="/about">About</CustomLink>
              <CustomLink path="/contact">Contact</CustomLink>
          </ul>
      </nav>
  );
};

export default Navbar;