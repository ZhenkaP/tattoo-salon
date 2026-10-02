import {
  FaTelegram,
  FaWhatsapp,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { lazy } from "react";

import Button from "../common/Button";

const NewYorkMap = lazy(() => import("../common/Map"));

function Footer() {
  return (
    <footer id="contacts" className="w-full py-10 text-white bg-black">
      {/* 
        Mobile: flex-col (вертикально)
        LG: grid-cols-4 (4 колонки)
      */}
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 max-w-[1440px] mx-auto px-6">
        {/* КОЛОНКА 1: Соцсети */}
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#229ED9] transition-colors"
            >
              <FaTelegram className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/yournumber"
              className="text-gray-400 hover:text-[#25D366] transition-colors"
            >
              <FaWhatsapp className="w-7 h-7" />
            </a>
            <a
              href="https://pinterest.com/yourprofile"
              className="text-gray-400 hover:text-[#E60023] transition-colors"
            >
              <FaPinterest className="w-7 h-7" />
            </a>
            <a
              href="https://instagram.com/testtttt_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#c9379b] transition-colors"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1d6ef9] transition-colors"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <a
              href="https://youtube.com/youraccount"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#d92223] transition-colors"
            >
              <FaYoutube className="w-7 h-7" />
            </a>
            <div className="pb-8 mt-14 justify-items-center">
              <Button className="text-black" href="https://api.whatsapp.com/send?phone=yourphone">
                book an appointment
              </Button>
            </div>
          </div>
        </div>

        {/* КОЛОНКА 2: Адрес и Контакты */}
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-lg font-semibold">Contact Info</h3>

          <div>
            <p className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
              Address
            </p>
            <p className="font-medium leading-relaxed">
              123 Example Street,
              <br />
              New York, NY 10001
            </p>
          </div>

          <div>
            <p className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
              Hours
            </p>
            <p className="font-medium">Mon - Sun: 11 am - 9 pm</p>
          </div>

          <div>
            <p className="mb-1 text-sm tracking-wider text-gray-400 uppercase">
              Phone
            </p>
            <a
              href="tel:+171666624XX"
              className="font-medium transition-colors hover:text-rose-500"
            >
              +171 6666 24XX
            </a>
          </div>
        </div>

        {/* КОЛОНКИ 3 и 4: Карта (занимает 2 фракции) */}
        <div className="w-full lg:col-span-2">
          <NewYorkMap />
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="px-6 pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
