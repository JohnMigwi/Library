import React,{Component} from 'react';

class Home extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

render(){
    return(
        <div className="container mt-4 home text-center align-self-center">
        <br/><br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center">
            <h1 align="center"> Welcome to the MULTIMEDIA</h1>
            </div>
            <div className="row darkbg">

        <br/><br/><br/>
        <br/><br/><br/>
            <h6>
            WELCOME TO MMU library
            semper auctor neque vitae tempus quam. Neque convallis a cras semper auctor neque vitae tempus quam. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Consectetur a erat nam at lectus urna duis convallis convallis. Aenean pharetra magna ac placerat vestibulum. Nibh mauris cursus mattis molestie a iaculis at erat. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Ultrices vitae auctor eu augue ut. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Arcu cursus vitae congue mauris. Ac auctor augue mauris augue neque gravida in fermentum et. Consequat interdum varius sit amet mattis vulputate enim nulla. Morbi tempus iaculis urna id. Vitae purus faucibus ornare suspendisse.
            <br/><br/> </h6>
            </div>
            <div className="row darkbg justify-content-center">
            <table>
    <tr> <th colspan="2"><h6>Library Timings</h6></th> </tr>
    <tr> <td><h6>Opening Time</h6> </td> <td> <h6>9.00 A.M.</h6></td></tr>
    <tr> <td>Closing Time </td> <td> 9.00 P.M.</td></tr>
            </table>
            <br/>
            <br/>
                </div>
                <br/><br/>
                <br/><br/><br/>
            </div>
        );
}

}

export default Home;