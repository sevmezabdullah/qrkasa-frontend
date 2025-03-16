import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Giriş başarılı olduğunda yönlendirilecek sayfa
    const from = location.state?.from?.pathname || '/dashboard';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

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
                setLoading(false);
            }
        } catch (err) {
            setError('Giriş yapılırken bir hata oluştu.');
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-base-content">QR Kasa Giriş</h1>
                    <p className="mt-2 text-base-content/70">Kullanıcı bilgilerinizi girerek sisteme giriş yapın</p>
                </div>

                {error && (
                    <div className="alert alert-error mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Kullanıcı Adı</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Kullanıcı adınızı girin"
                            className="input input-bordered w-full"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Şifre</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Şifrenizi girin"
                            className="input input-bordered w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label className="label">
                            <span className="label-text-alt">Demo: kasa, garson, mutfak, patron (şifre: 123456)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                    </button>
                </form>

                <div className="divider">VEYA</div>

                <div className="form-control">
                    <Link to="/menu" className="btn btn-outline btn-secondary w-full">
                        Menüyü Görüntüle
                    </Link>
                    <div className="text-center mt-2">
                        <span className="badge badge-ghost">Giriş gerektirmez</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 flex items-center">
                <Link to="/" className="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    );
};

export default Login; 