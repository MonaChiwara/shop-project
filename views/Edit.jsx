const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


module.exports = class Edit extends React.Component {
    render() {
        const icecream = this.props.icecream
        return (
            <DefaultLayout title={`Edit ${icecream.name.toUpperCase()}`}> 
                <h1>Edit Page</h1>
                <form action={`/icecream/${icecream._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={icecream.readyToEat}/>
                    <input type="submit" value="Edit Icecream"/>
                </form>
            </DefaultLayout>
        )
    }
}