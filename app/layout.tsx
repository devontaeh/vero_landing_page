import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Vero',
    description: 'Transform your trading with intelligent journaling. Track performance, identify patterns, and build the discipline that separates winners from losers.',
    icons: {
        icon: '/logo.svg',
    },
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
