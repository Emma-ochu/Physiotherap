import { MessageCircle } from "lucide-react";
import { Outlet } from "react-router-dom";
import { WHATSAPP_BOOK } from "../lib/whatsapp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveCursor from "../components/InteractiveCursor";
import SEO from "../components/SEO";

const MainLayout = () => {
  return (
    <>
      <SEO />
      <Navbar />
      <Outlet />
      <Footer />
      <InteractiveCursor />

      <a
        href={WHATSAPP_BOOK}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Chat on WhatsApp'
        className='fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_35px_rgba(37,211,102,0.35)] transition duration-200 hover:-translate-y-0.5 hover:scale-105'
      >
        <MessageCircle className='h-7 w-7' strokeWidth={2.2} />
      </a>
    </>
  );
};

export default MainLayout;
