const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>REST-rant</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div>
                  <img src="/images/Pizza.jpg" width={800} alt="Juicy Pizza" />
                </div>
            </main>
      </Def>
    )
  }

module.exports = home