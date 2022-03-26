const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className = "container">
                    <div className = "image">
                        <img src={data.place.pic} alt={data.place.name} />
                    </div>
                    <div className = "text">
                        <h1>{ data.place.name }</h1>
                        <h2>Rating</h2>
                        <h3>Not Rated</h3>
                        <h2>Description</h2>
                        <h3>Serving amazing Mediterranean food seven days per week, lunch and dinner</h3>
                    </div>
                </div>
                <h2 style={{fontSize:"1.5em"}}>Comments</h2>
                <h3 style={{fontSize:"1.0em"}}>No Comments Yet</h3>

                <div className = "container">
                    <a href={`/places/${data.id}/edit`} className="btn btn-primary btn-space"> EDIT </a>

                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-primary btn-space">DELETE</button>
                    </form>    
                </div> 
            </main>
        </Def>
    )
}

module.exports = show