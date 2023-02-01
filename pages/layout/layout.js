import Footer from "@/components/Footer";

import Navigation from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
