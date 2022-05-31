const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Index extends React.Component {
    render() {
        const { icecream } = this.props
        return (
            <DefaultLayout>
                <div>
                    <div id='h1div'>
                        <img id='logo' src="/logo.png" alt="" />
                        <h1 id="indexHeader">MARVELOUS CREATIONS ICE-CREAM</h1>
                    </div>
                    <div id='navdiv'>
                        <nav class='navbar'>
                            <ul id='nav1'>
                                <li><a href="">OUR SIGNATURE CREATIONS</a></li>
                                <li><a href="/icecream/new">CREATE YOUR OWN</a></li>
                                <li><a href="/icecream/about">ABOUT US</a></li>
                                <li><a href="">REVIEWS</a></li>

                            </ul>

                            <ul id='nav2'>
                                <li><a href=""></a><i class="fa-solid fa-magnifying-glass"></i></li>
                                <li><a href=""></a><i class="fa-solid fa-heart"></i></li>
                                <li><a href=""></a><i class="fa-solid fa-envelope"></i></li>
                                <li><a href=""></a><i class="fa-solid fa-bag-shopping"></i></li>
                                
                            </ul>
                        </nav>
                    </div>
                    <div id='h2div'>
                        <h2 class='h2index'>OUR SIGNATURE CREATIONS</h2>
                    </div >
                    <div id='intro'>
                        <div class='intro'>
                            <h3>Our Marvelous Creations</h3>
                            <p>We all scream for ice cream! From insanely creative small-batch works of art to ice cream cakes and handmade ice cream sandwiches to artisanal gelato and gourmet mochi, you've come to the right place for ice cream. Experience the most delicious and creamiest icecreams on the planet!
                            </p>
                            <a href="" class='btn'>See More &#8594; </a>
                        </div>
                        <div id='intro2'>
                            <div class='intro2'><a href=""><img class='signatureimage' src="/images/bubblegum.jpeg" alt="" /></a><p class='introp'>Dandy Bubble Gum</p></div>
                            <div class='intro2'><a href=""><img class='signatureimage' src="/images/marshmallow.jpg" alt="" /></a><p class='introp'>Marshmallow Delight</p></div>
                            <div class='intro2'><a href=""><img class='signatureimage' src="/images/cottoncandy.jpg" alt="" /></a><p class='introp'>Sea Salt Caramel</p></div>
                        </div>
                    </div>

                    <div id='h2div'>
                        <h2 class='h2index'>OTHER CLASSICS</h2>
                    </div >

                    <div id='new'>
                        <ul id='new'>
                            {
                                icecream.map(icecream => {
                                    return (
                                        <li key={icecream._id}>
                                            <p> The marvelous <a href={`/icecream/${icecream._id}`}>{icecream.name} </a> created with {icecream.base} ice cream and {icecream.ingredients} toppings</p>

                                            <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                                                <button id='edit'><a href={`/icecream/${icecream._id}/edit`}>Personalize</a></button>
                                                <br />
                                                <p><img class='image' src={icecream.image} alt="" /></p>
                                                <p>Price: ${icecream.price}</p>
                                                <br />
                                                <button id='edit'><a href={`/icecream/${icecream._id}/edit`}>{`Add To Cart`}</a></button>
                                                <br />
                                                <input type="submit" value="Delete" class='btn delete' />
                                            </form>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <h2 class='h2index' >CREATE YOUR OWN MARVELOUS CREATION</h2>
                    <div id='creatediv' >
                        
                        <p ><li><a id='creatediv' href="/icecream/new">CLICK HERE TO CREATE YOUR OWN</a></li></p>
                    </div>
                    <div id= 'aboutdiv'>
                        <h2 class='h2index' >ABOUT US</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed iste eos, necessitatibus exercitationem consequuntur porro fuga! Nihil harum qui exercitationem id cum non maiores unde iste, ea voluptates facere inventore. Provident praesentium, culpa velit nulla nobis, ducimus enim deleniti totam ab id officiis possimus! Esse asperiores culpa ea deserunt animi, voluptatum minima accusamus eius numquam. Illo aliquam nesciunt nam totam veritatis fugit minima veniam, corrupti explicabo? Dolorem eveniet eum sit velit deleniti voluptatem perspiciatis unde libero id adipisci. Possimus similique ipsum culpa veniam accusantium maxime, nobis vero eligendi. Magnam fuga labore quae debitis pariatur adipisci incidunt. Dolorem vero vitae nisi?</p>
                    </div>
                    <div id='footerdiv'>
                        <div class="leftfooter">United States   |   English (US)   |   $ (USD)</div>
                        <div class="rightfooter">© 2022 Marvelous Creations, Inc. | Terms of Use | Privacy Interest-based ads</div>
                    </div>
                </div>
            </DefaultLayout >
        )
    }
}

module.exports = Index