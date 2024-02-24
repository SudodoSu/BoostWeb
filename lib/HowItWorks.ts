// Images
import one from "@/public/assets/images/BOOSTWEB_logo.png";
import two from "@/public/assets/images/BOOSTWEB_logo.png";
import three from "@/public/assets/images/BOOSTWEB_logo.png";

import { StaticImageData } from "next/image";

type LocationData = {
    src: StaticImageData;
    alt: string;
    title: string;
    text: string;
  };

  type DataObject = {
    images: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const HowItWorksContent: DataObject = {
    images: [
        { src: one,
            alt: "Nft1",
            title: "We take your request",
        text: "To better grasp your target audience and business model, kindly fill out the form below to submit your request. Upon submission, our team will review the information provided. Once clarity is confirmed, you will receive an estimated completion date.", },
        { src: two,
            alt: "Nft2",
            title: "Our team starts designing and developing",
            text: "The design team develops a prototype and forwards it to the development team for implementation of functionality, resulting in the creation of a fully functional website.", },
        { src: three, 
            alt: "Nft3",
            title: "Receive Your Fully Functional Website",
            text: "Receive a website with design and functionality meticulously aligned to your business objectives and target audience.", },
    ],
  };