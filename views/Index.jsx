const React = require ('react')

class Index extends React.Component{
    render(){
        // ask question
        const { froyo } = this.props
        return(
            <div>
                <h1>Index Page</h1>
                <ul>
                    {
                        froyo.map((icecream, i) => {
                            return (
                                <li>
                                    <p>The <a href={`/icecream/${i}`}>{icecream.name}'s</a> color is {icecream.color}</p>
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