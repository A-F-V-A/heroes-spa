import { heroes } from "../data/Hero"




export const getHeroById = (id) => heroes.find(f => f.id === id)