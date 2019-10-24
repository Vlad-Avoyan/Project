import React from 'react'
import { reviews } from './config'
import './Slider.css'

class Slider extends React.Component {
    constructor() {
        super()

        this.state = {
            imageIndex: 0
        }
    }

    nextSlide = (e) => {
        let newIndex = this.state.imageIndex
        if (e.currentTarget.dataset.direction === 'next') {
            if (newIndex < reviews.length) {
                newIndex = this.state.imageIndex + 1
            }
        } else {
            if (newIndex > 0) {
                newIndex = this.state.imageIndex - 1
            }
        }
        if (newIndex == reviews.length) {
            newIndex = 0
        }
        this.setState({ imageIndex: newIndex })
    }

    render() {

        return (
            <div className="mainDiv">
                <div className="sliderDiv">
                    <button className="prev" data-direction="prev" onClick={this.nextSlide.bind(this)}>PREV</button>
                     <img src={reviews[this.state.imageIndex]} />
                    <button className="next" data-direction="next" onClick={this.nextSlide.bind(this)}>NEXT</button>
                </div>
            </div>
        )
    }
}

export default Slider