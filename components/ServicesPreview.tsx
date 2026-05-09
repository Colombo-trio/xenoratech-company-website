import React from "react";
import { Code, Smartphone, Globe, Rocket } from "lucide-react";
import { ServiceCard, ServicesHeader } from "./ServicesClient";

const services = [
    {
        icon: <Globe className="w-8 h-8 text-blue-500" />,
        title: "Web Development",
        description: "High-performance websites built with modern technologies for maximum speed and SEO.",
        link: "/services/web-development",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-500" />,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications that provide seamless user experiences.",
        link: "/services/mobile-apps",
    },
    {
        icon: <Code className="w-8 h-8 text-green-500" />,
        title: "Custom Software",
        description: "Tailored software solutions to automate your business processes and boost efficiency.",
        link: "/services/custom-software",
    },
    {
        icon: <Rocket className="w-8 h-8 text-orange-500" />,
        title: "Digital Marketing",
        description: "Strategic marketing campaigns to grow your brand and reach your target audience.",
        link: "/services/digital-marketing",
    },
];

export default async function ServicesPreview() {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <ServicesHeader />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            link={service.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
