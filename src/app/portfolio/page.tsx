
import HomeThreeService from '@/components/containers/service/HomeThreeService'
import Layout from '@/components/layout/Layout'
import React from 'react'

const page = () => {
    return (
        <Layout header={2} footer={2}>
            <HomeThreeService />
        </Layout>
    )
}

export default page