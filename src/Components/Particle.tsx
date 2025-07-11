import React from "react";
import Particles from "react-tsparticles";

/**
 * Component that renders an animated particle background effect.
 * 
 * Creates a dynamic particle system using react-tsparticles
 * that serves as a visual background element. Particles are configured
 * to create a subtle, non-intrusive animation that enhances the visual
 * appeal of the portfolio without interfering with content readability.
 * 
 * @returns {JSX.Element} Animated particle background system
 */
function Particle() {
    return (
        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 2,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;
