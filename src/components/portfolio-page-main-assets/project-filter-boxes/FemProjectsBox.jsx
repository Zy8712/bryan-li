import { useState } from "react";

import FemLvlFilter from "../../frontend-mentor-filter-boxes/FemLvlFilter";

import FemFeatured from "../../frontend-mentor-filter-boxes/FemFeatured";
import FemNewbie from "../../frontend-mentor-filter-boxes/FemNewbie";
import FemJunior from "../../frontend-mentor-filter-boxes/FemJunior";
import FemIntermediate from "../../frontend-mentor-filter-boxes/FemIntermediate";
import FemAdvanced from "../../frontend-mentor-filter-boxes/FemAdvanced";
import FemGuru from "../../frontend-mentor-filter-boxes/FemGuru";


function FemProjectsBox() {
    const [showFeatured, setShowFeatured] = useState(true);
    const [showNewbie, setShowNewbie] = useState(false);
    const [showJunior, setShowJunior] = useState(false);
    const [showIntermediate, setShowIntermediate] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showGuru, setShowGuru] = useState(false);

    const toggleFeatured = () => {
        if (showFeatured == false){
            setShowFeatured(true);
            setShowNewbie(false);
            setShowJunior(false);
            setShowIntermediate(false);
            setShowAdvanced(false);
            setShowGuru(false);
        }
    }

    const toggleNewbie = () => {
        if (showNewbie == false){
            setShowFeatured(false);
            setShowNewbie(true);
            setShowJunior(false);
            setShowIntermediate(false);
            setShowAdvanced(false);
            setShowGuru(false);
        }
    }

    const toggleJunior = () => {
        if (showJunior == false){
            setShowFeatured(false);
            setShowNewbie(false);
            setShowJunior(true);
            setShowIntermediate(false);
            setShowAdvanced(false);
            setShowGuru(false);
        }
    }

    const toggleIntermediate = () => {
        if (showIntermediate == false){
            setShowFeatured(false);
            setShowNewbie(false);
            setShowJunior(false);
            setShowIntermediate(true);
            setShowAdvanced(false);
            setShowGuru(false);
        }
    }

    const toggleAdvanced = () => {
        if (showAdvanced == false){
            setShowFeatured(false);
            setShowNewbie(false);
            setShowJunior(false);
            setShowIntermediate(false);
            setShowAdvanced(true);
            setShowGuru(false);
        }
    }

    const toggleGuru = () => {
        if (showGuru == false){
            setShowFeatured(false);
            setShowNewbie(false);
            setShowJunior(false);
            setShowIntermediate(false);
            setShowAdvanced(false);
            setShowGuru(true);
        }
    }

    return (
        <>
            <FemLvlFilter 
                showFeatured={showFeatured}
                showNewbie={showNewbie}
                showJunior={showJunior}
                showIntermediate={showIntermediate}
                showAdvanced={showAdvanced}
                showGuru={showGuru}
                toggleFeatured={toggleFeatured}
                toggleNewbie={toggleNewbie}
                toggleJunior={toggleJunior}
                toggleIntermediate={toggleIntermediate}
                toggleAdvanced={toggleAdvanced}
                toggleGuru={toggleGuru}
            />

            <div className="w-full h-full flex flex-wrap justify-around">

                {showFeatured ? (
                    <FemFeatured />
                ) : ''
                }

                {showNewbie ? (
                    <FemNewbie />
                ) : ''
                }

                {showJunior ? (
                    <FemJunior />
                ) : ''
                }

                {showIntermediate ? (
                    <FemIntermediate />
                ) : ''
                }

                {showAdvanced ? (
                    <FemAdvanced />
                ) : ''
                }

                {showGuru ? (
                    <FemGuru />
                ) : ''
                }


            </div>
        </>
    );
};

export default FemProjectsBox;