import { useState } from "react";

import FilterFemProjectLvl from "../../frontend-mentor-filter-boxes/FilterFemProjectLvl";

import FemFeatured from "../../frontend-mentor-filter-boxes/FemFeatured";
import FemNewbie from "../../frontend-mentor-filter-boxes/FemNewbie";
import FemJunior from "../../frontend-mentor-filter-boxes/FemJunior";
import FemIntermediate from "../../frontend-mentor-filter-boxes/FemIntermediate";
import FemAdvanced from "../../frontend-mentor-filter-boxes/FemAdvanced";
import FemGuru from "../../frontend-mentor-filter-boxes/FemGuru";

function FemProjectsBox() {

    const femProjectDifficulty = [FemFeatured, FemNewbie, FemJunior, FemIntermediate, FemAdvanced, FemGuru];

    const [activeFEMFilter, setActiveFEMFilter] = useState(1);

    const toggleFEMFilter = (num) => {
        if (num != activeFEMFilter){
            setActiveFEMFilter(num);
        }
    }

    const SelectedFemDifficulty = femProjectDifficulty[activeFEMFilter-1];

    return (
        <>
            <FilterFemProjectLvl 
                activeFEMFilter={activeFEMFilter}
                toggleFEMFilter={toggleFEMFilter}
            />

            <div className="w-full h-full flex flex-wrap justify-around">

                <SelectedFemDifficulty />

            </div>
        </>
    );
};

export default FemProjectsBox;