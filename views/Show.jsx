const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Show extends React.Component {
    render() {
        console.log(this.props.icecream)
        const icecream = this.props.icecream
        return (
            <DefaultLayout>
                
                <div>
                    <h1>{icecream.name}</h1>
                    <p> The marvelous <a href={`/icecream/${icecream._id}`}>{icecream.name} </a> ice cream created with {icecream.base} and {icecream.ingredients}</p>
                    <p>Price: ${icecream.price}</p>
                    <p><img src={icecream.image} alt="" /></p>
                    <button><a href={'/icecream'}>Home</a></button>
                    <br /> <br />
                    <button><a href={`/icecream/${icecream._id}/edit`}>Personalize</a></button>
                    <br />
                    <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                        <br />
                        <input type="submit" value="DELETE" />
                    </form>

                    {/* <form action={`/icecream/${icecream._id}/?_method=PUT`} method="POST">
                        <input class={icecream.inventory > 0 ? "buyButton" : "noBuyButton"} type="submit" value="ADD TO CART" />
                    </form> */}

                    {/* <button><a href={`/icecream/${icecream._id}/cart`}>Add to Cart</a></button> */}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

