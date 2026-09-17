import CustomLink from "@/ui/CustomLink";
import Link from "next/link";

const Navbar = () => {
    const links = (
        <>
        
            <li>
                <CustomLink path='/'>Home</CustomLink>
            </li>

            <li>
                <CustomLink path='/courses'>Courses</CustomLink>
            </li>
            <li>
                <CustomLink path='/blogs'>Blogs</CustomLink>
            </li>
            <li>
                <CustomLink path='/about'>About</CustomLink>
            </li>
            <li>
                <CustomLink path='/contact'>Contact</CustomLink>
            </li>
            <li>
                <CustomLink path='/dashboard'>Dashboard</CustomLink>
            </li>
            <li>
                <CustomLink path='/users'>Users</CustomLink>
            </li>
        </>
    );
  return (
    <div className="navbar bg-slate-800 shadow-sm">
    <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                    aria-label="Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {' '}
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />{' '}
                </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
        </div>
        <Link href='/' className="text-xl">Programming Hero</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
    </div>
    <div className="navbar-end">
        <Link href='/login' className="btn">Login</Link>
    </div>
</div>

  );
};

export default Navbar;