"use client"

import { useEffect } from "react"
import AOS from 'aos';

function AosClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
        AOS.init()
    }, [])

    return null

}

export default AosClient;