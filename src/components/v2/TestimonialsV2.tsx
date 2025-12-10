import React from 'react';

const TestimonialsV2 = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#00B8D4] font-bold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-4xl font-bold mt-2 text-[#1A2A33]">Trusted by Industry Leaders</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "John Doe",
                            role: "CEO, TechInnovate",
                            initials: "JD",
                            quote: "MissioTech's AI integration services have revolutionized our data analysis capabilities. We've seen a 40% increase in efficiency.",
                            bg: "bg-blue-50"
                        },
                        {
                            name: "Jane Smith",
                            role: "Director, EduFuture",
                            initials: "JS",
                            quote: "The VR training solutions are a game-changer. Employee engagement is at an all-time high, and training time has been cut in half.",
                            bg: "bg-cyan-50"
                        },
                        {
                            name: "Robert Johnson",
                            role: "CTO, GlobalSolutions",
                            initials: "RJ",
                            quote: "Their strategic consulting gave us the roadmap we needed. We are now confidently navigating the complexities of digital transformation.",
                            bg: "bg-teal-50"
                        }
                    ].map((item, index) => (
                        <div key={index} className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                            <div className="absolute top-8 right-8 text-[#E6F7FA]">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>

                            <div className="mb-6 flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-[#003B4F] ${item.bg}`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-[#1A2A33]">{item.name}</h4>
                                    <div className="text-sm text-gray-500">{item.role}</div>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed italic relative z-10">"{item.quote}"</p>

                            <div className="mt-auto pt-6 flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsV2;
