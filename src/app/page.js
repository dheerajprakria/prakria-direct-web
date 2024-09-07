import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Homepage/Hero";
import FirstSec from "@/components/Homepage/Content/FirstSec";
import SecondSec from "@/components/Homepage/Content/SecondSec";

export default function Home() {
  return (
    <div>
      <Hero />
      <FirstSec />
      <SecondSec />
    </div>
  );
}
