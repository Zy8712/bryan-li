
function UltimateFeaturedProjectCard() {

    return (
        <>
            <div className="max-w-[1000px] w-5/6 h-96 flex mb-5 border-2 border-white border-solid">
                <div className="w-1/2 h-full border-blue-500 border-2 border-solid">
                    <div className="w-full h-4/5 border-2 border-white border-solid">
                        {/** preview image currently selected */}
                    </div>
                    <div className="w-full h-1/5 border-pink-500 border-2 border-solid">
                        {/** 5 preview images - selectable corusel */}
                    </div>
                </div>
                <div className="w-1/2 h-full border-purple-500 border-2 border-solid">
                    <p>Title of Project</p>
                    <p>Project Source:</p>
                    <p>Project Status:</p>
                    <p>Icons</p>
                    <p>Paragraph describing site</p>
                    <p>Link to Github & deployed site</p>
                </div>
            </div>
        </>
    );
};

export default UltimateFeaturedProjectCard;