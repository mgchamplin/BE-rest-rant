const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img align="middle" src="/images/sad-dog.png" alt="Sad Doggy image" />
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404