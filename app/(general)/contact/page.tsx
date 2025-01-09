import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Esta es la pagina del contactos y servicio al cliente',
    keywords: ["Contact Page", "Alberto", "Contact", "..."]
};

export default function ContactPage() {

    return (
        <>
            <span className="text-7xl">Contact page</span>
        </>
    )
}