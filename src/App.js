import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Cvalue from './Cvalue';

class App extends Component {
  constructor(){
    super();
    this.state={
      USD:'',
      INR:''
    }
    
  }
  componentDidMount()
  {
    fetch('http://free.currencyconverterapi.com/api/v5/convert?q=USD_INR&compact=ultra&apiKey=487bcf1b8ba56d449b3e').then(resp=>resp.json()).then(data=>this.setState({USD:data}))
    fetch('http://free.currencyconverterapi.com/api/v5/convert?q=INR_USD&compact=ultra&apiKey=487bcf1b8ba56d449b3e').then(resp=>resp.json()).then(data=>this.setState({INR:data}))
  }

  Showcurrency=(event)=>{
    console.log(event.target.value);
    let usd=this.state.USD.USD_INR;
    let Finally=usd*event.target.value;
    
    document.getElementById('INR').value=Finally;
    document.getElementById('big').innerHTML=Finally;
  }
   Showcurrency2=(event)=>{
    console.log(event.target.value);
    let inr=this.state.INR.INR_USD;
    let Finally=inr*event.target.value;
    
    document.getElementById('USD').value=Finally;
    document.getElementById('big').innerHTML=Finally;
  }
  render(){
  return (
    <div className="tc">
    <h1>USD TO INR</h1>
    <Cvalue Currencytype={"USD"} Result={this.Showcurrency}/>
    <Cvalue Currencytype={"INR"} Result={this.Showcurrency2} />
    <h2 id="big"></h2>
    </div>
  );
}
}

export default App;