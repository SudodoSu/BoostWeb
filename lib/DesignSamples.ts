// Images
import one from "@/public/assets/images/portfolio/barbershop3.png";
import full_one from "@/public/assets/images/portfolio/barbershop.png";
import two from "@/public/assets/images/portfolio/restaurant1.png";
import three from "@/public/assets/images/portfolio/websiteagency2.png";
import four from "@/public/assets/images/portfolio/barbershop3.png";
import five from "@/public/assets/images/portfolio/barbershop3.png";
import six from "@/public/assets/images/portfolio/barbershop3.png";
import seven from "@/public/assets/images/portfolio/barbershop3.png";
import eight from "@/public/assets/images/portfolio/barbershop3.png";
import nine from "@/public/assets/images/portfolio/barbershop3.png";
import ten from "@/public/assets/images/portfolio/barbershop3.png";

import { StaticImageData } from "next/image";

type LocationData = {
    src: StaticImageData;
    full_image_src: StaticImageData;
    title: string;
    alt: string;
    text: string;
  };

  type DataObject = {
    images: LocationData[];
    // You can add more arrays or properties if needed
  };

 export const DesignSamples: DataObject = {
    images: [
        { src: one,
            title: "Something",
            full_image_src: full_one,
            alt: "Barber Shop Website Design",
        text: "Barber Shop Website Design Sample", },
        { src: two,
            title: "Something",
            full_image_src: full_one,
            alt: "Restaurant Website Design",
            text: "Restaurant Website Design Sample", },
        { src: three, 
            title: "Something",
            full_image_src: full_one,
            alt: "Web Design Agency - Website Design",
            text: "Web Agency Website Design Sample", },
        { src: four,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft4",
            text: "Website design and development of Accommodation", },
        { src: five,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft5",
            text: "Website design and development of Accommodation", },
        { src: six,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft6",
            text: "Website design and development of Accommodation", },
        { src: seven, 
            title: "Something",
            full_image_src: full_one,
            alt: "Nft7",
            text: "Website design and development of Accommodation", },
        { src: eight,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft8",
            text: "Website design and development of Accommodation", },
        { src: nine,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft9",
            text: "Website design and development of Accommodation", },
        { src: ten,
            title: "Something",
            full_image_src: full_one,
            alt: "Nft10",
            text: "Website design and development of Accommodation", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };