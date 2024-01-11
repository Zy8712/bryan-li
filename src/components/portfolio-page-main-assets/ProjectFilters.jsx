function ProjectFilters({ activeFilter, toggleFilter }) {
    return (
        <>
            <div className="w-full flex flex-col items-center mb-10">
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={() => toggleFilter(1)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 1 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-star mr-1"></i>
                        Featured
                    </button>
                    <button onClick={() => toggleFilter(2)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 2 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-laptop-code mr-1"></i>
                        Frontend Mentor Projects
                    </button>
                    <button onClick={() => toggleFilter(3)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 3 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-user mr-1"></i>
                        Personal Projects
                    </button>
                    <button onClick={() => toggleFilter(4)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 4 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-meteor mr-1"></i>
                        Upcoming Projects
                    </button>
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    <button onClick={() => toggleFilter(5)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 5 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-file-code mr-1"></i>
                        HTML, CSS, SASS/SCSS ONLY
                    </button>
                    <button onClick={() => toggleFilter(6)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 6 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="lab la-js-square mr-1"></i>
                        Vanilla JS
                    </button>
                    <button onClick={() => toggleFilter(7)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 7 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="lab la-react mr-1"></i>
                        React
                    </button>
                    <button onClick={() => toggleFilter(8)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 8 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-wind mr-1"></i>
                        Tailwind CSS
                    </button>
                    <button onClick={() => toggleFilter(9)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 9 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-file-alt mr-1"></i>
                        JSON
                    </button>
                    <button onClick={() => toggleFilter(10)}
                        className={`px-3 py-1 mx-1 text-white border-white border-2 border-solid rounded-md ${activeFilter == 10 ? 'bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2' : ''}`}>
                        <i className="las la-cog mr-1"></i>
                        API
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProjectFilters;