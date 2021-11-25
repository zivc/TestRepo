import React, { useEffect, useState } from 'react';

// @ts-ignore
const Slider = ({ data, onChange }): TSlider => {
    // @ts-ignore
    const [min, max] = data.reduce((range, current) => {
        if (current.spend < range[0]) range[0] = current.spend;
        if (current.spend > range[1]) range[1] = current.spend;
        return range;
    }, [data[0].spend, data[0].spend]);

    const [sliderValue, setSliderValue] = useState(max);
    useEffect(() => {
        onChange(max);
    }, []);

    // @ts-ignore
    return <>
        {/* TODO: DEBOUNCE */}
        <input type="range" min={min} max={max} value={sliderValue} onChange={(e) => {
            setSliderValue(e.target.value);
            onChange(e.target.value);
        }} />
        {min} - {max}
    </>
}

export default Slider;
