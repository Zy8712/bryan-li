function ProjectFilters({ showFeaturedProjects, showFemProjects, showPersonalProjects, showHTMLCSSProjects, showVanillaJSProjects, showReactProjects, showTailwindCSSProjects, showJSONProjects, showAPIProjects, toggleFeaturedProjects, toggleFemProjects, togglePersonalProjects, toggleHTMLCSSProjects, toggleVanillaJSProjects, toggleReactProjects, toggleTailwindCSSProjects, toggleJSONProjects, toggleAPIProjects }) {
    return (
        <>
            <div className="w-full flex flex-col items-center mb-10">
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={toggleFeaturedProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showFeaturedProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        Featured
                    </button>
                    <button onClick={toggleFemProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showFemProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        Frontend Mentor Projects
                    </button>
                    <button onClick={togglePersonalProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showPersonalProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        Personal Projects
                    </button>
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={toggleHTMLCSSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showHTMLCSSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        HTML & CSS/SASS/SCSS ONLY
                    </button>
                    <button onClick={toggleVanillaJSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showVanillaJSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        Vanilla JS
                    </button>
                    <button onClick={toggleReactProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showReactProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        React
                    </button>
                    <button onClick={toggleTailwindCSSProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showTailwindCSSProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        Tailwind CSS
                    </button>
                    <button onClick={toggleJSONProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showJSONProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        JSON
                    </button>
                    <button onClick={toggleAPIProjects}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${showAPIProjects ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        API
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectFilters;