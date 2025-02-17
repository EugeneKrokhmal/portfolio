import Slider from "react-slick";
import { useState, useMemo } from "react";
import data from "../data";
import useTypedText from "../hooks/UseTypedText";

const ProjectSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const currentProject = useMemo(() => data.projects[activeSlide] || {}, [activeSlide]);
    const currentStar = useMemo(() => currentProject.star || {}, [currentProject]);
    const fullText = useMemo(() => (
        [
            `S: ${currentStar.situation || ""}`,
            "\n",
            `T: ${currentStar.task || ""}`,
            "\n",
            `A: ${Array.isArray(currentStar.action) ? currentStar.action.join("\n") : currentStar.action || ""}`,
            "\n",
            `R: ${currentStar.result || ""}`,
        ].filter(text => text.trim()).join("\n\n")
    ), [currentStar]);

    const typedText = useTypedText(fullText, 15);
    const settings = useMemo(() => ({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '',
        prevArrow: '',
        cssEase: "linear",
        beforeChange: (_, newIndex) => setActiveSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    }), []);

    return (
        <div className="w-full h-full py-24 mb-24 projects">
            <h1 className="text-shadow max-w-2xl mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">
                Projects
            </h1>

            <Slider {...settings}>
                {data.projects.map((section, index) => (
                    <div key={index} className="text-green-400 font-mono pr-24">
                        <h2 className="mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-3xl text-green-400">
                            {section.title}
                        </h2>
                        {section.date && (
                            <time className="mb-1 text-sm font-normal leading-none text-white">
                                {section.date}
                            </time>
                        )}
                        {section.role && (
                            <p className="text-sm font-semibold mb-2">{section.role}</p>
                        )}
                        <p className="text-xs mb-6 font-light lg:mb-8 text-yellow-400">
                            {section.description}
                        </p>
                    </div>
                ))}
            </Slider>

            <div className="text-green-400 pt-24">
                <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="md:w-2/4">
                        <h2 className="text-4xl font-bold mb-4">{currentProject.title}</h2>
                        {currentProject.date && (
                            <time className="mb-1 text-sm font-normal leading-none">
                                {currentProject.date}
                            </time>
                        )}
                        {currentProject.role && (
                            <p className="text-sm font-semibold mb-2">{currentProject.role}</p>
                        )}
                        <p className="text-xs mb-6 font-light lg:mb-8 text-yellow-400">
                            {currentProject.description}
                        </p>

                        <div className="flex flex-wrap mb-6 gap-2">
                            {currentProject.techStack?.map((tech, index) => (
                                <div
                                    key={index}
                                    className="text-xs bg-black font-medium px-2.5 py-0.5 rounded bg-green-400 box-shadow"
                                    aria-label={`Technology: ${tech}`}
                                >
                                    <span className="text-black no-shadow">{tech}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            className="inline-block my-4 transition-all bg-green-400 text-green-400 box-shadow px-4 py-2 hover:bg-green-300 hover:text-white-300"
                            href={currentProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="text-black">Link</span>
                        </a>
                    </div>
                    <div className="mb-6 md:w-2/4">
                        <pre className="text-xs mb-6 font-light lg:mb-8 text-white whitespace-pre-wrap">
                            {typedText}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlider;
