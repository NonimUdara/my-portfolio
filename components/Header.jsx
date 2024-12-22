import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center justify-center gap-2">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-16 h-16 text-accent animate-spin-slow"
                        >
                            <path
                                d="M12 2l3 7h7l-5 4 2 7-6-5-6 5 2-7-5-4h7l3-7z"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-16 h-16 text-accent animate-spin-slow"
                        >
                            <path
                                d="M12 2.5l2.92 5.93 6.52.95-4.72 4.6 1.11 6.47L12 17.5l-5.83 3.05 1.11-6.47-4.72-4.6 6.52-.95L12 2.5z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>

                </Link>
                {/* desktop nav & hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
