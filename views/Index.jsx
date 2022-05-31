const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Index extends React.Component {
    render() {
        const { icecream } = this.props
        return (
            <DefaultLayout>
                <div>
                    <div id='h1div'>
                        <h1 id="indexHeader">MARVELOUS CREATIONS ICE-CREAM</h1>
                    </div>
                    <div id='navdiv'>
                        <nav>
                            <ul>
                                <li><a href="">OUR SIGNATURE CREATIONS</a></li>
                                <li><a href="/icecream/new">CREATE YOUR OWN</a></li>
                                <li><a href="">ABOUT US</a></li>
                                <li><a href="">YOUR ORDER</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id='h2div'>
                        <h2>OUR SIGNATURE CREATIONS</h2>
                    </div>
                    {/* <div id='signature'>
                        <section>
                            <h2>Belgian Chocolate Dreams</h2>
                            <img src="images/belgian.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Caramel Cookie Crunch</h2>
                            <img src="images/caramel.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Dandy Bubble Gum</h2>
                            <img src="images/bubblegum.jpeg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Double Dark Chocolate</h2>
                            <img src="images/darkchocolate.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Fairy Cotton Candy</h2>
                            <img src="images/cottoncandy.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Hot Fudge Brownie</h2>
                            <img src="images/hotfudge.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Marshmallow Delight</h2>
                            <img src="images/marshmallow.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Mediterranean Mint</h2>
                            <img src="images/mint.png" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Sea Salt Caramel</h2>
                            <img src="images/caramel.jpg" alt="" />
                            <p></p>
                        </section>
                        <section>
                            <h2>Strawberry Delight</h2>
                            <img src="images/strawberry.jpg" alt="" />
                            <p></p>
                        </section>
                    </div> */}
                    <div>
                        <h2>CREATE YOUR OWN MARVELOUS CREATION</h2>
                        <p><li><a href="/icecream/new">CLICK HERE TO CREATE</a></li></p>
                    </div>
                    <ul>
                        {
                            icecream.map(icecream => {
                                return (
                                    <li key={icecream._id}>
                                        <p> The marvelous <a href={`/icecream/${icecream._id}`}>{icecream.name} </a> ice cream created with {icecream.base} and {icecream.ingredients}</p>
                                        <p>{icecream.image}</p>
                                        <p>Price: ${icecream.price}</p>
                                        <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                                        <button><a href={`/icecream/${icecream._id}/edit`}>{`Edit`}</a></button>
                                        <br /> <br />
                                        <button><a href={'/icecream'}>Add To Cart</a></button>
                                        <br /> <br />
                                        <p><img src={icecream.image} alt="" /></p>
                                        <br /> <br />
                                        <input type="submit" value="Delete" />
                                        </form>
                                        
                                    </li>
                                )
                            })
                        }
                    </ul> 
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index

