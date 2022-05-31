// const React = require('react')
// const DefaultLayout = require("./layout/DefaultLayout")

// module.exports = class Cart extends React.Component {
//     render() {
//         const icecream = this.props.icecream
//         return (
//             <DefaultLayout title= "Shopping Cart">
//                 <div>
//                 <form action={`/icecream${icecream._id}?_method=DELETE`} method='POST'>
//                     <input type="hidden" name='cart'/>
//                     <input type="submit" value="Add To Cart" />
//                 </form>
//                     <p>yyy<a href={`/icecream/${icecream._id}`}>{icecream.name} </a></p>
//                     <p>Price: ${icecream.price}</p>
//                 </div>

//             </DefaultLayout>
//         )
//     }
// }

// const React = require('react')
// const DefaultLayout = require('./layout/DefaultLayout')


// module.exports = class Cart extends React.Component {
//     render() {
//         const icecream = this.props.icecream
//         return (
//             <DefaultLayout> 
//                 <h1>Cart</h1>
//                 <form action={`/icecream/${icecream._id}?_method=PUT`} method="POST">
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name"/>
//                     <label htmlFor="base">Ice cream base:</label>
//                     <input type="text" id="base" name="base"/>
//                     <label htmlFor="ingredients">Ingredients</label>
//                     <input type="text" id="ingredients" name="ingredients"/>
//                     <input type="submit" value="Add to Cart"/>
//                     {/* <button><a href={`/icecream/${icecream._id}`}>{`Add to cart`}</a></button> */}
//                 </form>
//             </DefaultLayout>
//         )
//     }
// }