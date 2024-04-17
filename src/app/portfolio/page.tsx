import ServiceBoost from '@/components/containers/boost/ServiceBoost'
import AboutCounter from '@/components/containers/counter/AboutCounter'
import HomeThreeFeedback from '@/components/containers/feedback/HomeThreeFeedback'
import HomeThreeService from '@/components/containers/service/HomeThreeService'
import AboutTeam from '@/components/containers/team/AboutTeam'
import WorkOne from '@/components/containers/work/WorkOne'
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