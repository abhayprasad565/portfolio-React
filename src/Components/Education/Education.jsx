import React from 'react';
import EaducationCard from './EaducationCard';
import { Link } from 'react-router-dom';
import kv from '../../assets/education/kv.jpg';
import tmsl from '../../assets/education/tmsl.jpeg';

const Education = () => {
    const education = [
        {
            course: "Bachelor Of Technology in Electronics and Communication",
            institute: "Techno Main Saltlake",
            university: "MAKAUT",
            icon: tmsl,
            duration: "2020-2024",
            status: "Pursuing",
        },
        {
            course: "HighSchool",
            institute: "Kendriya Vidyalaya barrackpore Army",
            university: "CBSE",
            icon: kv,
            duration: "2011-2020",
            status: "Completed",
        }

    ]
    return (
        <div className='w-full text-custom-textColor sm:h-screen min-h-fit flex sm:flex-row-reverse flex-col   justify-evenly items-center'>
            <div className='sm:w-2/5 w-full  flex-col flex justify-start items-start p-3'>
                <div className='text-3xl font-bold flex-row flex'><div>I am</div><div className='text-custom-linkActive px-2'>Abhay</div></div>
                <div className='text-lg font-bold'>Full stack Developer</div>
                <p className='w-full  text-left'>
                    I am Aspiring Web developer from kolkata, Currently pursuing Electronics and Communication Engneering from Techno Main Saltlake. Passionate about web development and Coding I contionusly improve myself by Solving Problems and Developing websites and Keeping myself up-to-date with the latest Technologies.
                    Dedicated to perpetual self-improvement and skill enhancement: Expect to witness ongoing growth and evolution in my portfolio 😄
                </p>
                <div className='text-lg font-bold flex-row flex'><div>Email:</div><div className='text-custom-linkActive px-2'>abhaykp565@gmail.com</div></div>
                <div className='text-lg font-bold flex-row flex'><div>Place:</div><div className='text-custom-linkActive px-2'>Kolkata,India</div></div>
                <Link to="https://drive.google.com/drive/folders/1QqWOw6D81UqvFh0-tR6PaVdK333k_50-"
                    target='_blank'
                    className='bg-custom-btnBg sm:p-2 sm:my-2 px-2 sm:text-xl py-1 my-1 rounded-md text-white flex flex-row hover:text-black hover:border-custom-linkActive border-2 hover:bg-white'>
                    Resume </Link>
            </div>
            <div className='sm:w-2/5 w-full flex flex-col justify-start items-center'>
                <EaducationCard></EaducationCard>
                {
                    education.map((c, i) => (
                        <EaducationCard course={c.course}
                            institute={c.institute}
                            duration={c.duration}
                            icon={c.icon}
                            status={c.status}
                            university={c.university}
                            key={i}>
                        </EaducationCard>
                    ))
                }
            </div>
        </div>
    );
}

export default Education;
