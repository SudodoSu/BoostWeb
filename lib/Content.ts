// Images
import one from "@/public/assets/images/BOOSTWEB_logo.png";
import two from "@/public/assets/images/BOOSTWEB_logo.png";
import three from "@/public/assets/images/BOOSTWEB_logo.png";
import four from "@/public/assets/images/BOOSTWEB_logo.png";
import five from "@/public/assets/images/BOOSTWEB_logo.png";
import six from "@/public/assets/images/BOOSTWEB_logo.png";
import seven from "@/public/assets/images/BOOSTWEB_logo.png";
import eight from "@/public/assets/images/BOOSTWEB_logo.png";

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

 export const Content: DataObject = {
    images: [
        { src: one,
            alt: "Nft1",
        text: "Barber Shop", },
        { src: two,
            alt: "Nft2",
            text: "Accommodations", },
        { src: three, 
            alt: "Nft3",
            text: "Restaurants", },
        { src: four,
            alt: "Nft4",
            text: "Night Clubs", },
        { src: five,
            alt: "Nft5",
            text: "Online Agency", },
        { src: six,
            alt: "Nft6",
            text: "Local Business", },
        { src: seven, 
            alt: "Nft7",
            text: "Portfolio Websites", },
        { src: eight,
            alt: "Nft8",
            text: "Online Stores", },
      // Add more images as needed
    ],
    // You can add more arrays or properties if needed
  };