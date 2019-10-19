import React from 'react';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';
import TabsRoutes from './editor/TabsRoutes';
import Button from '@material-ui/core/Button';
import './App.css';
import MultiStep from './editor/stepMenu';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const firebase = require('firebase');
  
require('firebase/firestore');

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyAiNKMu_6FOqCg9WLnPh_H-skyvXk5EPKY",
  authDomain: "datamodel-1b560.firebaseapp.com",
  databaseURL: "https://datamodel-1b560.firebaseio.com",
  projectId: "datamodel-1b560",
  storageBucket: "datamodel-1b560.appspot.com",
  messagingSenderId: "528353048383",
  appId: "1:528353048383:web:7012cc2eb8ccf5c2cdc58a"
  });
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      onSelect: true,
      notes: null
    }
  }


  render() {
    return (
      <div className="app-container">
      
       {
          !this.state.selectedNote ?
          (<SidebarComponent
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote} />
          )
            :
           (
         <> 
          <Button 
            onClick={() => this.setState({selectedNoteIndex: null, selectedNote: null})}
            variant="contained" 
            color="primary">Casos</Button> 
           <MultiStep 
              selectedNote={this.state.selectedNote}
              selectedNoteIndex={this.state.selectedNoteIndex}
              notes={this.state.notes}
              noteUpdate={this.noteUpdate}/> 
             </>   
           )
        }
        
      {/*  <Button 
          onClick={this.init}
          variant="contained" 
          color="primary">Initi</Button>*/}
           
      </div>
    )
  }
  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log( 'App.js componentDidMount',notes);
        this.setState({ notes: notes });
      });
  }


 init = () => {
   console.log('init');
    firebase.firestore().collection('notes').doc(this.state.selectedNote.id).collection('fase1').add({
      datos:'aqui mero'
    });
 }

  selectNote = async (note, index)  =>{ 

  await this.setState({ selectedNoteIndex: index, selectedNote: note, onSelect: false})
   console.log(this.state.selectedNote.id);
    };
 
  noteUpdate = (id, noteObj) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
        domicilio: noteObj.domicilio,
        telefono: noteObj.telefono,
        email: noteObj.email,
        curp: noteObj.curp,
        rfc: noteObj.rfc,
        aseguradora: noteObj.aseguradora,
        ramo: noteObj.ramo,
        tiposeguro:noteObj.tiposeguro,
        monto: noteObj.monto,
        descripcion: noteObj.descripcion,
        contrato: noteObj.contrato,
        honorarios: noteObj.honorarios,
        anticipo: noteObj.anticipo,
        asignadoA: noteObj.asignadoA,
        recomendado: noteObj.recomendado,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
  newNote = async (title) => {
    const note = {
      title: title,
      body: '',
      domicilio:'',
      telefono:'',
      email:'',
      curp:'',
      rfc:'',
      aseguradora:'',
      ramo:'',
      tiposeguro:'',
      monto:'',
      descripcion: '',
      contrato: '',
      honorarios: '',
      anticipo: '',
      asignadoA: '',
      recomendado: ''
    };
    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        domicilio: note.domicilio,
        telefono: note.telefono,
        email: note.email,
        curp: note.curp,
        rfc: note.rfc,
        aseguradora: note.aseguradora,
        ramo: note.ramo,
        tiposeguro:note.tiposeguro,
        monto: note.monto,
        descripcion: note.descripcion,
        contrato: note.contrato,
        honorarios: note.honorarios,
        anticipo: note.anticipo,
        asignadoA: note.asignadoA,
        recomendado: note.recomendado,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
  }



  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      this.state.notes.length > 1 ?
        this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
        this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }
}
export default App