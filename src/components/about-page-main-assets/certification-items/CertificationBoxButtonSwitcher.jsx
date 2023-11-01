

function CertificationBoxButtonSwitcher({ showFeatured, showAll, showAllCertificates, showAllCredentials, showAllBadges, toggleFeatured, toggleAll, toggleCertificates, toggleCredentials, toggleBadges }) {
    return (
        <>
            <div className="w-full h-auto flex justify-center mt-4 mb-8">
                <div className="w-[650px] flex justify-between flex-wrap">
                    <button
                        onClick={toggleFeatured}
                        className={`flex items-center py-1 px-3 rounded-md ${showFeatured ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-star mr-1"></i>
                        Featured
                    </button>
                    <button
                        onClick={toggleAll}
                        className={`flex items-center py-1 px-3 rounded-md ${showAll ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-expand mr-1"></i>
                        All
                    </button>
                    <button
                        onClick={toggleCertificates}
                        className={`flex items-center py-1 px-3 rounded-md ${showAllCertificates ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-certificate mr-1"></i>
                        Certificates
                    </button>
                    <button
                        onClick={toggleCredentials}
                        className={`flex items-center py-1 px-3 rounded-md ${showAllCredentials ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-id-badge mr-1"></i>
                        Credentials
                    </button>
                    <button
                        onClick={toggleBadges}
                        className={`py-1 px-4 rounded-md ${showAllBadges ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                        <i className="las la-ribbon mr-1"></i>
                        Pins/Badges
                    </button>
                </div>
            </div>
        </>
    );
};

export default CertificationBoxButtonSwitcher;