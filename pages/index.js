import React from "react";
import Layout from "../components/Layouts/Layout";
import Image from "next/image";
import DashCards from "../components/DashCards";
import SwiperSliders from "../components/Layouts/swiper";
import GridCards from "../components/GridCards";
import SliderCard from "../components/SliderCard";

export default function Home() {
  return (
    <>
      <Layout>
        <SliderCard/>
           
        <DashCards >
            <GridCards title="#Entertainment" />
            <GridCards title="#Games" />
            <GridCards title="#Technology" />
        </DashCards>
        

      
      </Layout>
 

    </>
  )
}
