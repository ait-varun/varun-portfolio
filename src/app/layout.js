import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SmoothScroll from "./components/SmoothScroll/page";
export const metadata = {
  title: "Varun Portfolio",
  description: "Portfolio of Varun till now. Just a guy who likes to code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
