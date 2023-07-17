import { useMemo } from "react"
import { getHerosByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"


export const HeroList = ({publisher}) =>{

    const heroes = useMemo( () => getHerosByPublisher(publisher), [publisher])
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { heroes.map(card => <HeroCard key={card.id} {...card}/>)}
        </div>
    )
}