import React, { Suspense, useEffect, useRef, useState } from 'react';
import emojiAbhay from "../../assets/emojiAbhay.png"
const Home = () => {
    const jobAbout = useRef(0);

    async function simulateTyping(text, delay = 100) {
        jobAbout.current.textContent = ''; // Clear existing text
        for (let i = 0; i < text.length; i++) {
            jobAbout.current.textContent = text.substring(0, i + 1);
            await sleep(delay);
        }
        for (let i = 0; i < text.length; i++) {
            jobAbout.current.textContent = jobAbout.current.textContent.substring(0, jobAbout.current.textContent.length - 1);
            await sleep(delay);
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        async function startTypingEffect() {
            const jobs = ["Web Development", "Front End Development", "Backend Development"];
            for (const job of jobs) {
                await simulateTyping(job, 100);
            }
            jobAbout.current.textContent = "Web Development!"
        }
        startTypingEffect();
    }, []);
    return (
        <div className='w-full h-screen relative flex flex-row text-custom-textColor justify-start items-center'>
            <div className="w-1/2 h-screen flex justify-center items-center font-serif flex-col">
                <div className='flex flex-col items-start justify-center'>
                    <div className='text-5xl font-semibold'> Hi There,</div>
                    <div className='text-5xl font-semibold my-1 flex flex-row'>I'm <span className='text-custom-linkActive px-2'>Abhay kumar prasad</span></div>
                    <div className='text-5xl font-semibold  flex flex-row'>I do <span className='text-custom-linkHover px-2' ref={jobAbout}>Abhay kumar prasad</span></div>
                    <button className='bg-custom-btnBg sm:p-2 sm:my-2 px-2 sm:text-xl py-1 my-1 rounded-md text-white flex flex-row'>About Me </button>
                </div>

            </div>
            <div className='w-1/2 h-screen flex justify-center items-center '>
                <img src={emojiAbhay} alt="" className='w-2/5 mt-[-100px] border-solid border-2  shadow-2xl shadow-custom-linkHover animate-bounce-y-reduced rounded-[50%] ' />
            </div>

        </div>
    );
}

export default Home;
