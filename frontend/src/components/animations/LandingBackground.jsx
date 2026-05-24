function LandingBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Main animated gradient */}
            <div className="noise-layer" />

            {/* Moving grid */}
            <div className="legal-grid" />

            {/* Radial circles */}
            <div className="legal-circles" />

            {/* Scanning light */}
            <div className="scan-line" />

            {/* Noise overlay */}
            <div className="noise-overlay" />
        </div>
    );
}

export default LandingBackground;