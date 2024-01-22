import React, { useState } from 'react';

import FeaturedCertificatesBox from './FeaturedCertificatesBox';
import CertificationBoxButtonSwitcher from './CertificationBoxButtonSwitcher';
import AllCertificatesBox from './AllCertificatesBox';
import AllCredentialsBox from './AllCredentialsBox';
import AllBadgesBox from './AllBadgesBox';

function CertificationBox() {
    const [showFeatured, setShowFeatured] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const [showAllCertificates, setShowAllCertificates] = useState(false);
    const [showAllCredentials, setShowAllCredentials] = useState(false);
    const [showAllBadges, setShowAllBadges] = useState(false);

    const toggleFeatured = () => {
        if (showFeatured == false) {
            setShowFeatured(true);
            setShowAll(false);
            setShowAllCertificates(false);
            setShowAllCredentials(false);
            setShowAllBadges(false);
        }
    };

    const toggleAll = () => {
        if (showAll == false) {
            setShowFeatured(false);
            setShowAll(true);
            setShowAllCertificates(false);
            setShowAllCredentials(false);
            setShowAllBadges(false);
        }
    };

    const toggleCertificates = () => {
        if (showAllCertificates == false) {
            setShowFeatured(false);
            setShowAll(false);
            setShowAllCertificates(true);
            setShowAllCredentials(false);
            setShowAllBadges(false);
        }
    };

    const toggleCredentials = () => {
        if (showAllCredentials == false) {
            setShowFeatured(false);
            setShowAll(false);
            setShowAllCertificates(false);
            setShowAllCredentials(true);
            setShowAllBadges(false);
        }
    };

    const toggleBadges = () => {
        if (showAllBadges == false) {
            setShowFeatured(false);
            setShowAll(false);
            setShowAllCertificates(false);
            setShowAllCredentials(false);
            setShowAllBadges(true);
        }
    };

    return (
        <>
            <div className="w-[1000px] h-auto flex flex-col rounded-xl mb-8 border-white border-2 border-solid px-5">
                <CertificationBoxButtonSwitcher
                    showFeatured={showFeatured}
                    showAll={showAll}
                    showAllCertificates={showAllCertificates}
                    showAllCredentials={showAllCredentials}
                    showAllBadges={showAllBadges}
                    toggleFeatured={toggleFeatured}
                    toggleAll={toggleAll}
                    toggleCertificates={toggleCertificates}
                    toggleCredentials={toggleCredentials}
                    toggleBadges={toggleBadges}
                />

                {showFeatured ? (
                    <FeaturedCertificatesBox />
                ) : ''
                }


                {showAllCertificates ? (
                    <AllCertificatesBox />
                ) : ''
                }

                {showAllCredentials ? (
                    <AllCredentialsBox />
                ) : ''
                }

                {showAllBadges ? (
                    <AllBadgesBox />
                ) : ''
                }

            </div>
        </>
    );
};

export default CertificationBox;