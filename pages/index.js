import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroMain from "@/components/IntroMain";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Biztech</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <IntroMain />
      <FeatureSection />
    </>
  );
}
