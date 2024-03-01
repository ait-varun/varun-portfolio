import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Varun Portfolio",
  description: "Portfolio of Varun till now. Just a guy who likes to code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
