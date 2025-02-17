import Slider from "react-slick";
import { useState, useMemo } from "react";
import data from "../data";
import useTypedText from "../hooks/UseTypedText";
import TV from '../images/redesign/tv.gif';
import StaticGlitch from '../images/redesign/static-glitch.gif';


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
                    <div className="w-full relative self-start border border-green-400 p-2 md:w-2/4 md:order-1 rounded-xl overflow-hidden aspect-[4/3]">
                        {currentProject.images ? (
                            <>
                                <picture className="block w-full h-full">
                                    <source src={currentProject.images[0]} />
                                    <img className="h-full w-full object-cover rounded-lg overflow-hidden" src={currentProject.images[0]} alt={currentProject.title} />
                                </picture>
                            </>
                        ) : (
                            <>
                                <picture className="block w-full h-full">
                                    <img className="h-full w-full object-cover rounded-lg overflow-hidden" src={StaticGlitch} alt={currentProject.title} />
                                </picture>
                            </>
                        )
                        }
                        <img
                            className="border-black border-[10px] absolute inset-0 w-full h-full object-cover opacity-[0.3]"
                            src={TV} alt="tv"
                        />
                    </div>
                    <div className="mb-6 md:w-2/4">
                        <div className="flex gap-2 mb-4">
                            {currentProject.link && (
                                <a
                                    className="border-green-400 self-start inline-block transition-all bg-green-400 text-green-400 box-shadow px-4 py-3 hover:bg-green-300 hover:text-white-300"
                                    href={currentProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-black">Link</span>
                                </a>
                            )}
                            {currentProject.gitHub && (
                                <a
                                    className="border-green-400 self-start inline-block transition-all bg-green-400 text-green-400 box-shadow px-4 py-3 hover:bg-green-300 hover:text-white-300"
                                    href={currentProject.gitHub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-black">Link</span>
                                </a>
                            )}                            
                            <div className="self-start flex flex-wrap mb-6 gap-2">
                                {currentProject.techStack?.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="text-xs bg-black font-medium px-2.5 py-0.5 bg-green-400 box-shadow"
                                        aria-label={`Technology: ${tech}`}
                                    >
                                        <span className="text-black no-shadow">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <pre className="text-xs mb-6 font-light lg:mb-8 text-white whitespace-pre-wrap mb-4">
                            {typedText}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSlider;
