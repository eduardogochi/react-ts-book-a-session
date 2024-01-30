//import { NavLink } from 'react-router-dom'
import Button from '../UI/Button'

export default function MainHeader() {
    return (
        <>
            <header id='main-header'>
                <h1>ReactMentoring</h1>
                <nav>
                    <ul>
                        {/* <li>
                            <NavLink to='/'>Our Mission</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sessions'>Browse Sessions</NavLink>
                        </li> */}
                        <li>
                            <a>Our Mission</a>
                        </li>
                        <li>
                            <a>Browse Sessions</a>
                        </li>
                        <li>
                            <Button>Upcoming Sessions</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}