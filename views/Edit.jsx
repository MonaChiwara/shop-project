const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const icecream = this.props.icecream
        return (
            <DefaultLayout>
                <div>
                    <div>
                        <h1>{icecream.name}</h1>
                        <form action={`/icecream/${icecream._id}?_method=PUT`} method="POST">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" defaultValue={icecream.name} />
                            <br /> <br />
                            <label htmlFor="base">Ice cream Flavor:</label>
                            <input type="text" id="base" name="base" defaultValue={icecream.base} />
                            <br /> <br />
                            <label htmlFor="ingredients">Toppings</label>
                            <input type="text" id="ingredients" name="ingredients" defaultValue={icecream.ingredients}/>
                            <br /> <br />
                            <label htmlFor="price">Price:</label>
                            <input type="number" id="price" name="price" defaultValue={icecream.price}/>
                            <br /> <br />
                            <label htmlFor="image">Picture:</label>
                            <input type="url" id="image" name="image" defaultValue={icecream.image}/>
                            <br /> <br />
                            <input type="submit" value="Edit Icecream"  />
                            {/* <button><a href={`/icecream/${icecream._id}`}>{`Add to cart`}</a></button> */}
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
            </DefaultLayout>
        )
    }
}