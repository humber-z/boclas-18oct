import React from "react"
import EditorComponent from './editor'
import Fase1 from './Fases/Fase1'
import Fase2 from './Fases/Fase2'
import Fase3Merc from './Fases/Fase3Merc'
import Fase3Oral from './Fases/Fase3Oral'

class Switcher extends React.Component{
  constructor(props){
    super(props)

  }



  



render(){
    console.log(this.props)
  switch(this.props.index){
    case 0:
      return(<EditorComponent 
              selectedNote={this.props.selectedNote}
              noteUpdate={this.props.noteUpdate} 
              selectedNoteIndex={this.props.selectedNoteIndex}
              notes={this.props.notes}/>
              );
    case 1:
      return(<Fase1 
                selectedNote={this.props.selectedNote}/>); 
    case 2:
      return(<Fase2 
                 selectedNote={this.props.selectedNote}/>); 
    case 3:
      return(<div><Fase3Merc 
                       selectedNote={this.props.selectedNote}/></div>);   
    case 4:
      return(<div><Fase3Oral 
                       selectedNote={this.props.selectedNote}/></div>);    
  }

}




}
export default Switcher;