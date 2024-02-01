
function GridRendering({techGrids}) {

    const renderGrids = () => {

        return techGrids.map((grid, index) => (
            <>
                <div className="min-h-[400px] w-[420px] flex flex-col justify-between rounded-3xl radial-gradient relative">

                    <div className="w-full mt-12 flex flex-col items-center">

                        <div className="w-full flex justify-center items-center">
                            <img src={grid.techIcon1} className="w-14 mx-3" />
                            <img src={grid.techIcon2} className="w-14 mx-3" />
                            <img src={grid.techIcon3} className="w-14 mx-3" />
                        </div>
                        <h3 className="w-full text-center text-white text-2xl font-semibold mt-6">
                            {grid.gridTitle}
                        </h3>
                        <p className="text-white text-base mx-4 mt-4 text-center">
                            {grid.gridShortDesciption}
                        </p>

                        <details className="mt-3 mb-1 text-center">
                            <summary className="text-white">Extra Details</summary>
                            <p>{grid.extraDetails}</p>
                        </details>

                    </div>

                    <div className="w-full h-20 flex">
                        <div className="w-1/3 h-full flex flex-col items-center">
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel1}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears1 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp1}</span> year
                                <span className={`${grid.techYears1 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                        <div className="w-1/3 h-full flex flex-col items-center border-x-2 border-white border-solid">
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel2}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears2 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp2}</span> year
                                <span className={`${grid.techYears2 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                        <div className='w-1/3 h-full flex flex-col items-center'>
                            <h4 className="text-lg text-white font-semibold">{grid.techLabel3}</h4>
                            <p className="text-md text-white font-semibold mt-1">
                                <span className={`text-3xl ${grid.techYears3 ? 'hidden' : 'inline'}`}>&lt;&nbsp;</span>
                                <span className="text-3xl">{grid.techExp3}</span> year
                                <span className={`${grid.techYears3 ? 'inline' : 'hidden'}`}>s</span>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        ));
    }

    return (
        <>
            {renderGrids()}
        </>
    );
}

export default GridRendering;