import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import Header from "@/app/components/Layouts/Header/Header";
import React from "react";
import Footer from "@/app/components/Layouts/Footer/Footer";

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Brest Robotics Laboratory',
    description: 'Make programming',
    authors: [
        { name: 'Egor Moroz', url: 'https://github.com/yorrdt' },
        { name: 'Nikita Khmileuski', url: 'https://github.com/Nikita-ctr' },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    /* if (pathname == '/login') {
        return (
            <html lang="en">
                <body className={roboto.className}>
                    {children}
                </body>
            </html>
        );
    } */

    return (
        <html lang="en">
            <body className={roboto.className}>
                <Header />
                <>
                    {children}
                </>

                <Footer />
            </body>
        </html>
    );
}
