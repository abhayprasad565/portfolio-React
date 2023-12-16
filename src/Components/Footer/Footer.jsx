import React from 'react';
import { NavLink, Link } from "react-router-dom";


const Footer = (props) => {
    return (
        <div className={`w-full ${props.darkMode ? "border-white" : "border-grey-600"} border-t-2 py-6 h-1/3 bg-custom-footerBg fixed bottom-1 flex flex-row justify-evenly`}>
            <div className="w-2/5 h-full px-10 flex flex-col items-center justify-start">
                <Link to='/' className='w-full text-custom-textColor text-3xl text-center px-10'>
                    Abhay's Portfolio</Link>
                <p className='text-custom-textColor text-md text-left px-10 mt-2'>
                    i there! I'm Abhay, and this is my creative space. Explore my work, projects, and passions. If you have any questions or opportunities to discuss, feel free to reach out. Thanks for visiting!
                </p>
                <button className='bg-custom-btnBg p-2 my-2 rounded-md text-white flex flex-row'>
                    <div className='px-1'>Buy me a coffee </div>
                    <div class="material-symbols-outlined">
                        coffee
                    </div>
                </button>
            </div>
            <div className='w-1/5 h-full items-center justify-start flex flex-col'>
                <h2 className='text-custom-textColor text-3xl w-2/3 text-left'>Quick Links</h2>
                <ul className='w-2/3 px-3'>
                    <li><NavLink to="/" className={({ isActive }) => ` transition-all ease delay-100 text-xl  flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>About</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="skills" className={({ isActive }) => ` transition-all ease delay-100 text-xl flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Skills</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="education" className={({ isActive }) => ` transition-all ease delay-100 text-xl flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Educatin</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="projects" className={({ isActive }) => ` transition-all ease delay-100 text-xl flex flex-row font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Projects</div>
                    </NavLink>
                    </li>
                    <li><NavLink to="contact" className={({ isActive }) => `transition-all ease delay-100 text-xl flex flex-row  font-light drop-shadow-xl  hover:text-custom-linkHover ${isActive ? 'text-custom-linkActive' : 'text-custom-textColor'}`}>
                        <div className='material-symbols-outlined text-base'>play_circle</div><div>Contact</div>
                    </NavLink>
                    </li>

                </ul>
            </div>
            <div className='w-1/5 h-full px-10 flex flex-col items-start justify-start'>
                <h3 className='text-custom-textColor text-3xl'>Contact Info</h3>
                <div className='p-2 text-custom-textColor flex flex-row'>
                    <div className='material-symbols-outlined'>phone</div>
                    <div className='px-2'>+917890800857</div>
                </div>
                <div className='p-2 text-custom-textColor flex flex-row'>
                    <div className='material-symbols-outlined'>email</div>
                    <div className='px-2'>abhaykp565@gmail.com</div>
                </div>
                <div className='p-2 text-custom-textColor flex flex-row'>
                    <div className='material-symbols-outlined'>location_on</div>
                    <div className='px-2'>Kolkata, India</div>
                </div>
                <div className='py-5 mx-1 text-custom-textColor flex flex-row'>
                    <Link to="https://www.instagram.com/abhayprasad565/" target='_blank' className='fa-brands fa-instagram fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://www.linkedin.com/in/abhayprasad565/" target='_blank' className='fa-brands fa-linkedin fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://twitter.com/abhayprasad565" target='_blank' className='fa-brands fa-x-twitter fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                    <Link to="https://github.com/abhayprasad565" target='_blank' className='fa-brands fa-github fa-lg fa-beat-fade text-custom-btnBg px-2'></Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
