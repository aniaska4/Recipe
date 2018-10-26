import React, {Component} from 'react';


class Header extends Component {
    constructor() {
    super();
        this.state={
            display:"none",
            display2: "none"            
        }      
    }

    

    handleClick = () => {
        this.setState({
            display: this.state.display === "none" ? "block" : "none"
        })
    };   
    

    handleClick2 = () => {
        if(this.state.display2 === "none"){
            this.setState ({ display2: "block"})
        }else{
         this.setState ({ display2: "none"})
        }
     }

    render(){
      return (
        <header className="first_element">
            <nav className="main">
                <div onClick={this.handleClick} className="about">Menu</div>
                <div class="droopdown_list_main">
                    <ul style={{display: this.state.display}} className="droopdown">
                        <li><a className="droopdown_list" href="#b1">Śniadania</a></li>
                        <li><a className="droopdown_list" href="#b2">Obiady</a></li>
                        <li><a className="droopdown_list" href="#b3">Kolacje</a></li> 
                        <li><a className="droopdown_list" href="#b4">Desery</a></li>
                    </ul>            
                </div>
            </nav>
            <div>
                <nav onClick={this.handleClick2} className="hamburger">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>              
                </nav>  
                {/* <ul style={{display2: this.state.display2}} className="droopdown">
                        <li><a className="droopdown_list" href="#">Śniadania</a></li>
                        <li><a className="droopdown_list" href="#">Obiady</a></li>
                        <li><a className="droopdown_list" href="#">Kolacje</a></li> 
                        <li><a className="droopdown_list" href="#">Desery</a></li>
                </ul>           */}
            </div>
            
            <nav className="logo container">
            <div className="logo_normal">Qlinarny Świat</div>
            <div className="logo_media">QŚ</div>
            </nav>
            
        </header>        
      )
    }

    
}


export default Header;