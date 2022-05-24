const React = require('react')

class Show extends React.Component {
    render() {
        console.log(this.props.froyo)
        const froyo = this.props.froyo
        return (
            <div>
                <h1>Show Page</h1>
                <p>The {froyo.name}'s color is {froyo.color}. </p>
                <p>
                    {
                        froyo.readyToEat
                            ?
                            "It's ready to eat"
                            :
                            "It's not ready to eat"
                    }
                </p>
                <button><a href={'/icecream'}>Back</a></button>
            </div>
        )
    }
}

module.exports = Show