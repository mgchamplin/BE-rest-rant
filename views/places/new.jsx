const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
          <main>
            <div className="container">
                <img className ="utensils-sideways" src="/images/knife-sideways.png" alt="Knife sideways" />
                <h1>Add a New Place</h1>
                <img className ="utensils-sideways" src="/images/fork-sideways.png" alt="Fork sideways" />
            </div>

            <form method="POST" action="/places">
                <div className="form_container">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" />
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <input className="btn btn-primary btn-space" type="submit" value="Add Place" />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form