import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import ProductShowcase from '../ProductShowcase'
import Features from '../Features'
import CTA from '../CTA'
import Footer from '../Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <ProductShowcase />
            <Features />
            <CTA />
            <Footer />
        </main>
    )
}
