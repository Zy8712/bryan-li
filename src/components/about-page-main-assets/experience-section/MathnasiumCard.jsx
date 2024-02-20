import Mathnasium_Logo from '../../../assets/about-page-images/Mathnasium_Logo.jpg';

function MathnasiumCard() {

    return (
        <>
            <div className="w-[1312px] flex flex-col xl:flex-row justify-between items-center">

                <div className="lg:w-full xl:w-1/3 hidden lg:flex flex-row xl:flex-col justify-between xl:justify-center items-center px-4">
                    <div className="text-center flex flex-col items-center text-white my-4">
                        <img src={Mathnasium_Logo} className="h-44 xl:h-48 rounded-lg" />
                        <h4 className="text-2xl font-semibold">Mathnasium Location #1</h4>
                        <p>October 2022 - August 2023</p>
                    </div>
                    <div className="text-center flex flex-col items-center text-white my-4">
                        <img src={Mathnasium_Logo} className="h-44 xl:h-48 rounded-lg" />
                        <h4 className="text-2xl font-semibold">Mathnasium Location #2</h4>
                        <p>October 2022 -</p>
                    </div>
                    <div className="text-center flex flex-col items-center text-white my-4">
                        <img src={Mathnasium_Logo} className="h-44 xl:h-48 rounded-lg" />
                        <h4 className="text-2xl font-semibold">Mathnasium Location #3</h4>
                        <p>October 2022 - February 2024</p>
                    </div>
                </div>

                <div className="w-full xl:w-2/3 px-7 flex flex-col items-start xl:items-center text-white">
                    <h3 className="text-6xl font-semibold mt-7">Math Instructor</h3>
                    <p className="block lg:hidden text-xl font-semibold">Mathnasium Thornhill</p>
                    <p className="text-xl font-semibold">October 2022 - Present</p>

                    <h4 className="w-full text-left text-2xl font-semibold mt-4 mb-2">Overview</h4>
                    <ul className="list-disc ml-4">
                        <li className="mb-1">Actively participated in educational facilitation and provided student support</li>
                        <li className="mb-1">Sped up the rate of return on student results by 50%</li>
                        <li className="mb-1">Worked with over 100 students, each with their own distinct learning styles and a range of strengths and weaknesses</li>
                        <li className="mb-1">Over 600 hours of instructional experience</li>
                    </ul>

                    <h4 className="w-full text-left text-2xl font-semibold mt-4 mb-2">Specifics</h4>
                    <ul className="list-disc ml-4">
                        <li className="mb-1">Worked collaboratively with fellow instructors to deliver individualized instruction in a group setting, supporting students in their mathematical learning journey</li>
                        <li className="mb-1">Assessed students' progress and engagement during instructional sessions, utilizing analytical skills to identify areas of weakness and implement targeted interventions</li>
                        <li className="mb-1">Demonstrated exceptional multitasking abilities in a fast-paced environment, ensuring all students' needs were met and fostering a positive learning experience</li>
                        <li className="mb-1">Proficient in utilizing digital educational materials and processes to enhance students' learning outcomes</li>
                        <li className="mb-1">Maintained a safe and professional learning environment, communicating effectively with parents and students of various ages while creating a dynamic atmosphere for learning</li>
                        <li className="mb-1">Demonstrated organizational skills in effectively managing instructional materials, lesson plans, and student records, ensuring efficient and smooth operations</li>
                        <li className="mb-1">Proactively collaborated with team members to identify and implement innovative teaching strategies, contributing to the continuous improvement of instructional methods and student outcomes.</li>
                        <li className="mb-1">Played a key role in the center's opening and closure processes, ensuring a seamless transition for students and instructors, and contributing to the overall efficiency and professionalism of the learning environment</li>
                        <li className="mb-1">Utilized various technological resources to: track students' progress within their learning plans, verify accuracy of marking & student solutions, create session reports/logs detailing student behavior & performance, and conduct remote sessions where we were to digitally assess students' work</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MathnasiumCard;