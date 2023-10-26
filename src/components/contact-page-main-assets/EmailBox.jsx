
function EmailBox() {
    return (
        <>
            <div className="w-[650px] h-[500px] border-2 border-solid border-white rounded-2xl">
                <div className="w-auto h-auto m-3">
                    <h1 className="text-white text-center uppercase text-3xl">Interested in working together?</h1>
                    <h2 className="text-white text-center uppercase text-3xl">Let's talk</h2>
                    <div className="flex justify-between mt-5 mb-2">
                        <div className="w-[300px]">
                            <span className="text-white">Your Name:</span>
                            <input className="w-[300px] rounded-sm p-2" type="text" placeholder="Last Name, First Name" />
                        </div>
                        <div className="w-[300px]">
                            <span className="text-white">Your Email:</span>
                            <input className="w-[300px] rounded-sm p-2" type="email" placeholder="email@company.com" />]
                        </div>
                    </div>
                    <div className="w-full">
                        <input className="w-full rounded-sm p-2" type="text" placeholder="Enter a subject line" />
                    </div>
                    <div className="w-full mt-8">
                        <textarea className="w-full rounded-sm p-2 resize-none" rows={8} placeholder="Write your message here">
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    );
};


export default EmailBox;