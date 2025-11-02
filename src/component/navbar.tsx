import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white p-5">
            <div className="flex justify-around py-3 items-center">
                <Link href="/page/education" className="hover:text-sky-500 duration-100"> Education </Link>
                <Link href="/page/experience" className="hover:text-sky-500 duration-100"> Experience </Link>
                <Link href="/page/skills" className="hover:text-sky-500 duration-100">  Skills </Link>
                <Link href="/page/portfolio" className="hover:text-sky-500 duration-100">  Portfolio  </Link>
                <Link href="/page/contact" className="hover:text-sky-500 duration-100">  Contact </Link>
            </div>
        </div>
    );
}
