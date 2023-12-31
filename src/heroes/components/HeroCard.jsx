import { Link } from 'react-router-dom';



const CharactersByHero = ({alter_ego, characters}) => {

    return (alter_ego === characters) 
            ? <></>
            : <p>{characters}</p>
    
}

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) =>{

    const heroImageUrl = `/src/assets/heroes/${ id }.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} alt={superhero} className="card-img"/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{superhero}</h4>
                            <p className="card-text">{alter_ego}</p>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                            <Link to={`/hero/${id}`}>Mas...</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}