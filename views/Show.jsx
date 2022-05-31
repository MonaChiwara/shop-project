const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Show extends React.Component {
    render() {
        console.log(this.props.icecream)
        const icecream = this.props.icecream
        return (
            <DefaultLayout title='Show'>
                <div>
                    <p> The marvelous <a href={`/icecream/${icecream._id}`}>{icecream.name} </a> ice cream created with {icecream.base} and {icecream.ingredients}</p>
                    <p>{icecream.image}</p>
                    <p>{icecream.price}</p>
                    <button><a href={'/icecream'}>Home</a></button>
                    <br /> <br />
                    <button><a href={`/icecream/${icecream._id}/edit`}></a>Personalize</button>
                    <br /> <br />
                    <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                    <br /> <br />
                    <input type="submit" value="DELETE" />
                    </form>
                    
                    <button><a href={'/icecream'}>Add to Cart</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

