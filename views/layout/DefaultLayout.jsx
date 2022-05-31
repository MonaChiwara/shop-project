const React = require ('react')


class DefaultLayout extends React.Component{
    render () {
        return (
            <html lang ='en'>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <link href="https://fonts.googleapis.com/css2?family=Diplomata+SC&family=Henny+Penny&family=Luckiest+Guy&family=Playball&family=Rubik+Wet+Paint&family=Shrikhand&family=Tiro+Gurmukhi:ital@1&display=swap" rel="stylesheet"/>
                    <script src="https://kit.fontawesome.com/bfe75d175b.js" crossorigin="anonymous"></script>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </body>

            </html>
        )
    }
}

module.exports = DefaultLayout