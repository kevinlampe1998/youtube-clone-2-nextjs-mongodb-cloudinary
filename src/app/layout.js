import "./globals.css";
import ContextProvider from "@/components/context-provider/context-provider";
import Header from "@/components/header/header";
// import Header2 from "@/components/header2/header2";
// import SlideBar from "@/components/slidebar/slidebar";
import ForeGround from "@/components/foreground/foreground";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body>
          <ForeGround/>
          <Header/>
          {/* <Header2/> */}
          {/* <SlideBar/> */}
          <main>
            {children}
          </main>
        </body>
      </ContextProvider>
    </html>
  );
}
