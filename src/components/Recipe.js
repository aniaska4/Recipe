import React, {Component} from 'react';
import {db} from '../firebase'
 
        
    class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "none",
            display2: "none",
            display3: "none",
            recipeDisplay: "none",
            meals: []            
        }
    }

    handleClick = () => {
        if(this.state.display === "none"){
            this.setState({display: "block"}) 
        }else{
            this.setState({display: "none"}) 
        }
    }

    handleClick2 = () => {
        if(this.state.display2 === "none"){
            this.setState({display2: "block"}) 
        }else{
            this.setState({display2: "none"}) 
        }
    }

    handleClick3 = () => {
        if(this.state.display3 === "none"){
            this.setState({display3: "block"}) 
        }else{
            this.setState({display3: "none"}) 
        }
    }

    handleClickRecipe = () => {
        if(this.state.recipeDisplay === "none"){
            this.setState({recipeDisplay: "block"}) 
        }else{
            this.setState({recipeDisplay: "none"}) 
        }
    }

    //Tworzymy funkcję, która zwraca nam div z img i name
    genItem = (el) => (
        <div className="items" onClick={this.handleClickRecipe}>
            <img src={el.img} alt=""/>
            <p>{el.name}</p>
        </div>
    );
      //tworzymy całą sekcję z 3 wierszami
    genSection = (type) => {
      const a = this.state.meals.filter(e => e.type === type);//ze wszystkich elementów z bazy pobieramy dane danego typu
      const rows = [];

      for(let i=0; i<a.length; i++) {//robimy pętle po typach (a)
        if ( (i+1)%3 === 0) {//wykonuj akcję dla i=2, 5, 8 ..(bo dla i=1 i i=0 nie spełniamy modulo)
          rows.push([a[i-2],a[i-1],a[i]]);//do rows wrzucamy tablicę kolumn, dla i=2: 2-2=0, 2-1=1, =2 => to są nasze kolumny itd
        }        
      }

      let disp;
      switch(type) {
        case 'breakfast':
          disp = this.state.display;
          break;
        case 'dinner':
          disp = this.state.display2;
          break;
        case 'supper':
          disp = this.state.display3;
          break;
        default:
          disp = null;
          break;
      }
      //każdy wiersz składa się z 3 kolumn. Wierszy jest 3. Robimy dwa razy pętle. Raz dla wierszy i raz dla kolumn.
      return (
        <section style={{display: disp}}  className="items_list_main container" >
            {
            rows.map(e => (//mapujemy po wierszach dodając diva z img i name, 
                <div className="items_list">
                {e.map(ee => this.genItem(ee))} {/*mapuje po kolumnach dodając diva z img i name */}
                </div>
            ))  
            }
        </section>
      );      
    };

  // <div class="items_list"> => genSection
  //       <div class="items"> =>genItem
  //            <img src="./img/img8.jpg" alt=""/>
  //           <p>PUDDING RYŻOWY Z KARMELIZOWANĄ GRUSZKĄ</p>
  //       </div>
  //       <div class="items">
  //             <img src="./img/img9.jpg" alt=""></>
  //             <p>PUDDING RYŻOWY Z KARMELIZOWANĄ GRUSZKĄ</p>
  //       </div>
  //       <div class="items">
  //             <img src="./img/img10.jpg" alt=""></>
  //             <p>PUDDING RYŻOWY Z KARMELIZOWANĄ GRUSZKĄ</p>
  //       </div>
  // </div>

    render(){

      return (
    <div class="main_recipe">
        
        <section className="second_element" id="b1">
                    <div className="breakfast"  onClick={this.handleClick}>
                        <section className="nav">
                                Śniadania
                        </section>               
                    </div>  
                      
        </section>
        {this.genSection('breakfast')}

        <section class="recipe" style={{display: this.state.recipeDisplay, display: "none"}}>
            <div class="recipe_main container">
                <p class="recipe_title">PUDDING RYŻOWY Z KARMELIZOWANĄ GRUSZKĄ</p>
        
                <div class="prepare">
                    <section class="boxOne">
                        <p class="ingredients">Składniki</p>              
                        <ul class="ingredients_items">
                        <li>200 g serka homogenizowanego</li>
                        <li>2 jajka</li>
                        <li>100 g mąki pszennej</li>
                        <li>1 łyżeczka sody oczyszczonej</li>
                        <li>1 łyżeczka proszku do pieczenia</li>
                        <li>50 g czekolady deserowej</li>
                        </ul>              
                    </section>


                    <section class="boxTwo">
                        <p class="prepare_description">Przygotowanie</p>
                        <div class="description">
                            Wymieszać zgrubnie serek homogenizowany z jajkami za pomocą rózgi lub widelcem.
                            Do drugiej miski przesiać mąkę z proszkiem do pieczenia oraz sodą i dokładnie wymieszać.
                            Wsypać do miski z jajkami i serkiem i delikatnie połączyć rózgą tylko do połączenia się składników na gładką
                            i jednolitą masę. Na koniec wmieszać w ciasto połowę (50 g) pokrojonej w małą kosteczkę czekoladę.
                            Rozgrzać patelnię (np. dużą naleśnikową lub inną z nieprzywierającą powłoką) i nakładać po 2 łyżki ciasta na
                            jednego placka zachowując odstępy.
                            Smażyć na średnim ogniu, do czasu aż urosną i będą ładnie zrumienione (przez około 2 minuty). Można smażyć
                            beztłuszczowo, ale ja dodaję małą ilość masła na patelnię, dla smaku i ładnego zrumienienia placków.
                            Przewrócić placki na drugą stronę i smażyć do zrumienienia, przez około 2 minuty. Przed smażeniem następnej
                            partii placków patelnię wytrzeć ręcznikiem papierowym.
                            Można podawać z owocami i np. z polewą czekoladową: czekoladę połamać na kosteczki i roztopić razem ze
                            śmietanką w mikrofali lub w kąpieli wodnej.
                        </div> 
                    </section>               
                </div>
            </div>
        </section>
      
    
        <section className="third_element" id="b2">
                    <div className="dinner">
                        <section onClick={this.handleClick2} className="nav">
                                Obiady
                        </section>  
                                
                    </div>     
        </section>
        {this.genSection('dinner')}

      
        <section className="fourth_element" id="b3">
                    <div className="supper">
                        <article onClick={this.handleClick3} className="nav">
                                Kolacje
                        </article>        
                    </div>     
        </section>
        {this.genSection('supper')}
        
      

        <section className="fifth_element" id="b4">
                    <div className="deser">
                        <article className="nav">
                                Desery
                        </article>        
                    </div>     
        </section>
    </div>       
    
      )
    }

    componentDidMount(){
        db.collection('meals').get().then((response) =>{
            // console.log(response.docs[2].data())
            const tab = []
            response.docs.forEach((e) =>{
                tab.push(e.data()) 
                // console.log(e.data()) to są moje wszystkie elementy tablicy
                console.log(e.data())
            })
            this.setState({
                meals: tab//meals to moje e.data, w tab mam obecnie wszystkie przepisy
            })
        })
    }
}

export default Recipe;
