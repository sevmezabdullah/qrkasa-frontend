import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Giriş başarılı olduğunda yönlendirilecek sayfa
    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const user = await login(username, password);
            if (user) {
                // Kullanıcı rolüne göre yönlendirme
                let redirectPath = '/dashboard';

                switch (user.role) {
                    case 'kasa':
                        redirectPath = '/kasa';
                        break;
                    case 'garson':
                        redirectPath = '/garson';
                        break;
                    case 'mutfak':
                        redirectPath = '/mutfak';
                        break;
                    case 'patron':
                        redirectPath = '/patron';
                        break;
                    default:
                        redirectPath = '/dashboard';
                }

                navigate(redirectPath, { replace: true });
            } else {
                setError('Kullanıcı adı veya şifre hatalı!');
            }
        } catch (err) {
            setError('Giriş yapılırken bir hata oluştu.');
            console.error(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>QR Kasa Giriş</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Kullanıcı Adı</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Giriş Yap
                    </button>
                </form>
                <div className="public-link">
                    <p>
                        <a href="/menu">Menüyü Görüntüle</a> (Giriş gerektirmez)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login; 