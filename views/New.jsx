const React = require('react')
const Icecream = require('../models/Icecream')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div id='newid'>
                    <div>
                        <h1>Your Marvelous Creation</h1>
                        <div id='paragraph'>
                            <p>To create your Marvelous Creation Ice Cream, choose a unique name, pick an ice cream flavor as well as additional toppings from the list below</p>
                        </div>
                        <form action="/icecream" method="POST">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                            <br /> <br />
                            <label htmlFor="color">Ice Cream Flavor:</label>
                            <input type="text" id="color" name="base" />
                            <br /> <br />
                            <label htmlFor="ingredients">Toppings:</label>
                            <input type="text" id="ingredients" name="ingredients" />
                            <br /> <br />
                            <label htmlFor="price">Price:</label>
                            <input type="number" id="price" name="price" />
                            <label htmlFor="image">Picture:</label>
                            <input type="url" id="image" name="image" />
                            {/* <label htmlFor="inventory">inventory</label>
                            <input type="number" id="inventory" name="inventory" /> */}
                           
                            <input type="submit" value="Done" />
                        </form>
                    </div>
                    <div id='icecream-base'>
                        <h2>Ice Cream Flavors</h2>
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
                        <h2>Toppings</h2>
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

                    <div id='nuts'>
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