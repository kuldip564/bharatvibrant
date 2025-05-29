import { GraduationCap, Globe, Users } from "lucide-react";

function AboutPage() {
    return (
        <section className="w-full bg-blue-50 min-h-screen py-16 px-6 font-[Poppins] text-blue-900">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-bold mb-6 text-center">
                    About Bharat Vibrant
                </h1>

                {/* Intro Paragraph */}
                <p className="text-lg text-center mb-10 leading-relaxed">
                    Bharat Vibrant is dedicated to supporting aspiring nurses who want to build a successful career in Australia's healthcare system. 
                    We provide trusted resources, professional courses, expert guidance, and community support for both local and international nursing students.
                </p>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <GraduationCap className="mx-auto mb-4 text-blue-600" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
                        <p className="text-gray-600 text-sm">
                            Learn from experienced educators and professionals who understand the Australian nursing standards.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <Globe className="mx-auto mb-4 text-blue-600" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Global Opportunities</h3>
                        <p className="text-gray-600 text-sm">
                            Access resources tailored for both domestic and international students including visa and registration support.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <Users className="mx-auto mb-4 text-blue-600" size={32} />
                        <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
                        <p className="text-gray-600 text-sm">
                            Join a network of fellow students, mentors, and alumni to stay motivated and informed.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Our mission is to simplify the journey for students who aspire to become nurses in Australia by providing a comprehensive and engaging learning platform, practical resources, and up-to-date information for academic and professional success.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;
