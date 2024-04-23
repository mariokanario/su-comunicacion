
import Layout from "@/components/layout/Layout";
import DevelopmentTeam from "@/components/containers/team/DevelopmentTeam";
import GedsysSection from "@/components/containers/gedsys/GedsysSection";
import GedsysVideo from "@/components/containers/gedsys/GedsysVideo";




const page = () => {

  

  return (

    <Layout header={2} footer={2}>


     <GedsysVideo />

      <GedsysSection />

      <DevelopmentTeam />

    </Layout>
  )
}

export default page