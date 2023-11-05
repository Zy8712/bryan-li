function ProjectFilters({ showFeaturedProjects, showFemProjects, showPersonalProjects, showHTMLCSSProjects, showVanillaJSProjects, showReactProjects, showTailwindCSSProjects, showJSONProjects, showAPIProjects, showUpcomingProjects, toggleFeaturedProjects, toggleFemProjects, togglePersonalProjects, toggleHTMLCSSProjects, toggleVanillaJSProjects, toggleReactProjects, toggleTailwindCSSProjects, toggleJSONProjects, toggleAPIProjects, toggleUpcomingProjects }) {
    return (
        <>
            <div className="w-full flex flex-col items-center mb-10">
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={toggleFeaturedProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showFeaturedProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-star mr-1"></i>
                        Featured
                    </button>
                    <button onClick={toggleFemProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showFemProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-laptop-code mr-1"></i>
                        Frontend Mentor Projects
                    </button>
                    <button onClick={togglePersonalProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showPersonalProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-user mr-1"></i>
                        Personal Projects
                    </button>
                    <button onClick={toggleUpcomingProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showUpcomingProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-meteor mr-1"></i>
                        Upcoming Projects
                    </button>
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={toggleHTMLCSSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showHTMLCSSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-file-code mr-1"></i>
                        HTML, CSS, SASS/SCSS ONLY
                    </button>
                    <button onClick={toggleVanillaJSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showVanillaJSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="lab la-js-square mr-1"></i>
                        Vanilla JS
                    </button>
                    <button onClick={toggleReactProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showReactProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="lab la-react mr-1"></i>
                        React
                    </button>
                    <button onClick={toggleTailwindCSSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showTailwindCSSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-wind mr-1"></i>
                        Tailwind CSS
                    </button>
                    <button onClick={toggleJSONProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showJSONProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-file-alt mr-1"></i>
                        JSON
                    </button>
                    <button onClick={toggleAPIProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showAPIProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-cog mr-1"></i>
                        API
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectFilters;