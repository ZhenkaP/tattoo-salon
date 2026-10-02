import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../common/Scroll";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full mx-auto ">
        <Header />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Layout;
