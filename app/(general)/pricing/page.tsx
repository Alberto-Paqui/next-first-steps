import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicios',
    keywords: ["Pricing Page", "Alberto", "Pricing", "..."]
};


export default function PricingPage() {

    return (
        <>
            <span className="text-7xl">Priceng page</span>
        </>
    )
}