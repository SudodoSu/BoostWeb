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

 export const DesignSamples: DataObject = {
    images: [
        { src: one,
            alt: "Nft1",
        text: "Website design and development of Accommodation", },
        { src: two,
            alt: "Nft2",
            text: "Website design and development of Accommodation", },
        { src: three, 
            alt: "Nft3",
            text: "Website design and development of Accommodation", },
        { src: four,
            alt: "Nft4",
            text: "Website design and development of Accommodation", },
        { src: five,
            alt: "Nft5",
            text: "Website design and development of Accommodation", },
        { src: six,
            alt: "Nft6",
            text: "Website design and development of Accommodation", },
        { src: seven, 
            alt: "Nft7",
            text: "Website design and development of Accommodation", },
        { src: eight,
            alt: "Nft8",
            text: "Website design and development of Accommodation", },
        { src: nine,
            alt: "Nft9",
            text: "Website design and development of Accommodation", },
        { src: ten,
            alt: "Nft10",
            text: "Website design and development of Accommodation", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };