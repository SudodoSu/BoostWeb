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
        text: "Web design and developments are great and so cheap>>>EFL", },
        { src: two,
            alt: "Nft2",
            title: "Our team starts designing and developing",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: three, 
            alt: "Nft3",
            title: "You Got Design and Functional Website Based on Your Business Target",
            text: "Web design and developments are great and so cheap>>>EFL", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };