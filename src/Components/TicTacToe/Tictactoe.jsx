import React, { useState } from 'react'
import "./Tictactoe.css"
import circle from "../../Assets/circle.png"
import cross from "../../Assets/cross.png"
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

let data = ["", "", "", "", "", "", "", "", ""]
function Tictactoe() {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }

        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}'>`
            data[num] = "X";
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src='${circle}'>`
            data[num] = "O";
            setCount(++count);
        }
        checkWin();
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    let [winner, setWinner] = useState(null);

    const won = (winner) => {
        setLock(true)
        setWinner(winner)
    }

    return (
        <div className='container'>
            {/* <DotLottieReact
                src="../../Assets/Lottie/Animation - 1728674381901.lottie"
                loop
                autoplay
                style={{ height: '1000px' }}
            /> */}
            <h1 className="title">Tic Tac Toe</h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className='reset'>Reset</button>
            {winner ? <div className='winningStatement'><h3>Congratulations the winner is <span>{winner}</span></h3></div> : <div></div>}
        </div>
    )
}

export default Tictactoe
