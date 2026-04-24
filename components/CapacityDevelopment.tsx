import Image from "next/image";
import { Zap } from "lucide-react";

export default function CorporateTraining() {
    const features = [
        "Tailored Training Programs",
        "Expert-Led Workshops",
        "Personalized Mentorship",
        "Technical Skills Enhancement",
        "Collaborative Learning Environment",
        "Ongoing Support and Resources",
    ];

    return (
        <section className="w-full bg-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Content - Left */}
                <div className="flex flex-col gap-4 flex-1">
                    <h2 className="text-2xl md:text-4xl font-semibold font-nunito text-main-text">
                        Capacity Development
                    </h2>

                    {/* Image - Mobile only */}
                    <div className="block md:hidden w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/capacity-dev.jpg"
                            alt="Capacity development session"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="text-sm md:text-base text-[#696969] font-nunito-sans leading-relaxed">
                        At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success.
                    </p>

                    <ul className="flex flex-col gap-3">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-[#696969] font-nunito-sans">
                                <Zap size={16} className="text-primary fill-primary flex-shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image - Desktop only */}
                <div className="hidden md:block flex-1 rounded-4xl overflow-hidden">
                    <Image
                        src="/capacity-dev.jpg"
                        alt="Corporate development session"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>

                
            </div>
        </section>
    );
}