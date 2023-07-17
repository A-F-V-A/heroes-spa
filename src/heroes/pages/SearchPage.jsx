import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByName } from '../helpers'
export const SearchPage = () =>{
    const navigate = useNavigate()

    const location = useLocation()
    
    const { q = '' } = queryString.parse(location.search)

    const { searchText, onInputChange } = useForm({
        searchText:''
    })

    const onSearchSummit = (event) =>{
        event.preventDefault()
        navigate(`?q=${ searchText }`)
    }

    const heroes = getHeroByName(q)

    const showSearch = q.length === 0
    const showError = q.length > 0 && heroes.length === 0

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSummit }>
                        <input 
                            type="text"
                            name="searchText"
                            placeholder="Search a hero"
                            className="form-control"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ onInputChange }
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{display: showSearch ? '' : 'none'}}
                        >
                        Search a hero 
                    </div>

                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{display: showError ? '':'none'}}>
                        No hero with <b>{q}</b>
                    </div>

                    {
                        heroes.map(h => <HeroCard key={h.id} { ...h }/> )
                    }
                </div>
            </div>

        </>
    )
}