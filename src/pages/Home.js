import { useState, useEffect } from "react";
import  './Home.css';


function Home(){
    const [position, setPosition] = useState([])

    useEffect(() => {
        const letters = 'abcdefgh'.split('');
        const nums = '12345678'.split('');

        function determineColor(char, num){
            
            if((['a', 'c', 'e', 'g'].includes(char)) && (['1', '3', '5', '7'].includes(num))){
                return 'black'
            }
            if(['b', 'd', 'f', 'h'].includes(char) && ['2', '4', '6', '8'].includes(num)){
                return 'black'
            }
            return 'white'

        }

        const positions = []
        letters.forEach(char => {
            nums.forEach(num => {
                positions.push({
                    character : char,
                    number : num,
                    color : determineColor(char, num)
                });
            });
        });
        
        setPosition(positions) 
    }, []);

    // TODO: Make the board a state where things change when squares are clicked 
    return (
        <div className="page-container h-full flex justify-center items-start ">
            <div className="board w-5/12 grid grid-cols-8 gap-0.5 gap-x-0.5 ">
                {position.map((obj, index) => {
                    let name = obj.character + obj.number
                    return <div key={index} className={`square ${obj.color} aspect-square border-2 border-zinc-600`} id={name}></div>
                })}
            </div>
        </div>
    );
}

export default Home