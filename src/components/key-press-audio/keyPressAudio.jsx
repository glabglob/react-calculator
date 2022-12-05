import keyPressAudio from './keyPress.mp3'

export const playAudio = () =>{
    new Audio(keyPressAudio).play()
}