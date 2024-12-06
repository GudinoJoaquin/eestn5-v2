import "./globals.css";
import { notoSans } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`grid grid-rows-[1fr_auto] min-h-screen ${notoSans.className} antialiased`}
      >
        {children}
        <footer className="bg-green-500">Footer</footer>
      </body>
    </html>
  );
}
