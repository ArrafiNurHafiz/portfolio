import { useCallback, useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    // Don't render particles on mobile for better performance
    if (isMobile) {
        return null;
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            aria-hidden="true"
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            },
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#38bdf8", // accent color
                    },
                    links: {
                        color: "#38bdf8",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1, // Slow speed for subtle effect
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
        />
    );
};

export default ParticlesBackground;
