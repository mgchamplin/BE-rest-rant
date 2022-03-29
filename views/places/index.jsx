const React = require('react')
const Def = require('./../default')

function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`} >{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>

        <img src={place.pic} alt={place.name} />

        <p className="text-center">Located in {place.city}, {place.state}</p>
      </div>
    )
  })
  return (
    <Def>
        <main>
          <div className="container">
            <img className ="utensils-sideways" src="/images/knife-sideways.png" alt="Knife sideways" />
            <h1>Places To Rant Or Rave About</h1>
            <img className ="utensils-sideways" src="/images/fork-sideways.png" alt="Fork sideways" />
          </div>

            <div className = "row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

module.exports = index
