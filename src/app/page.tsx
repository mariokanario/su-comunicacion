
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import SponsorTwo from "@/components/containers/sponsor/SponsorTwo";
import AboutTwo from "@/components/containers/about/AboutTwo";
import HomeTwoService from "@/components/containers/service/HomeTwoService";


export default function Home() {
  return (
    <Layout header={2} footer={2}>
      <BannerTwo />
      <SponsorTwo /> 
      <AboutTwo />
      {/* <HomeThreeService /> */}
      <HomeTwoService />
    </Layout>
  );
}
