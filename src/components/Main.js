import React, {Component} from 'react';


//eslint-disable-next-line 
class Main extends Component {
    constructor() {
        super();

        }

    render(){
      return (
        <div>
            <section className="second_element">
                <div className="breakfast">
                    <article className="nav">
                    Śniadania
                    </article>        
                </div>    
            </section>
        
        
            <section className="third_element">
                <div className="dinner">
                    <article className="nav">
                    Obiady
                    </article>        
                </div>     
            </section>

        
            <section className="fourth_element">
                <div className="supper">
                    <article className="nav">
                    Kolacje
                    </article>        
                </div>     
            </section>
        

            <section className="fifth_element">
                <div className="deser">
                    <article className="nav">
                    Desery
                    </article>        
                </div>     
            </section>
        </div>        

      )
    }
}


export default Main;