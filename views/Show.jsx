const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Show extends React.Component {
    render() {
        console.log(this.props.icecream)
        const icecream = this.props.icecream
        return (
            <DefaultLayout title= 'Show'>
                <div>
                    <p>The {icecream.name}'s color is {icecream.color}. </p>
                    <p>
                        {
                            icecream.readyToEat
                                ?
                                "It's ready to eat"
                                :
                                "It's not ready to eat"
                        }
                    </p>
                    <button><a href={'/icecream'}>Back</a></button>
                    <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                        <input type="submit" value= "DELETE"/>
                    </form>
                    <button><a href={`/icecream/${icecream._id}/edit`}>{`Edit ${icecream.name}`}</a></button>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

