import AdministrationTeam from '@/components/containers/team/AdministrationTeam'
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <AdministrationTeam />
    </Layout>
  )
}

export default page