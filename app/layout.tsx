import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Vero - Landing Page',
    description: 'Modern landing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
