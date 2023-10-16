function ProjectFilters() {
    return (
        <>
            <div className="w-full flex flex-col items-center mb-5">
                <div className="my-1 flex justify-center flex-wrap">
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">All</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Featured</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Frontend Mentor Projects</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Personal Projects</button>
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">All</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">HTML5</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">CSS3</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Javascript</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">SASS/SCSS</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">React</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Tailwind CSS</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">JSON</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">API</button>
                </div>
                <div className="my-1 flex justify-center flex-wrap">
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Python</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Java</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Fortran</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Assembly</button>
                    <button className="px-3 py-1 mx-1 bg-translucent-white rounded-md hover:bg-gradient-to-t from-filter-gradient-1 to-filter-gradient-2">Verilog</button>
                </div>
            </div>
        </>
    );
};

export default ProjectFilters;