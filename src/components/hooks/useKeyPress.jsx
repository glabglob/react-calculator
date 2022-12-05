import { useState, useEffect } from "react";

export const useKeyPress = (targetKey, clazz) => {
    const [keyPressed, setKeyPressed] = useState(false);

    const keyDown = (e) => {
        if (e.key === targetKey) {
            setKeyPressed(true);
            document.querySelector(`.${clazz}`).click()
        }
    };

    const keyUp = (e) => {
        if (e.key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keyDown);
        document.addEventListener("keyup", keyUp);
        //eslint-disable-next-line
    }, [])
    return keyPressed
};
