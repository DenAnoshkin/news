import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router";

const UserButtons = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <>
            {isAuthenticated ? (
                <>
                    <Link to="/profile">Профиль</Link>
                    <button
                        onClick={() =>
                            logout({ returnTo: window.location.origin })
                        }
                    >
                        Выйти
                    </button>
                </>
            ) : (
                <>
                    <button onClick={() => loginWithRedirect()}>Войти</button>
                    <button
                        onClick={() =>
                            loginWithRedirect({
                                authorizationParams: {
                                    screen_hint: "signup",
                                },
                            })
                        }
                    >
                        Регистрация
                    </button>
                </>
            )}
        </>
    );
};

export default UserButtons;
