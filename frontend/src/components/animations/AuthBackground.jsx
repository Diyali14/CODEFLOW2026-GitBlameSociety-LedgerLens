function AuthBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">

            {/* Soft gradient glow */}
            <div className="auth-gradient" />

            {/* Tiny moving grid */}
            <div className="auth-grid" />

            {/* Subtle circles */}
            <div className="auth-circles" />

            {/* Soft moving light */}
            <div className="auth-scan" />

            {/* Texture */}
            <div className="auth-noise" />

        </div>
    );
}

export default AuthBackground;