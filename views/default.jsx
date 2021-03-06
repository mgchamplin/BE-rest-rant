const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Best Restaurants</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/places">Places</a>
                    </li>
                    <li>
                    <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
                {html.children}
            </body>
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">Have a Question?&nbsp;&nbsp;&nbsp;<a href="mailto:RestaurantsRUs@whoknows.com">Email us</a>
                <p>Copyright Michael Champlin 2020-2022</p>
                </div>
            </footer>
        </html>
    )
  }

module.exports = Def