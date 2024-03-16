import React, { useRef, useState } from 'react'
import Cross from '../assets/cross.png'
import Circle from '../assets/circle.png'

let data = ["","","","","","","","",""];
const TicTacToe = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let title = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);

    let box_array = [box0,box1,box2,box3,box4,box5,box6,box7,box8];

    const handleToggle =(e,num)=>{
        if(lock){
            return 0;        
        }
        if(count%2==0){
            e.target.innerHTML = `<img src=${Cross} >`;
            data[num] = "x";
            setCount(++count);

        }else{
            e.target.innerHTML = `<img src=${Circle} >`;
            data[num] = "o";
            setCount(++count);
        }
        console.log(count)
        check();
    }


    const check=()=>{
        if(data[0]===data[1] && data[1]==data[2] && data[2] !==""){
            win(data[2]);
        }
        else if(data[3]==data[4] && data[4]==data[5] && data[5] !==""){
            win(data[5]);
        }
        else if(data[6]==data[7] && data[7]==data[8] && data[8] !==""){
            win(data[8]);
        }
        else if(data[0]==data[3] && data[3]==data[6] && data[6] !==""){
            win(data[6]);
        }
        else if(data[1]==data[4] && data[4]==data[7] && data[7] !==""){
            win(data[7]);
        }
        else if(data[2]==data[5] && data[5]==data[8] && data[8] !==""){
            win(data[8]);
        }
        else if(data[0]==data[4] && data[4]==data[8] && data[8] !==""){
            win(data[8]);
        }
        else if(data[2]==data[4] && data[4]==data[6] && data[6] !==""){
            win(data[6]);
        }

    }

    const win=(winner)=>{
        setLock(true);
        if(winner =='x'){
            title.current.innerHTML = `<img style="width:40px; height:40px" src=${Cross} >`;
        }else{
            title.current.innerHTML = `<img style="width:40px; height:40px" src=${Circle} >`;

        }
    }

    const reset = ()=>{
        setLock(false);
        data =["","","","","","","","",""];
        title.current.innerHTML=``;
        box_array.map((e)=>{
            e.current.innerHTML='';
        })
    }



  return (
    <div className='flex flex-col items-center mt-12 h-screen text-white'>
        <div className='flex items-center mb-3 font-extrabold text-3xl space-x-2'>
            {lock && <h2>Winner is </h2>}
            <p ref={title}></p>
        </div>
        <div className='flex'>

            <div className='col1'>
                <div
                ref={box0}
                onClick={(e)=>handleToggle(e,0)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'>
                </div>
                <div
                ref={box1}
                onClick={(e)=>handleToggle(e,1)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
                <div
                ref={box2}
                onClick={(e)=>handleToggle(e,2)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
            </div>
            <div className='col2'>
            <div
            ref={box3}
            onClick={(e)=>handleToggle(e,3)}
            className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'>
                </div>
                <div
                ref={box4}
                onClick={(e)=>handleToggle(e,4)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
                <div
                ref={box5}
                onClick={(e)=>handleToggle(e,5)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
            </div>
            <div className='col3'>
            <div 
            ref={box6}
            onClick={(e)=>handleToggle(e,6)}
            className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'>
                </div>
                <div
                ref={box7}
                onClick={(e)=>handleToggle(e,7)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
                <div
                ref={box8}
                onClick={(e)=>handleToggle(e,8)}
                className='boxes rounded-md bg-gray-800 flex h-24 w-24 cursor-pointer mx-1 my-2'></div>
            </div>
        </div>


        <button
        onClick={reset}
        className='mt-4 text-3xl bg-blue-900 pt-2 pb-2 cursor-pointer text-white pl-4 pr-4 rounded-md hover:bg-blue-700'>Reset</button>
      
    </div>
  )
}

export default TicTacToe
