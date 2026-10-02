import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* для десктопа */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden h-20 bg-black border-b border-white sm:block backdrop-blur-md">
        <nav className="flex items-center justify-between h-full px-6">
          {/* Левая часть */}
          <div className="flex text-white uppercase lg:tracking-widest lg:gap-8 md:text-lg md:gap-4 lg:text-xl">
            <a href="#home">Home</a>
            <a href="#artists">Artists</a>
            <a href="#gallery">Gallery</a>
            <a href="#contacts">Contacts</a>
          </div>

          {/* Логотип по центру экрана */}
          <div className="absolute flex items-center h-full -translate-x-1/2 left-1/2">
            <img
              src="/logo.webp"
              className="object-contain w-auto h-full"
              alt="BLACKINKREALM logo"
            />
          </div>

          {/* Правая часть */}
          <div className="flex text-white uppercase lg:tracking-widest lg:gap-8 md:text-lg md:gap-4 lg:text-xl">
            <a href="https://instagram.com/testtttt_page">Instagram</a>
            <a href="https://facebook.com/youraccount">Facebook</a>
            <a href="https://youtube.com/youraccount">Youtube</a>
          </div>
        </nav>
      </header>

      {/*для мобильных*/}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black sm:hidden backdrop-blur-md">
        <div className="flex items-center justify-between h-16 px-4">
          <a
            href="#home"
            className="text-xl font-bold tracking-wider text-white uppercase"
          >
            BLACK INK REALM
          </a>

          {/*кнопка гамбургера*/}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            className="p-2 text-white focus:ouline-none"
          >
            {isOpen ? (
              // Иконка крестика
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Иконка бургера
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Выпадающее меню */}
        {isOpen && (
          <nav className="absolute left-0 right-0 px-2 pb-2 bg-black top-16">
            <div className="flex items-center justify-between px-2 mx-auto">
              <div className="flex gap-2">
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="text-white uppercase"
                >
                  Home
                </a>

                <a
                  href="#artists"
                  onClick={() => setIsOpen(false)}
                  className="text-white uppercase"
                >
                  Artists
                </a>
                <a
                  href="#gallery"
                  onClick={() => setIsOpen(false)}
                  className="text-white uppercase"
                >
                  Gallery
                </a>
              </div>
              <a
                href="#contacts"
                onClick={() => setIsOpen(false)}
                className="text-white uppercase"
              >
                contacts
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
