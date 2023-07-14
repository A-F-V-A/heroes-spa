import { heroes } from "../data/Hero"


export const getHerosByPublisher = ( publisher ) =>{
    const validPublisher = ['Marvel Comics', 'DC Comics']
    if(!validPublisher.includes(publisher))
        throw new Error(`${ publisher } is not a valid publisher`)

    return heroes.filter(f => f.publisher === publisher)
}   