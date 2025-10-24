"use client"
import Link from "next/link";


export default function About (){
    return (
    <header className="w-full bg-black text-white flex justify-between items-center px-6 py-4 fixed top-0 z-50 shadow-md ">
        <nav className={`flex flex-col md:flex-row gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 transition-all duration-300 overflow-hidden `}>
            <Link href="/about" className="hover:text-orange-400 transition-colors">about</Link>
            <Link href="/project" className=" hover:text-orange-400 transition-colors">project</Link>
            <Link href="/form" className="hover:text-orange-400 transition-colors">contact</Link>
        </nav>
    </header>

    );
}