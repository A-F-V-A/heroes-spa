import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"



export const HeroPage = () =>{

    const navigate = useNavigate()

    const { id } = useParams()

    const hero = getHeroById( id )

    const { 
            superhero,
            alter_ego,
            publisher,
            first_appearance,
            characters
    } = hero

    const onNavigateBack = () => navigate(-1)

    return !hero 
           ? <Navigate to={'/marvel'}/>
           : <div className="row mt-5">
                <div className="col-4">
                    <img 
                        src={`/src/assets/heroes/${ id }.jpg`}
                        alt={ superhero }
                        className="img-thumbnail" />
                </div>
                <div className="col-8">
                    <h3>{ superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
                        <li className="list-group-item"><b>Publisher</b>{publisher}</li>
                        <li className="list-group-item"><b>First appearance</b>{first_appearance}</li>
                    </ul>

                    <h5 className="mt-4">Characters</h5>
                    <hr />
                    <p>{characters}</p>

                    <button
                        className="btn btn-outline-primary"
                        onClick={ onNavigateBack }
                        >
                        Back
                    </button>

                </div>
            </div>
}