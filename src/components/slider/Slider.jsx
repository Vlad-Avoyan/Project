import React from 'react'
import {reviews} from './config'
import './Slider.css'

class Slider extends React.Component {
    constructor() {
        super()

        this.state = {
            activSlide: 0
        }
        this.nextSlide = this.nextSlide.bind(this)
    }

    nextSlide = (e) => {
        let newIndex = this.state.activSlide
        if(e.currentTarget.dataset.direction === "next") {
            if(newIndex < reviews.length -1) {
                newIndex = this.state.activSlide + 1
            }
        } else {
            if(newIndex > 0) {
                newIndex = this.state.activSlide - 1
            }
        }
        this.setState({ activSlide: newIndex })
    }

    render(){
        
        return(
            <div className="mainDiv">
                <div className="leftButton">
                    <button data-direction = "prev" onClick={this.nextSlide.bind(this)}>Prev</button>
                </div>
                <div className="sliderDiv">
                <img src={reviews[this.state.activSlide]} />
                <h1>{this.state.activSlide}</h1>
                </div>
                <div className="rightButton">
                    <button data-direction = "next" onClick={this.nextSlide.bind(this)}>next</button>
                </div>
            </div>
        )
    }
}

export default Slider