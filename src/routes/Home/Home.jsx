import LoginForm from '../../components/Login/LoginForm'
import RegisterForm from '../../components/Register/RegisterForm';
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'> 
            <LoginForm />
            <RegisterForm />
        </div>
    )
}

export default Home;
