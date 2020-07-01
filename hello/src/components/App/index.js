import React from 'react';
import '../App/index.css';
import Header from '../Header';
import Footer from '../Footer';
import Wrapper from '../Wrapper';
import Fecha from '../Fecha'

//function App() {
  //  return (
    //    <div className="App">
      //      <Header />
        //    <Wrapper />
          //  <Footer texto="jai" fecha=""/>
       // </div>
   // );
//}
//export default App;

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log('Se ejecutó el constructor')

        this.state = {
            date: new Date(),
            nameAlumno: ""
        };
    }

    componentDidMount() {
        console.log("Se ejecutó el CDM")

        this.setState({ nameAlumno: "Robert" })
    }

    handleButtonClick() {
        console.log('cliiii')
    }

    render() {
        
        console.log('Se ejecutó el metodo render')
        return (
            <div className="App">
                <Header />
                <Wrapper />
                <Footer texto="Este es mi footer horrible" fecha={this.state.date} />
            </div>)
    }
}

export default App;
