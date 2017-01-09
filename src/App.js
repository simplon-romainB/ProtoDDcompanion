import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { render } from 'react-dom';
import createFragment from 'react-addons-create-fragment'
/* fonctions de raccourcis */
function get(element){
  return document.getElementById(element);
}

/* declaration des variables et constantes */
let tabOrdreFinal;
let presenceXP;
presenceXP = 0;
let tabInit = [];
let moteur;
let moteurInit;
let initNombre;
initNombre=0;
let nombre;
nombre = 0;
let z;
z= 0;
let ensemble;
ensemble = [];
let lancerDes;
let presenceHP;
presenceHP = 0;
let controlDeck;
let resultats = [];
let presence;
presence = 0;

class MoteurInit{



  calculInit2(){
    moteur = new MoteurJetsDes(20);
     tabInit.map(function(x){
      x.bonusInit= parseInt(parseInt(moteur.moteur())+parseInt(x.bonusInit));
      console.log('bonusinit', x.bonusInit);

    });
     tabInit.sort(function(a,b){
      if (a.bonusInit < b.bonusInit)
        return 1;

      });



      let v = tabInit.map(function(x){
          return <div className="col-md-3">
                    <div className="panel-default">
                      <div className="panel-heading">
                        <div><h2 className= "panel-title">{String(x.perso)}</h2></div>
                      </div>
                      <div className="panel-body">{String(x.bonusInit)}</div>
                    </div>
                  </div>;
        })
      ReactDOM.render(
        <InitOrder info={v}  />,
        document.getElementById('root9')
      )

}
  enregistrer(perso){
    tabInit.push(perso);
  }

}

class MoteurJetsDes {
  constructor(type) {
    this.type = type;
    this.moteur();
  }
  moteur() {
    let resultat = Math.floor(Math.random()*this.type+1)
    return resultat;
  }


}

class HpointMoteur {
  constructor(nombre,personnage){
  this.nombre= nombre
  this.personnage= personnage
  }

}
/* controller par lequel tout passe */


class ControlDeck{




  init(type){
  lancerDes = new MoteurJetsDes(type);
  resultats.push(lancerDes.moteur())
  let newdes = new afficherResultats(resultats);

              }
  ajoutBonus(bonus){
  let bonorum = bonus
            }
    afficherDes()  {
      if ( presence == 0){
  ReactDOM.render(
      <MenuDes />,
      document.getElementById('mainComponent')
    );
      presence = 1;
    }
    else if (presence == 1) {
      ReactDOM.unmountComponentAtNode(document.getElementById('mainComponent'));
      ReactDOM.unmountComponentAtNode(document.getElementById('root2'));
      resultats=[];
      presence = 0;
    }
  }



  afficherHPmenu() {
    if (presenceHP==0){
    ReactDOM.render(
      <HpointMenu />,
      document.getElementById('root3')
      );
      presenceHP = 1;
    }
    else if (presenceHP ==1){
      ReactDOM.unmountComponentAtNode(document.getElementById('root3'))
      presenceHP = 0;
    }
  }
  afficherInit(){
    if (initNombre==0){
      ReactDOM.render(
        <InitConfig />,
        document.getElementById('root11')
      );
      initNombre=1
    }
    else if(initNombre==1){
      ReactDOM.unmountComponentAtNode(document.getElementById('root11'))
      initNombre=0;
    }
    }

  afficherPVcomponent(perso,vie) {
    if (nombre===0){
    ReactDOM.render(
      <PVcomponent name={perso} points={vie} />,
      document.getElementById('root4')
    );
    nombre = 1
                    }
  else if (nombre===1) {
    ReactDOM.render(
      <PVcomponent2 name={perso} points={vie} />,
      document.getElementById('root5')
    );
      nombre = 2
                    }
  else if (nombre===2) {
    ReactDOM.render(
      <PVcomponent3 name={perso} points={vie} />,
        document.getElementById('root6')
                      );
      nombre = 3
                                      }
  else if (nombre===3) {
    ReactDOM.render(
      <PVcomponent4 name={perso} points={vie} />,
        document.getElementById('root7')
        );
      nombre = 4
    }
    else if (nombre===4) {
      ReactDOM.render(
        <PVcomponent5 name={perso} points={vie} />,
          document.getElementById('root8')
          );
        nombre = 5
      }


                      }
    pvReinit(){
      ReactDOM.unmountComponentAtNode(document.getElementById('root4'))
      ReactDOM.unmountComponentAtNode(document.getElementById('root5'))
      ReactDOM.unmountComponentAtNode(document.getElementById('root6'))
      ReactDOM.unmountComponentAtNode(document.getElementById('root7'))
      ReactDOM.unmountComponentAtNode(document.getElementById('root8'))
      nombre = 0;

    }
    calculInit() {
      moteurInit.calculInit2();
    }

