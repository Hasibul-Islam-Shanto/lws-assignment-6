import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "LWS Kitchen - Food Blog and Recipes",
  description:
    "LWS Kitchen - Food Blog and Recipes. It's the sixth assignment of LWS rnext course.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
