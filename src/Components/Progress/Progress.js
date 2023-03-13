import React from 'react'
import "./Progress.css"

export default function Progress({number}) {
    return (
        <div>
            <div className="wrap">
                {number == 0 ? ( 
                <div className="progress-radial progress-0">
                    <div className="overlay">0%</div>
                </div>) : number == 1 ? (
                
                <div className="progress-radial progress-15">
                    <div className="overlay">15%</div>
                </div>) : number == 2 ? (

                <div className="progress-radial progress-30">
                    <div className="overlay">30%</div>
                </div>) : number == 3 ? (

                <div className="progress-radial progress-45">
                    <div className="overlay">45%</div>
                </div>) : number == 4 ? (
                <div className="progress-radial progress-60">
                    <div className="overlay">60%</div>
                </div>) : number == 5 ? (
                <div className="progress-radial progress-75">
                    <div className="overlay">75%</div>
                </div>) : number == 6 ? (
                <div className="progress-radial progress-90">
                    <div className="overlay">90%</div>
                </div>) : (

                <div className="progress-radial progress-100">
                    <div className="overlay">100%</div>
                </div>)}

            </div>
        </div>
    )
}
