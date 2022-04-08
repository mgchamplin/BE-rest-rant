const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">No Comments Yet</h3>
    )
    let rating = (<h3 className="inactive">No comments yet! &ensp; Be the first!!</h3>)

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h3>{c.content}</h3>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h3>Rating: {c.stars}</h3>
            </div>
          )
        })
        let sumRatings = data.place.comments.reduce((tot, c) => {return tot + c.stars}, 0)

        let averageRating = Math.round(sumRatings / data.place.comments.length)

        let stars = "";
        for (let i=0; i < averageRating; i++)
            stars += '⭐'

        rating = (<h3>{stars} Stars!</h3>)
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
                        <h3>{rating}</h3>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h3>{data.place.cuisines }</h3>
                        
                        <div className = "container">
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-primary btn-space"> EDIT </a>
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                        <button type="submit" className="bi bi-trash btn btn-primary btn-space">DELETE</button>
                        </form>    
                        </div>

                    </div>
                </div>
                    
                <h2 style={{fontSize:"1.5em"}}>Comments</h2>
                {comments}
                <br></br>
                <h2>Got a Rant or Rave?</h2>
                <form method="POST" action={`/places/${data.place.id}/comment`}>

                    <div className="form_container">
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input className="form-control" id="content" name="content" required />
                        </div>

                        <div className="row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="author">Author</label>
                                <input className="form-control" id="author" name="author" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="stars">Stars (0-bad, 5-Excellent)</label>
                                <input type="number" min="0" max="5" step="0.5" value="0.0" className="stars-slider form-control" id="stars" name="stars" />
                            </div>
                            <div className="form-group col-sm-4">
                                <label for="rant">Rant?</label>
                                <input className="check-box" type="checkbox" name="rant" id="rant" defaultChecked/>
                            </div>
                        </div>

                        <input className="btn btn-primary btn-space" type="submit" value="Add Comment" />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports = show

/*
let rating = (
  <h3 className="inactive">
    Not yet rated
  </h3>
)
if (data.place.comments.length) {
  let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = sumRatings / data.place.comments.length
  rating = (
    <h3>
      {averageRating} stars
    </h3>
  )
  ...
}

<div className="form_container">    
                        <div className="form-group">
                            <label htmlFor="name">Content</label>
                            <input className="form-control" id="content" name="content"/>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-4">
                                <div>
                                    <label htmlFor="name">Author</label>
                                    <input className="form-control" id="author" name="author"/>
                                </div>
                                    <label htmlFor="name">Rating</label>
                                    <input className="form-control" id="rating" name="rating"/>
                                <div>
                                    <label htmlFor="name">Rant</label>
                                    <input className="form-control" id="rant" name="rant"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form_container"></div>
                    <input className="btn btn-primary btn-space" type="submit" value="Add Comment" />
*/