
import { useAuth } from './contexts/AuthContext'

export default function Profile() {
    const { user, login, logout } = useAuth();
    return (
        <div>
            {
                user ? (
                    <>
                        <h1>Welcome,{user.fullname}</h1>
                        <button onClick={() => { logout(); alert('you logout successfully') }}>Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => {
                            login("Kuldeep");
                            alert('Login success ')
                        }}>Try to login</button>
                    </>
                )
            }


        </div>
    )
}
