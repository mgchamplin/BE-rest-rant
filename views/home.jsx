const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div>
                  <img align="middle" src="/images/Pizza.jpg" alt="Juicy Pizza" />
                </div>
            </main>
      </Def>
    )
  }

module.exports = home