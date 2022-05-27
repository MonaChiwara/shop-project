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

                    <button><a href={'/icecream'}>Home</a></button>
                    <button><a href={`/icecream/${icecream._id}/edit`}></a>Personalize</button>
                    <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                        <input type="submit" value="DELETE" />
                    </form>
                    
                    {/* <button><a href={'/icecream'}>Add to Cart</a></button> */}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

