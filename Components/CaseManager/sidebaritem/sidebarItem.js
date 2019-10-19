import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
//import { removeHTMLTags } from '../helpers';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class SidebarItemComponent extends React.Component {
 
  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;
   return(
     <div key={_index} onClick={() => this.selectNote(_note, _index)}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems='flex-start'>
            <div className={classes.textSection}>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>{_note.title}</h4>
                 <h4 className={classes.itemText} style={{ width: '18%'}}>{_note.body}</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>{_note.aseguradora}</h4>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>{_note.tiposeguro}</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>Directa</h4>
                 <h4 className={classes.itemText} style={{ width: '8%'}}>Activa</h4>
                 <h4 className={classes.itemText} style={{ width: '10%'}}>13/10/2019</h4>
                 <h4 className={classes.itemText} style={{ width: '25%'}}>Alguna descripcion...</h4>
            </div>
            <DeleteIcon onClick={() => this.deleteNote(_note)}
              className={classes.deleteIcon}></DeleteIcon>
        </ListItem>
      </div>
   )
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    if(window.confirm(`Confirmacion para eliminar caso: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  }

  }
  export default withStyles(styles)(SidebarItemComponent);