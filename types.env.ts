export interface keySound {
    id: number,
    keyDown: string,
    soundPath: string
}


export interface keyboard {
    id: number,
    name: string,
    keys: keySound[]
    


}