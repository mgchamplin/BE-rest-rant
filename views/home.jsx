const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>Restaurants 4 U</h1>
                
                <div>
                  <img className ="utensils" src="/images/fork-knife.png" alt="Fork and Knife" /> 
                  <img src="/images/Pizza.jpg" alt="Juicy Pizza" />
                  <img className="utensils" src="/images/spoon.png" alt="spoon" /> 
                </div>
            </main>
      </Def>
    )
  }

module.exports = home