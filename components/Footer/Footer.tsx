import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mt-32 pt-10 pb-2.5">
      <div className="container flex flex-col">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="md:w-4/12">
            <Image
              src="/assets/images/BOOSTWEB_logo.png"
              alt="Boost Web - Logo"
              width={500}
              height={68}
              className="max-w-[250px]"
            />
          </div>
          <div className="md:w-2/12">
            <ul className="text-white font-Inter ">
              <li className="text-[19.2px] font-Montserrat text-primary">
                Navigation
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#tokenomics">Tokenomics</a>
              </li>
              <li>
                <a href="#nft">Nft</a>
              </li>
            </ul>
          </div>
          <div className="md:w-2/12">
            <ul className="text-white font-Inter">
              <li className="text-[19.2px] font-Montserrat text-primary">
                Useful Links
              </li>
              <li>
                <a
                  href="https://twitter.com/HalfShibaInu"
                  target="blank"
                  className="flex gap-1 items-center"
                >
                  <FaTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/halfshiba"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaDiscord />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/HalfShibaInu"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaTelegram />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/HalfShibaInu/"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaReddit />
                  Reddit
                </a>
              </li>
              <li>
                <a
                  href="/assets/pdf/HalfShibaWhitepaper.pptx-1.pdf"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaFilePdf />
                  Whitepaper
                </a>
              </li>
              <li>
                <a
                  href="https://dexscreener.com/ethereum/0x914e578f8bef2607d9c16fd4954c2c10e58dc5ad"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <BsBarChartFill />
                  Chart
                </a>
              </li>
              <li>
                <a
                  href="https://etherscan.io/token/0x8Eb94A06b4716093DBfE335cbdb098DEb2dcdE1b"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaFileContract />
                  Contract
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-2/12 flex flex-col gap-2 items-start">
            <h3 className="text-[19.2px] font-Barlow text-clr_primary">
              Connect With Us
            </h3>
            <button className="text-white">info@halfshib.io</button>
            <ul className="flex gap-4">
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="https://t.me/HalfShibaInu"
                  target="_blank"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaTelegram className="w-[75%] h-[75%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="https://twitter.com/HalfShibaInu"
                  target="_blank"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaTwitter className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="https://etherscan.io/token/0x8Eb94A06b4716093DBfE335cbdb098DEb2dcdE1b"
                  target="_blank"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <SiEthereum className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
              <li className="w-[30.8px] h-[30.8px] bg-[#ffc53a] rounded">
                <a
                  href="https://discord.com/invite/halfshiba"
                  target="_blank"
                  className="w-full h-full text-white flex justify-center items-center rounded"
                >
                  <FaDiscord className="w-[80%] h-[80%] text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[2px] border-none bg-white mt-[2%] mb-[3%]" />
        <div className="flex justify-center">
          <h2 className="text-white mb-4 font-Roboto text-base	text-[15px] sm:text-[16px]">
            © Copyright 2024 Half Shiba Inu - All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
