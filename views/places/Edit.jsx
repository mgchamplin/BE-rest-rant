const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <div className="container">
                <img className ="utensils-sideways" src="/images/knife-sideways.png" alt="Knife sideways" />
                <h1>Edit Restaurant Info</h1>
                <img className ="utensils-sideways" src="/images/fork-sideways.png" alt="Fork sideways" />
            </div>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="form_container">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic}/>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" value={data.place.city}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" value={data.place.state}/>
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founded Year</label>
                            <input type="number" className="form-control" id="founded" name="founded" value={data.place.founded}/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required />
                    </div>
                    <input className="btn btn-primary btn-space" type="submit" value="Edit Place" />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form