import React from 'react';

export default function NavBar () {
    return (
        <div className="flex-nowrap fixed flex justify-between items-center w-screen h-16 bg-zinc-900 p-8 text-slate-300">
            <h1 className="text-xl font-semibold">Derek&apos;s Portfolio</h1>
            <nav className="">
                <ul className="flex justify-end gap-10 font-semibold text-xl">
                    <li><p className='hover:text-violet-400 transition-colors duration-300 cursor-pointer'>Home</p></li>
                    <li><p className='hover:text-violet-400 transition-colors duration-300 cursor-pointer'>About</p></li>
                    <li><p className='hover:text-violet-400 transition-colors duration-300 cursor-pointer'>Projects</p></li>
                    <li><p className='hover:text-violet-400 transition-colors duration-300 cursor-pointer'>Contact</p></li>

                </ul>
            </nav>
        </div>
    );
}