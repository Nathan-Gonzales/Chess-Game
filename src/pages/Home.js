import { useState, useEffect } from "react";
import  './Home.css';
import clearBackground from '../images/clearbackground.png';
/*
    This is the homepage which generates the board and button to start a new game.
*/

function testing(){
    console.log('test')
}

function Home(){

    useEffect(() => {
        // This is where the pieces will be rendered on load
        

    }, []);

    
    return (
        <div className="page-container grid ">
            <div className="left-container ">

            </div>
            <div className="middle-container flex justify-center items-center">
                <div className="board w-full relative">
                    <svg viewBox="0 0 100 100">
                        <rect width='12.5%' height='12.5%' x=''></rect>
                    </svg>
                </div>
            </div>
            <div className="right-container ">

            </div>
        </div>
    );
}

export default Home