import React from "react";
import Messi from "./images/messi.jpg";
import Salah from "./images/Salah.jpg";
import Trent from "./images/Trent.jpg";
import Vdk from "./images/Van Dijk.jpg";

function Players(){
    let player3 = ["Name:Trent Alexandra Arnold", "Age: 26", "Country: England", "Club: Liverpool"]
    let player4 = ["Name: Virgil Van Dikj", "Age: 33", "Country: Netherland", "Club: Liverpool"]
    return(
        <>
        <div className="container">
        <div className="messi">
        <img src= {Messi} className="card" alt="..." style={{width:200, height:200}}/>
        {["Name: Leo Messi", "Age: 36", "Country: Argentina","Club: Inter Miami"].map(show =>(
            <p>{show}</p>
        ))}
        </div>

        <div className="salah">
        <img src= {Salah} className="" alt="..." style={{width:200, height:200}}/>
        {["Name: Mohammed Salah", "Age: 32", "Country:Egypt", "Club: Liverpool"].map(show =>(
            <p>{show}</p>
        ))}
        </div>

        <div className="trent">
        <img src= {Trent} className="" alt="..." style={{width:200, height:200}}/>
        {
            player3.map(show =>(
                <p>{show}</p>
            ))
        }
        </div>

        <div className="vdk">
        <img src= {Vdk} className="" alt="..." style={{width:200, height:200}}/>
        {
            player4.map(show=>(
                <p>{show}</p>
            ))
        }
        </div>
        </div>
        </>
    )
}

export default Players;