    InitiativeOrder(character,bonusInit){
      moteurInit.calculInit(character,bonusInit);
    }

    enregistrerPerso(perso){
      moteurInit.enregistrer(perso);
    }
    reinitialiserInit(){
      tabInit = [];
      ReactDOM.unmountComponentAtNode(document.getElementById('root9'));
    }

  }





/* Fin du controller */


class MainDisplay{

  transition(elementAcacher){
    let elementHTML = get(elementAcacher);
    elementHTML.style.visibility= 'hidden';
  }
}
class TabResultat extends Component{
    render() {
      let texte= " bonus = ";
      let c=this.props.bonus;
      let v=this.props.name.map(function(element){
      return <div className="panel panel-default">{element}</div>
    }.bind(this))
        console.log(c);
        return (
        <div className="col-md-3">
          <div>{v}total =  {this.props.name.reduce(function(a,b){return a+b})+texte+document.getElementById("bonusdes").value}</div>
        </div>
      )
    }
  }

class MenuDes extends Component{
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">lancez vos dés</h3>
        </div>
        <div className="panel-body">
          <div className="btn-group" role="group" aria-label="...">
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(4);}}>D4</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(6);}}>D6</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(8);}}>D8</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(10);}}>D10</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(12);}}>D12</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(20);}}>D20</button>
            <button type="button" className="btn btn-default"onClick={function(){controlDeck.init(100);}}>D100</button>
            <div className="form-group">
              <label>ajoutez votre bonus</label>
              <input type="text" className="form-control" name="bonusDes" id = "bonusdes" placeholder="bonus"/>
              <button type="button" className="btn-default" onClick={function(){controlDeck.ajoutBonus(document.getElementById("bonusdes").value)}}>valider</button>
            </div>
          </div>
        </div>
      </div>)
  }
}
class afficherResultats {
  constructor(resultats) {
    this.resultats= resultats;
    this.hope(this.resultats);
  }
  hope(resultats){
      ReactDOM.render(<TabResultat name={resultats} bonus={controlDeck.bonorum} />,
              document.getElementById('root2'));
              console.log(this.resultats);
    }
  }
  class NavBar extends Component{
    render(){
      return (
      <ul className="nav nav-pills">
    <li role="presentation"><button className= "btn-default" onClick={function(){controlDeck.afficherInit()}}>Ordre d'initiative</button></li>
    <li role="presentation"><button className= "btn-default" onClick={function(){controlDeck.afficherDes()}}>simulateur de dés</button></li>
    <li role="presentation"><button className= "btn-default" onClick={function(){controlDeck.afficherHPmenu()}}>compteur de points de vie</button></li>
    </ul>

    )}
  }


controlDeck = new ControlDeck();

class HpointMenu extends Component {
  render(){
    return(
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading"><h3 className="panel-title">definissez des barres de vie !</h3></div>
    <div className="panel-body">
    <div className="col-md-6">
      <div className="input-group">
        <span className="input-group-btn">
        </span>
        <input type="text"id="personnagePV" className="form-control" placeholder="nom du personnage"/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-group">
        <input type="text" id="pointsdevie" className="form-control" placeholder="points de vie de départ"/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick ={function(){controlDeck.afficherPVcomponent(document.getElementById('personnagePV').value,document.getElementById('pointsdevie').value)}}>ajouter une barre de vie!</button>
          <button className="btn btn-default" type="button" onClick ={function(){controlDeck.pvReinit()}}>reinitialiser barres de vie</button>
        </span>
      </div>
    </div>
  </div>
</div>
</div>

)
  }
}
class PVcomponent extends Component {
  render(){
  let perso = this.props.name
  let vie = this.props.points
  return(
<div className="panel-default">
  <div className="panel-heading">
    <h2 className="panel-title">{perso}</h2>
  </div>
    <div className="panel-body">{vie}</div>
      <button type= "button"  onClick={function(){vie=parseInt(vie)+1;nombre=0;controlDeck.afficherPVcomponent(perso,vie);}}>+</button>
      <button type= "button"  onClick={function(){vie=parseInt(vie)-1;nombre=0;controlDeck.afficherPVcomponent(perso,vie);}}>-</button>
</div>
    )
  }
}

