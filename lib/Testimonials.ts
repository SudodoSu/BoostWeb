// Images
import one from "@/public/assets/images/BOOSTWEB_logo.png";
import two from "@/public/assets/images/BOOSTWEB_logo.png";
import three from "@/public/assets/images/BOOSTWEB_logo.png";
import four from "@/public/assets/images/BOOSTWEB_logo.png";
import five from "@/public/assets/images/BOOSTWEB_logo.png";
import six from "@/public/assets/images/BOOSTWEB_logo.png";
import seven from "@/public/assets/images/BOOSTWEB_logo.png";
import eight from "@/public/assets/images/BOOSTWEB_logo.png";
import nine from "@/public/assets/images/BOOSTWEB_logo.png";
import ten from "@/public/assets/images/BOOSTWEB_logo.png";

import { StaticImageData } from "next/image";

type LocationData = {
    src: StaticImageData;
    alt: string;
    text: string;
  };

  type DataObject = {
    images: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const TestimonialsContent: DataObject = {
    images: [
        { src: one,
            alt: "Nft1",
        text: "Web design and developments are great and so cheap>>>EFL", },
        { src: two,
            alt: "Nft2",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: three, 
            alt: "Nft3",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: four,
            alt: "Nft4",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: five,
            alt: "Nft5",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: six,
            alt: "Nft6",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: seven, 
            alt: "Nft7",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: eight,
            alt: "Nft8",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: nine,
            alt: "Nft9",
            text: "Web design and developments are great and so cheap>>>EFL", },
        { src: ten,
            alt: "Nft10",
            text: "Web design and developments are great and so cheap>>>EFL", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };