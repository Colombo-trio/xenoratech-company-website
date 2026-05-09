import Link from "next/link";
import { ProjectCard, PortfolioHeader } from "./PortfolioClient";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "A full-featured online store with payment integration and inventory management.",
    },
    {
        title: "FinTech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Real-time financial data visualization for a leading banking application.",
    },
    {
        title: "Healthcare App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Patient management system connecting doctors and patients seamlessly.",
    },
];

export default async function PortfolioPreview() {
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return (
        <section className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <PortfolioHeader />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            category={project.category}
                            image={project.image}
                            description={project.description}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center px-8 py-4 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-gray-900 dark:text-white font-medium"
                    >
                        View All Projects <span className="ml-2">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