ReactDOM.render(
  <NavBar  />,
  document.getElementById('navigation')
);

class PVcomponent2 extends Component {
  render(){
  let perso = this.props.name
  let vie = this.props.points
  return(
<div className="panel-default">
  <div className="panel-heading">
    <h2 className="panel-title">{perso}</h2>
  </div>
    <div className="panel-body">{vie}</div>
      <button type= "button"  onClick={function(){vie=parseInt(vie)+1;nombre=1;controlDeck.afficherPVcomponent(perso,vie);}}>+</button>
      <button type= "button"  onClick={function(){vie=parseInt(vie)-1;nombre=1;controlDeck.afficherPVcomponent(perso,vie);}}>-</button>
</div>
    )
  }
}
class PVcomponent3 extends Component {
  render(){
  let perso = this.props.name
  let vie = this.props.points
  return(
<div className="panel-default">
  <div className="panel-heading">
    <h2 className="panel-title">{perso}</h2>
  </div>
    <div className="panel-body">{vie}</div>
      <button type= "button"  onClick={function(){vie=parseInt(vie)+1;nombre=2;controlDeck.afficherPVcomponent(perso,vie);}}>+</button>
      <button type= "button"  onClick={function(){vie=parseInt(vie)-1;nombre=2;controlDeck.afficherPVcomponent(perso,vie);}}>-</button>
</div>
    )
  }
}
class PVcomponent4 extends Component {
  render(){
  let perso = this.props.name
  let vie = this.props.points
  return(
<div className="panel-default">
  <div className="panel-heading">
    <h2 className="panel-title">{perso}</h2>
  </div>
    <div className="panel-body">{vie}</div>
      <button type= "button"  onClick={function(){vie=parseInt(vie)+1;nombre=3;controlDeck.afficherPVcomponent(perso,vie);}}>+</button>
      <button type= "button"  onClick={function(){vie=parseInt(vie)-1;nombre=3;controlDeck.afficherPVcomponent(perso,vie);}}>-</button>
</div>
    )
  }
}
class PVcomponent5 extends Component {
  render(){
  let perso = this.props.name
  let vie = this.props.points
  return(
<div className="panel-default">
  <div className="panel-heading">
    <h2 className="panel-title">{perso}</h2>
  </div>
    <div className="panel-body">{vie}</div>
      <button className="default-btn-large" type= "button"  onClick={function(){vie=parseInt(vie)+1;nombre=4;controlDeck.afficherPVcomponent(perso,vie);}}>+</button>
      <button type= "button"  onClick={function(){vie=parseInt(vie)-1;nombre=4;controlDeck.afficherPVcomponent(perso,vie);}}>-</button>
</div>
    )
  }
}
/* declarations des nouvelles instances instances */
/* module initiative */
class InitConfig extends Component {
    render(){
      return(
      <div className= "row">
        <div className="col-md-12">
          <div className="input-group">
            <input type="text" id="perso" className="form-control" placeholder="personnage ou monstre"/>
            <input type="text" id="bonusInit" className="form-control" placeholder="bonus d'initiative"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={function(){controlDeck.reinitialiserInit()}}>reinitialiser initiative</button>
              <button className="btn btn-default" type="button" onClick={function(){moteurInit.enregistrer({"perso":document.getElementById('perso').value, "bonusInit":document.getElementById('bonusInit').value})}}>ajouter un personnage</button>
              <button className="btn btn-default" type="button" onClick={function(){controlDeck.calculInit()}}>afficher ordre d'initiative</button>
            </span>
          </div>
        </div>
      </div>
    )
    }
  }
class InitOrder extends Component {
  render(){
    return(
    <div className="row">{this.props.info}</div>
    )
          }
    }

 moteurInit = new MoteurInit;
