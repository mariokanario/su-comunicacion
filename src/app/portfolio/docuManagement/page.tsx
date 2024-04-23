import Document from '@/components/containers/document/Document'
import DocuManTeam from '@/components/containers/team/DocuManTeam'
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
  return (
    <Layout header={2} footer={2}>
      <Document />
      <DocuManTeam />
    </Layout>
    
  )
}

export default page