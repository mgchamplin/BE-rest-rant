const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>Restaurants 4 U</h1>
                
                <div>
                  <img src="/images/Pizza.jpg" width={800} alt="Juicy Pizza" />
                </div>
            </main>
      </Def>
    )
  }

module.exports = home