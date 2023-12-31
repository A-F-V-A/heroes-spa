import { heroes } from "../data/Hero"

export const getHeroByName = (name) =>{

    name = name.toLocaleLowerCase().trim()

    if(name.length === 0) return []

    return heroes.filter(f => f.superhero.toLocaleLowerCase().includes( name ))  
} 