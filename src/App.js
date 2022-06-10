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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Rightsite/></SwiperSlide>
        <SwiperSlide><Leftisite /> </SwiperSlide>
        <SwiperSlide><AddItem /></SwiperSlide>

      </Swiper>
    </>
  );
}
export default App