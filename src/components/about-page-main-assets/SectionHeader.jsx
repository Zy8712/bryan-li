function SectionHeader(props) {

    return (
        <>
            <div className="flex justify-center items-center text-center w-full h-24 custom-sm:h-32 sm:h-44 md:h-56 lg:h-72 bg-gradient-to-tr from-light-gray to-very-dark-blue rounded-lg sm:rounded-3xl mt-12">
                <h3 className="w-[90%] sm:w-[80%] h-[80%] border-2 flex justify-center items-center bg-white rounded-lg sm:rounded-3xl mix-blend-lighten border-white border-solid text-black text-4xl custom-sm:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase">
                    {props.children}
                </h3>
            </div>
        </>
    );
};

export default SectionHeader;