// Images
import one from "@/public/assets/images/portfolio/barbershop3.png";
import full_one from "@/public/assets/images/portfolio/barbershop.png";
import two from "@/public/assets/images/portfolio/restaurant1.png";
import full_two from "@/public/assets/images/portfolio/restaurant.png";
import three from "@/public/assets/images/portfolio/websiteagency2.png";
import full_three from "@/public/assets/images/portfolio/websiteagency.png";
import four from "@/public/assets/images/portfolio/barbershop3.png";
import five from "@/public/assets/images/portfolio/barbershop3.png";
import six from "@/public/assets/images/portfolio/barbershop3.png";
import seven from "@/public/assets/images/portfolio/barbershop3.png";
import eight from "@/public/assets/images/portfolio/barbershop3.png";
import nine from "@/public/assets/images/portfolio/barbershop3.png";
import ten from "@/public/assets/images/portfolio/barbershop3.png";

import full_four from "@/public/assets/images/portfolio/barbershop3.png";
import full_five from "@/public/assets/images/portfolio/barbershop3.png";
import full_six from "@/public/assets/images/portfolio/barbershop3.png";
import full_seven from "@/public/assets/images/portfolio/barbershop3.png";
import full_eight from "@/public/assets/images/portfolio/barbershop3.png";
import full_nine from "@/public/assets/images/portfolio/barbershop3.png";
import full_ten from "@/public/assets/images/portfolio/barbershop3.png";


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
            full_image_src: full_two,
            alt: "Restaurant Website Design",
            text: "Restaurant Website Design Sample", },
        { src: three, 
            title: "Something",
            full_image_src: full_three,
            alt: "Web Design Agency - Website Design",
            text: "Web Agency Website Design Sample", },
        { src: four,
            title: "Something",
            full_image_src: full_four,
            alt: "Nft4",
            text: "Website design and development of Accommodation", },
        { src: five,
            title: "Something",
            full_image_src: full_five,
            alt: "Nft5",
            text: "Website design and development of Accommodation", },
        { src: six,
            title: "Something",
            full_image_src: full_six,
            alt: "Nft6",
            text: "Website design and development of Accommodation", },
        { src: seven, 
            title: "Something",
            full_image_src: full_seven,
            alt: "Nft7",
            text: "Website design and development of Accommodation", },
        { src: eight,
            title: "Something",
            full_image_src: full_eight,
            alt: "Nft8",
            text: "Website design and development of Accommodation", },
        { src: nine,
            title: "Something",
            full_image_src: full_nine,
            alt: "Nft9",
            text: "Website design and development of Accommodation", },
        { src: ten,
            title: "Something",
            full_image_src: full_ten,
            alt: "Nft10",
            text: "Website design and development of Accommodation", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };