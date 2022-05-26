const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class Index extends React.Component {
    render() {
        const { icecream } = this.props
        return (
            <DefaultLayout title='Index'>
                <div>
                    <nav>
                        <a href="/icecream/new">Create New Icecream</a>
                    </nav>
                    <ul>
                        {
                            icecream.map(icecream => {
                                return (
                                    <li key={icecream._id}>
                                        <p>The <a href={`/icecream/${icecream._id}`}>{icecream.name}'s</a> color is {icecream.color}.</p>
                                        <p>{icecream.readyToEat ? 'READY' : 'NOT READY'}</p>
                                        <form action={`/icecream/${icecream._id}?_method=DELETE`} method='POST'>
                                            <input type="submit" value= "Delete"/>
                                        </form>
                                        <button><a href={`/icecream/${icecream._id}/edit`}>{`Edit ${icecream.name}`}</a></button>
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

