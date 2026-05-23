function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950">

            <div className="bg-slate-900 p-10 rounded-xl w-100">

                <h2 className="text-3xl font-bold mb-6 text-center">
                    Login
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 mb-4 rounded bg-slate-800"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 rounded bg-slate-800"
                />

                <button className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded">
                    Login
                </button>

            </div>

        </div>
    );
}

export default LoginPage;