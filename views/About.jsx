// const React = require('react')
// const Icecream = require('../models/Icecream')
// const DefaultLayout = require("./layout/DefaultLayout")


// class About extends React.Component {
//     render() {
//         return(
//             <DefaultLayout>
//                 <div>
//                     <h1>About Us</h1>
//                 </div>

//             </DefaultLayout>

//         )
//     }
// }

// module.exports = About

const React = require('react')
const Icecream = require('../models/Icecream')
const DefaultLayout = require('./layout/DefaultLayout')

class About extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <h1>About us </h1>
            </DefaultLayout >
        )
    }
}

module.exports = About