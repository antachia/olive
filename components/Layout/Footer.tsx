
import Image from "next/image"
import Button from "../UI/Button"

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-20 h-[50dvh] rounded-t-[4rem] flex justify-center items-center w-full relative">

      <div className="size-40 bg-secondary rounded-full absolute -top-20 flex justify-center items-center">
        <Image src="/imgs/stamp.webp" alt="Logo" width={140} height={140} />
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section - Logo and Newsletter */}
        <div className="flex flex-col gap-8">
          {/* Logo */}
          <h2 className="text-6xl font-[PPEditorialNew] uppercase">ANTAKYA</h2>
          
          {/* Newsletter */}
          <div className="mt-8">
            <h3 className="text-3xl font-[PPEditorialNew-Ultralight] mb-6">
              Stay Tuned In With Our Newsletter
            </h3>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border-b border-white/50 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
            />
          </div>
        </div>

        {/* Right Section - Contact and Social */}
        <div className="flex flex-col items-end gap-8">
          {/* Contact Button */}
          <Button 
            text="Contact Us" 
            className="border-white text-white hover:bg-white hover:text-secondary"
          />
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/imgs/linkedin.webp" alt="LinkedIn" width={40} height={40} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/imgs/twitter.webp" alt="Twitter" width={40} height={40} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/imgs/instagram.webp" alt="Instagram" width={40} height={40} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/imgs/facebook.webp" alt="Facebook" width={40} height={40} />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <Image src="/imgs/tiktok.webp" alt="TikTok" width={40} height={40} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm font-[PPEditorialNew-Ultralight] mt-8">
            ANTAKYA 2025
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer