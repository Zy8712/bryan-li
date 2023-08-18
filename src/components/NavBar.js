import '../index.css';
import Profile from '../icons/profile_icon.jpg';
import Home from '../icons/house-svgrepo-com.svg';
import Info from '../icons/info-svgrepo-com.svg';
import Education from '../icons/university-svgrepo-com.svg';
import Portfolio from '../icons/portfolio-svgrepo-com.svg';
import Contact from '../icons/contact-details-svgrepo-com.svg';
import Settings from '../icons/gear-svgrepo-com.svg';


function NavBar() {
    
    return (
        <>
            <div className='w-20 h-screen fixed flex flex-col justify-between items-start z-50 border-red-600 border-4 border-solid'>
                
                <div title='My Links'>
                    <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                        <img src={Profile} className='w-16 h-16 rounded-full' />
                    </button>
                </div>

                <div className='flex flex-col justify-between'>

                    <div className='mb-2'  title='Home'>
                        <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                            <img src={Home} className='w-12' />
                        </button>
                    </div>

                    <div className='mb-2'  title='About Me'> 
                        <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                            <img src={Info} className='w-10' />
                        </button>
                    </div>

                    <div className='mb-2'  title='Education & Experience'>
                        <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                            <img src={Education} className='w-12' />
                        </button>
                    </div>

                    <div className='mb-2'  title='My Portfolio'>
                        <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                            <img src={Portfolio} className='w-12' />
                        </button>
                    </div>

                    <div className='mb-2'  title='Contact Info'>
                        <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid transition-all duration-300 hover:w-40'>
                            <img src={Contact} className='w-12' />
                        </button>
                    </div>
                </div>

                <div title='Site Settings'>
                    <button className='w-20 h-20 rounded-full flex flex-col justify-center items-center border-green-600 border-2 border-solid'>
                        <img src={Settings}  className='w-16' />
                    </button>
                </div>
            </div>

        </>
    );
}

export default NavBar;