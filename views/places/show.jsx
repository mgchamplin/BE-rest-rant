const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">No Comments Yet</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
            </div>
          )
        })
    }
    return (
        <Def>
            <main>
                <div className = "container">
                    <img className ="utensils" src="/images/fork-knife.png" alt="Fork and Knife" /> 
                    <div className = "image">
                        <img src={data.place.pic} alt={data.place.name}/>
                        <p><b>Located in {data.place.city}, {data.place.state}</b></p>
                    </div>
                    <div className = "text">
                        <h1 className="h1a">{ data.place.name }</h1>
                        <h2>Rating</h2>
                        <h3>Not Rated</h3>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h3>{data.place.cuisines }</h3>
                        
                        <div className = "container">
                        <a href={`/places/${data.id}/edit`} className="btn btn-primary btn-space"> EDIT </a>
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="bi bi-trash btn btn-primary btn-space">DELETE</button>
                        </form>    
                        </div>

                    </div>
                </div>
                    
                <h2 style={{fontSize:"1.5em"}}>Comments</h2>
                {comments}
            </main>
        </Def>
    )
}

module.exports = show