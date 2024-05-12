import ServiceBoost from '@/components/containers/boost/ServiceBoost'
import AboutCounter from '@/components/containers/counter/AboutCounter'
import HomeThreeFeedback from '@/components/containers/feedback/HomeThreeFeedback'
import WorkOne from '@/components/containers/work/WorkOne'
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <WorkOne />
      <AboutCounter />
      <HomeThreeFeedback />
      <ServiceBoost />
    </Layout>
  )
}

export default page