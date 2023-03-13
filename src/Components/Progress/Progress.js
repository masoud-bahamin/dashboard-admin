import React from 'react'
import "./Progress.css"

export default function Progress({number}) {
    return (
        <div>
            <div class="wrap">
                {number == 0 ? ( 
                <div class="progress-radial progress-0">
                    <div class="overlay">0%</div>
                </div>) : number == 1 ? (
                
                <div class="progress-radial progress-15">
                    <div class="overlay">15%</div>
                </div>) : number == 2 ? (

                <div class="progress-radial progress-30">
                    <div class="overlay">30%</div>
                </div>) : number == 3 ? (

                <div class="progress-radial progress-45">
                    <div class="overlay">45%</div>
                </div>) : number == 4 ? (
                <div class="progress-radial progress-60">
                    <div class="overlay">60%</div>
                </div>) : number == 5 ? (
                <div class="progress-radial progress-75">
                    <div class="overlay">75%</div>
                </div>) : number == 6 ? (
                <div class="progress-radial progress-90">
                    <div class="overlay">90%</div>
                </div>) : (

                <div class="progress-radial progress-100">
                    <div class="overlay">100%</div>
                </div>)}

            </div>
        </div>
    )
}
