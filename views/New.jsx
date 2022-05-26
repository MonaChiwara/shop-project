const React = require('react')
const DefaultLayout = require("./layout/DefaultLayout")

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title = 'New'>
                <div>
                    <form action="/icecream" method="POST">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                        <label htmlFor="name">Color</label>
                        <input type="text" id="color" name="color" />
                        <label htmlFor="readyToEat">Ready To Eat</label>
                        <input type="checkbox" id='readyToEat' name='readyToEat' />
                        <input type="submit" value="Create Icecream" />
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = New