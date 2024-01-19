
function EmailBox() {
    return (
        <>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="f12fdccc-27f3-43fa-9bea-3f7fa95502e2" />
                <input type="checkbox" name="botcheck" class="hidden" />
                <div className="w-[650px] h-[510px] border-2 border-solid border-white rounded-2xl">
                    <div className="w-auto h-auto m-3">
                        <h1 className="text-white text-center uppercase text-3xl">Interested in working together?</h1>
                        <h2 className="text-white text-center uppercase text-3xl">Let's talk</h2>

                        <div className="flex justify-between mt-4 mb-2">
                            <div className="w-[300px]">
                                <span className="text-white">Your Name:</span>
                                <input className="w-[300px] rounded-sm p-2" type="text" name="name" placeholder="Last Name, First Name" required />
                            </div>
                            <div className="w-[300px]">
                                <span className="text-white">Your Email:</span>
                                <input className="w-[300px] rounded-sm p-2" type="email" name="email" placeholder="email@company.com" required />
                            </div>
                        </div>

                        <div className="w-full mt-5">
                            <input className="w-full rounded-sm p-2" type="text" name="subject" placeholder="Enter a subject line" required />
                        </div>

                        <div className="w-full mt-2">
                            <textarea className="w-full rounded-sm p-2 resize-none" rows={8} name="message" placeholder="Write your message here" required>
                            </textarea>
                            <div class="h-captcha" data-captcha="true"></div>
                        </div>

                        <div className="w-full flex justify-center mt-1">
                            <button className="w-[300px] h-11 flex justify-center items-center text-white text-lg uppercase font-semibold tracking-widest rounded-xl border-white border-2 border-solid hover:bg-gradient-to-tr from-gradient-blue to-gradient-purple"
                                type="submit">
                                <i className="las la-envelope text-3xl mr-1"></i>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

            </form>
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </>
    );
};


export default EmailBox;