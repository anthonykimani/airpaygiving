import { Link } from "react-router-dom";
import logo from "../assets/svg/airpaylogo.svg";

const Dashboard = () => {
    return ( 
        <section className="flex w-screen justify-center">
            <header>
                <img src={logo} alt="airpaylogo" />
                <ul>
                    <Link to="/dashboard"><li>Dashboard</li></Link>
                    <Link to="/groups"><li>Church Groups</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/transactions"><li>Transcations</li></Link>
                    <Link to="/settings"><li>Settings</li></Link>
                    <Link to="/logout"><li>Logout</li></Link>
                </ul>
            </header>
            <main>
                <nav>
                <i className='bx bxs-bell'></i>
                <img src="" alt="" />
                <h3>Micheal Krapf</h3>
                </nav>
                <article>
                    <span>
                        <h3>Fill in the details below</h3>
                        <form>
                            <input type="text" placeholder="full name" />
                        </form>
                    </span>
                </article>
            </main>
        </section>
     );
}
 
export default Dashboard;