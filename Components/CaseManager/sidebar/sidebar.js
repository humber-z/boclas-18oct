import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';
import Card from '@material-ui/core/Card';


class SidebarComponent extends React.Component{
    constructor(){
      super()
      this.state={
        serachTerm: '',
        addingNote: false,
        title: null
      }
    }
  
render(){
  const {notes, classes, selectedNoteIndex } = this.props;
  const {serachTerm} = this.state
   if(notes){
   const filteredData = notes.filter(item => (item.title.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase()) || item.body.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase()) ))
   return( 
     <div className={classes.sidebarContainer}>    
      <input 
         className={classes.newNoteInput}
         placeholder='Buscar Caso'
         type="text" 
         value={serachTerm} 
         onChange={(e) => this.setState({serachTerm: e.target.value})}/>
       <Button
         onClick={this.newNoteBtnClick}
         className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancelar' : 'Nuevo Caso' }</Button> 
         {
           this.state.addingNote ? 
           <div>
             <input type='text'
              className={classes.newNoteInput}
              placeholder='Nombre del Caso'
              onKeyUp={(e) => this.updateTitle(e.target.value)}
             />
             <Button 
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote}>Aceptar</Button>
           </div> 
           : 
           null
         }
         <List>
        
          <Card>
           <ListItem
          alignItems='flex-start'>
               <div className={classes.textSection}>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>Caso</h4>
                 <h4 className={classes.itemText} style={{ width: '18%'}}>Cliente</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>Institu</h4>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>Asunto</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>Etapa</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>Estatus</h4>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>Actualizado</h4>
                 <h4 className={classes.itemText} style={{ width: '20%'}}>Descripcion</h4>
            </div>
            </ListItem>
             </Card>
                  
          </List>     
       <List>
         { 
           filteredData.map((_note, _index) => {
             return(
               <Card key={_index} className={classes.card}>
                <SidebarItemComponent
                _note={_note}
                _index={_index}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={this.selectNote}
                deleteNote={this.deleteNote}>
                </SidebarItemComponent>    
               </Card>
             )
           })
         }
       </List>  
    </div>)
   }else{
   return( 
     <div>     
    </div>)
    }
 
}
newNoteBtnClick = () => {
   this.setState({title: null, addingNote: !this.state.addingNote})
}
updateTitle = (txt) => {
  this.setState({title: txt})
}
newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);


}
export default withStyles(styles)(SidebarComponent);