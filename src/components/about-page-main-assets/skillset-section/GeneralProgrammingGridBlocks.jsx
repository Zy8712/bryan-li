import Java_Icon from '../../../assets/language-icons/java-svgrepo-com.svg';
import Python_Icon from '../../../assets/language-icons/python-svgrepo-com.svg';
import CPlusPlus_Icon from '../../../assets/language-icons/c-plus-plus-svgrepo-com.svg';

import Fortran_Icon from '../../../assets/language-icons/fortran-svgrepo-com.svg';
import Assembly_Icon from '../../../assets/language-icons/assembly-svgrepo-com.svg';
import Verilog_Icon from '../../../assets/language-icons/verilog-svgrepo-com.svg';

import GridRendering from "./GridRendering";

function GeneralProgrammingGridBlocks() {

    const techGrids = [
        {
            techIcon1: Java_Icon, techIcon2: Python_Icon, techIcon3: CPlusPlus_Icon,
            gridTitle: "Programming Power Trio",
            gridShortDesciption: "Versatile programming languages. Java's portability suits enterprise solutions, Python's versatility spans web development to data science, and C++ excels in performance-critical applications.",
            extraDetails: "test",
            techLabel1: "Java", techLabel2: "Python", techLabel3: "C++",
            techExp1: "6+", techExp2: "3+", techExp3: "1+",
            techYears1: true, techYears2: true, techYears3: true,
        },
        {
            techIcon1: Fortran_Icon, techIcon2: Assembly_Icon, techIcon3: Verilog_Icon,
            gridTitle: "Versatile Coding Paradigms",
            gridShortDesciption: "Diverse set of programming languages. Assembly for low-level system programming, Verilog for digital circuit design, and Fortran for high-performance scientific and engineering applications.",
            extraDetails: "test",
            techLabel1: "Fortran", techLabel2: "Assembly", techLabel3: "Verilog",
            techExp1: "1+", techExp2: "1+", techExp3: "1",
            techYears1: true, techYears2: true, techYears3: false,
        },
    ];

    return (
        <>
            <GridRendering techGrids={techGrids} />
        </>
    );
}

export default GeneralProgrammingGridBlocks;