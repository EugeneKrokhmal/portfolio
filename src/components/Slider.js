// components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ star }) => {
    const { situation, task, action, result } = star;
    return (
        <div className="max-w-[375px] mb-8 shadow rounded text-sm flex w-screen bg-white">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={300}
                variableWidth={true}
                pagination={{ clickable: true }}>
                <SwiperSlide>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Situation</h3>
                        <p>{situation}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Task</h3>
                        <p>{task}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Action</h3>
                        <ul className="list-disc pl-6">
                            {action.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">Result</h3>
                        <p>{result}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;