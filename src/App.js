import { Lightning, Utils } from 'wpe-lightning-sdk'
import Splash from "./Splash.js";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      {family: 'SourceSansPro', url: Utils.asset('fonts/SourceSansPro-Black.ttf') , descriptor: {} }
    ];
  }
  
  static _template(){
    return{
      Splash: {
        type: Splash
      }
    }
  }









}