// const React = require('react')
// const DefaultLayout = require("./layout/DefaultLayout")

// class New extends React.Component {
//     render() {
//         return (
//             <DefaultLayout title='New'>
//                 <div>
//                     <div id='form1'>
//                     <form action="/icecream" method="POST">
//                         <label htmlFor="name">Name:</label>
//                         <input type="text" id="name" name="name"/>
//                         <label htmlFor="color">Ice Cream Base:</label>
//                         <input type="text" id="color" name="color"/>
//                         <label htmlFor="readyToEat">Add Ons</label>
//                         <input type="text" id="ingredients" name="ingredients"/>
//                         <input type="submit" value="Create New Flavor" />
//                         </form>
//                     </div>
{/* <div id='form3'>
                        <h3>Add Ons</h3>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Belgian Chocolate Chips</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Oreos</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Dark Chocolate Chips</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Cotton Candy</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Hot Fudge</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Marshmallows</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Mint</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Caramel Drizzle</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Pecans</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">Peanuts</label>
                        </form>
                        <form action="/icecream" method="POST">
                            <input type="checkbox" id="ingradients" name="color" />
                            <label htmlFor="name">None</label>
                        </form>
                        <form action="/icecream" method="POST">
                        <input type="submit" value="ADD TO CART" />
                        </form>
                    </div> */}
{/* </div>
            </DefaultLayout>
        )
    }
}

module.exports = New */}

const React = require('react')
const Icecream = require('../models/Icecream')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title='Your Marvelous Creation'>
                <div id='newid'>
                    <div>
                        <div id='paragraph'>
                            <p>To create your Marvelous Creation Ice Cream, choose a unique name, pick an ice cream base as well as addition ingredients from the list below</p>
                        </div>
                        <form action="/icecream" method="POST">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <br /> <br />
                            <label htmlFor="color">Ice Cream Base:</label>
                            <input type="text" id="color" name="base" />
                            <br /> <br />
                            <label htmlFor="ingredients">Ingredients:</label>
                            <input type="text" id="ingredients" name="ingredients" />
                            <br /> <br />
                            <label htmlFor="price">Price:</label>
                            <input type="number" id="price" name="price" />
                            {/* <label htmlFor="price">Price:</label>
                            <input type="number" id="price" name="price" /> */}
                           
                            <input type="submit" value="Done" />
                        </form>
                    </div>
                    <div id='icecream-base'>
                        <h2>Ice Cream Bases</h2>
                        <ul>
                            <li>Vanilla</li>
                            <li>Chocolate</li>
                            <li>Cappuccino</li>
                            <li>Strawberry</li>
                            <li>Matcha</li>
                            <li>Coffee</li>
                            <li>Caramel</li>
                            <li>Butterscotch</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Ingredients</h2>
                    </div>
                    <div id='chocolate'>
                        <h3>Chocalate</h3>
                        <ul>
                            <li>Belgian Chocolate</li>
                            <li>Oreos</li>
                            <li>Dark Chocolate Chips</li>
                            <li>Hot Fudge</li>
                            <li>Caramel Drizzle</li>
                            <li>Chocolate Chips</li>
                            <li>Twix</li>
                            <li>Snickers</li>
                            <li>Kit Kat</li>
                            <li>Milky Way</li>
                            <li>Reese's Cup</li>
                        </ul>
                    </div>
                    <div id='candy'>
                        <h3>Candy</h3>
                        <ul>

                            <li>Marshmallow</li>
                            <li>Sour Patch Kids</li>
                            <li>M&M's</li>
                            <li>Skittles</li>
                            <li>AirHeads</li>
                            <li>Starburst</li>
                            <li>Nerds</li>
                            <li>Gummy Bears</li>
                            <li>Cotton Candy</li>

                        </ul>
                    </div>

                    <div id='fruit'>
                        <h3>Fruit</h3>
                        <ul>
                            <li>Strawberry</li>
                            <li>Peach</li>
                            <li>Banana</li>
                            <li>Kiwi</li>
                            <li>Mango</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Nuts</h3>
                        <ul>
                            <li>Peanuts</li>
                            <li>Pecans</li>
                            <li>Cashews</li>
                            <li>Almonds</li>
                            <li>Pistachios</li>
                        </ul>
                    </div>

                </div>

            </DefaultLayout >
        )
    }
}