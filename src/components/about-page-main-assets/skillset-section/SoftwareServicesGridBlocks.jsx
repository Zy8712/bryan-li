import VSCode_Icon from '../../../assets/other-icons/vscode-svgrepo-com.svg';
import Eclipse_Icon from '../../../assets/other-icons/eclipse-icon-svgrepo-com.svg';
import Atom_Icon from '../../../assets/other-icons/atom-svgrepo-com.svg';

import GridRendering from './GridRendering';

function SoftwareServicesGridBlocks() {

    const techGrids = [
        {
            techIcon1: VSCode_Icon, techIcon2: Eclipse_Icon, techIcon3: Atom_Icon,
            gridTitle: "IDE Trinity",
            gridShortDesciption: "Popular IDEs. VSCode is a lightweight and versatile code editor, Eclipse is a robust and extensible IDE with a rich plugin ecosystem, and Atom is a customizable and hackable text editor.",
            extraDetails: "test",
            techLabel1: "VSCode", techLabel2: "Eclipse", techLabel3: "Atom",
            techExp1: "3+", techExp2: "4+", techExp3: "4+",
            techYears1: true, techYears2: true, techYears3: true,
        },
    ];

    return (
        <>
            <GridRendering techGrids={techGrids} />
        </>
    );
}

export default SoftwareServicesGridBlocks;