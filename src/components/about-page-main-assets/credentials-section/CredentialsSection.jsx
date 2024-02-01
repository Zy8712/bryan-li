import { useState } from "react";
import SectionHeader from "../SectionHeader";

import AllFeaturedItemsBox from "./AllFeaturedItemsBox";
import AllCertificatesBox from "./AllCertificatesBox";
import AllCredentialsBox from "./AllCredentialsBox";
import AllBadgesBox from "./AllBadgesBox";

function CredentialSection() {

    const [showCredentialItems, setShowCredentialItems] = useState(1);

    const setCredential = (num) => {    
        setShowCredentialItems(num);
    }

    const allCredentialFilters = [AllFeaturedItemsBox, AllCertificatesBox, AllCredentialsBox, AllBadgesBox];
    
    const SelectedCredentialGroup = allCredentialFilters[showCredentialItems - 1];

    return (
        <>
            <SectionHeader>
                <i id="credentials" className="las la-certificate mr-2 sm:mr-4"></i>
                Certs
            </SectionHeader>
            <div className="w-full flex flex-wrap justify-center items-center">
                <button
                    onClick={() => setCredential(1)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showCredentialItems == 1 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-star mr-1"></i>
                    Featured
                </button>
                <button
                    onClick={() => setCredential(2)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showCredentialItems == 2 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-certificate mr-1"></i>
                    Certificates
                </button>
                <button
                    onClick={() => setCredential(3)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showCredentialItems == 3 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-id-badge mr-1"></i>
                    Credentials
                </button>
                <button
                    onClick={() => setCredential(4)}
                    className={`flex items-center py-1 px-3 mx-1 rounded-md ${showCredentialItems == 4 ? 'bg-gradient-blue text-black' : 'text-white'} border-2 border-solid border-white`}>
                    <i className="las la-ribbon mr-1"></i>
                    Pins/Badges
                </button>
            </div>

            <SelectedCredentialGroup />
        </>
    );
};

export default CredentialSection;