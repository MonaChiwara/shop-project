const React = require('react')

class Index extends React.Component {
    render() {
        const { icecream } = this.props
        return (
            <div>
                <nav>
                <a href="/icecream/new">Create New Icecream</a>

                </nav>
                <h1>Fruits Index Page</h1>
                <ul>
                    {
                        icecream.map(icecream => {
                            return (
                                <li key={icecream._id}>
                                    <p>The <a href={`/icecream/${icecream._id}`}>{icecream.name}'s</a> color is {icecream.color}.</p>
                                    <p>{icecream.readyToEat ? 'READY' : 'NOT READY'}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index

