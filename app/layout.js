
import MyContext  from "@/Helper/Context";
import "./globals.css";
export const metadata = {
  title: "Rahul React",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  MyContext
  return (
    <html lang="en">
      <body>
      <MyContext>
          {children}
      </MyContext></body>
    </html>
  );
}
