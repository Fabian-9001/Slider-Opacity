import React, { useState } from 'react'
import SliderElement from './SliderElement'
import SliderButton from './SliderButton'
import './styles/slider.css'

const Slider = () => {

    const [isActive, setIsActive] = useState(0)

    const elements = [0, 1, 2, 3]

    let increase = () => {
        if (isActive === elements[elements.length - 1]) {
            setIsActive(0)
        } else {
            setIsActive(isActive + 1)
        }
    }

    let decrease = () => {
        if (isActive === elements[0]) {
            setIsActive(elements.length - 1)
        } else {
            setIsActive(isActive - 1)
        }
    }

    return (
        <div className='slider'>
            <div className='slider__mirror' onClick={decrease}>
                <SliderButton />
            </div>
            <div className='slider__elements'>
                {elements.map(element => (
                    <div key={element} className={`${element == isActive ? 'active' : 'disable'}`}><SliderElement /></div>
                ))}
            </div>
            <div onClick={increase}>
                <SliderButton />
            </div>
        </div>
    )
}

export default Slider