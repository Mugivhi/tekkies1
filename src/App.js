import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./App.css";
import Rightsite from "./liftisite";
import Leftisite from "./center";
import AddItem from "./rightsite";
import { Navigation } from "swiper";
function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
     
        <SwiperSlide><AddItem /></SwiperSlide>
        <SwiperSlide><Leftisite /></SwiperSlide>
        <SwiperSlide><Rightsite/></SwiperSlide>
      </Swiper>
      {/* <div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div> */}
    </>
  );
}
export default App