import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/component/videocard";
import { VideoGrid } from "@/component/videogrid";
import { AppBar } from "@/component/appbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <AppBar></AppBar>
    <VideoGrid></VideoGrid>

    </div>
  );
}
