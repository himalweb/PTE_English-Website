import Link from 'next/link'
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdAssignmentInd } from "react-icons/md";
function Header() {
    return (
        <>


            <header className='py-3'>

                <div className="container">
                    <div className='nav'>
                        <div className="col-lg-2">
                            <img width={160} src="https://www.pearsonpte.com/assets/images/Logo.svg" alt="" />
                        </div>



                        <div className="nav-middle">

                            <li><Link href="/">Home</Link></li>
                            <li> <Link href="/pte-test">PTE Test</Link></li>
                            <li> <Link href="/about-pte">About PTE</Link></li>
                            <li><Link href="/destinations">Destinations</Link></li>
                            <li> <Link href="/partners">Partners and Research</Link></li>



                        </div>


                        <div className="nav-right">
                            <span className='top-btnn'><FiSearch /></span>
                            <span className='top-btnn'><IoIosHelpCircleOutline /></span>
                            <h5>Help</h5>
                            <span className='top-btnn'><MdAssignmentInd /></span>
                            <h5>Sign in</h5>
                            <button className='book'>Book a Test</button>
                        </div>
                    </div>
                </div>





            </header>



        </>
    )
}

export default Header
