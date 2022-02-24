class email22 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
                apppVersion:''
        }
    }
    render() {
        return (
            <>
                <h9>Hello {this.state.name ||'Friend' Welcome back.</h9>
            <button>Download</button>
            </>
        )
    }
}