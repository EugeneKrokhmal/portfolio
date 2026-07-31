import { useState } from "react";
import data from "../data";
import { useMemo } from "react";


const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const assosiatedProjects = useMemo(() => data.projects.filter(proj => proj.company === data.experiences[activeIndex].company), [data, activeIndex])

    return (
        <div className="w-full h-full py-24 experience">
            <h2 className="text-shadow max-w-2xl mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">Experience</h2>
            <div className="text-green-400 pt-24">
                <div className="flex gap-4">
                    <div className="w-2/3 mb-6 md:w-1/4">
                        <ul>
                            {data.experiences.map((exp, index) => (
                                <li key={index} className={`hover:text-yellow-300 mb-2 ${index === activeIndex ? 'text-yellow-400' : ''}`} onClick={() => setActiveIndex(index)}>
                                    {exp.company}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="text-4xl font-bold mb-4">{data.experiences[activeIndex].title}</h2>
                        <pre className="text-xs mb-4 font-light text-white whitespace-pre-wrap">
                            {data.experiences[activeIndex].company}
                        </pre>
                        <pre className="text-xs mb-4 font-light text-white whitespace-pre-wrap">
                            {data.experiences[activeIndex].location}
                        </pre>
                        <pre className="text-xs mb-4 font-light text-white whitespace-pre-wrap">
                            {data.experiences[activeIndex].date}
                        </pre>
                        {(data.experiences[activeIndex].responsibilities && data.experiences[activeIndex].responsibilities.length > 0) && (
                            <ul className="text-xs mb-4 font-light text-white whitespace-pre-wrap max-w-screen-xs">
                                {data.experiences[activeIndex].responsibilities.map(el => (
                                    <li className="text-xs mb-4 font-light text-white whitespace-pre-wrap">
                                        {el}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {assosiatedProjects.length > 0 && (
                            <ul className="text-xs mb-4">
                                <>
                                    <h3 className="text-yellow-400 mb-2 text-lg font-bold">Projects:</h3>
                                    {assosiatedProjects.map((el) => (
                                        <li key={el.title} className="mb-2 text-green-400">
                                            {el.link && el.link !== el.gitHub ? (
                                                <a
                                                    href={el.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-yellow-300 underline"
                                                >
                                                    {el.title}
                                                </a>
                                            ) : (
                                                el.title
                                            )}
                                            {el.gitHub && (
                                                <>
                                                    {' · '}
                                                    <a
                                                        href={el.gitHub}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-yellow-300 underline"
                                                    >
                                                        Code
                                                    </a>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </>
                            </ul>
                        )}
                        {data.experiences[activeIndex]?.website && (
                            <a className="inline-block mt-8 transition-all bg-green-400 text-green-400 box-shadow px-4 py-2 hover:bg-green-300 hover:text-white-300" href={data.experiences[activeIndex]?.website} target="_blank" rel="noopener noreferrer">
                                <span className="text-black">Website</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="text-green-400 pt-12">
                <h2 className="text-shadow max-w-2xl mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">Education</h2>
                {data.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-semibold">{edu.institution}</h3>
                        <p className="text-sm text-white">{edu.degree}</p>
                        <p className="text-sm">{edu.date} - {edu.location}</p>
                    </div>
                ))}
            </div>

            <div className="text-green-400 pt-12">
                <h2 className="text-shadow max-w-2xl mb-6 mt-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-green-400">Languages</h2>
                <ul>
                    {data.languages.map((lang, index) => (
                        <li key={index} className="text-sm mb-1">
                            <pre className="text-xs mb-4 font-light text-white whitespace-pre-wrap">
                                {lang.name}: {lang.level}
                            </pre>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Experience;
