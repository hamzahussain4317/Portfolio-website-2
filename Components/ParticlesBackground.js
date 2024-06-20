'use client'
import React from 'react';
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);

        await loadSlim(main);
    };

    const particlesLoaded = async (container) => {
        await console.log(container);
    };

    return (
        <div className="h-[22em] w-[50em]  absolute top-0 left-0 -z-10">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#080808"
                        }
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse"
                            },
                            resize: true
                        },
                        modes: {
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#718096"
                        },
                        links: {
                            color: "#00ffee",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            random: true,
                            value: 5
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
};

export default ParticlesBackground;