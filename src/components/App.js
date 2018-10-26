import React, {Component} from 'react';
import Header from './Header';
// import Main from './Main';
import Recipe from './Recipe'
import Footer from './Footer'


  
class App extends Component {
    constructor() {
    super();
    
    }

    render(){
      return (
          <div>
              <Header />
              <Recipe />
              <Footer />
                                      
          </div>
        
      )
    }
}

export default App;
