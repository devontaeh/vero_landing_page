import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductShowcase from '../components/ProductShowcase'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Header />
            <Hero />
            <ProductShowcase />
            <Features />
            <CTA />
            <Footer />
        </main>
    )
}
