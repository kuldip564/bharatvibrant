import { Stethoscope } from 'lucide-react';

export function InfoCard() {
    return (
        <div className="w-10/12 max-w-5xl mx-auto bg-teal-50 border border-teal-200 rounded-3xl shadow-xl p-8 transition-transform hover:scale-[1.015] duration-300 font-[Poppins]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-600 text-white p-3 rounded-full shadow-md">
                    <Stethoscope className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-teal-900 font-[Poppins]">Nursing in Australia</h2>
            </div>

            {/* Description */}
            <p className="text-teal-900 text-lg mb-6 leading-relaxed">
                We empower aspiring nurses with the knowledge and skills needed to succeed in Australia's dynamic healthcare system. 
                Our platform offers up-to-date courses, expert blogs, and a supportive community for both local and international students.
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                    { title: "📘 Nursing Courses", desc: "Accredited content aligned with Australian standards." },
                    { title: "🩺 Clinical Skills", desc: "Practical training and simulations to boost confidence." },
                    { title: "🇦🇺 Visa & Study Guide", desc: "Help for international students with study & PR pathways." }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-5 shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
                    >
                        <h3 className="text-teal-700 text-xl font-semibold mb-1 font-[Poppins]">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <button className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-700 hover:scale-105 transition duration-300 cursor-pointer font-[Poppins]">
                    Start Your Nursing Journey
                </button>
            </div>
        </div>
    );
}


export function BlogCardGrid() {
    const blogs = [
        {
            title: "Pathways to Nursing Registration in Australia",
            desc: "Learn the steps required for overseas nurses to get registered and practice in Australia.",
            date: "May 20, 2025",
            author: "Dr. Asha Kumar",
        },
        {
            title: "Top 5 Nursing Colleges for International Students",
            desc: "Explore the most trusted and highly rated nursing institutions across Australia.",
            date: "May 12, 2025",
            author: "Samuel R.",
        },
        {
            title: "How to Prepare for NCLEX-RN Exam",
            desc: "Tips, resources, and study plans to crack the NCLEX-RN for Australian nursing practice.",
            date: "May 5, 2025",
            author: "Nina Joseph",
        },
    ];

    return (
        <div className="w-11/12 max-w-6xl mx-auto mt-10 mb-16 font-[Poppins]">
            <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-teal-100 shadow-md hover:shadow-lg transition duration-300 p-6 hover:scale-[1.02] cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold text-teal-900 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                        <div className="text-xs text-gray-500">
                            {blog.date} • {blog.author}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
