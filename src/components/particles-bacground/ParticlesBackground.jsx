import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import particlesConfig from "./particlesConfig"

const ParticlesBackground = () => {

    const customInit = useCallback(async (engine) => {
        await loadFull(engine);
        console.log('particles loaded');
    },[]);

    const options = particlesConfig;
    
    return (
        <Particles options={options} init={customInit} />
    )
}

export default ParticlesBackground

