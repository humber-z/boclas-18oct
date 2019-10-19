import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const firebase = require('firebase'); 
require('firebase/firestore');



class Etapa2 extends React.Component{
  constructor(){
    super()
    this.state = {
         id:'',
         created: false, 
         numExped: '',
         fechaAdmis: null,
         coment1:'',
         fechaInfoViaElect: null,
         coment2:'',
         fechaAudConcil: null,
         coment3:'',
         fechaPrestInofAd: null,
         coment4:'',
         fechaAudienFinal: null,
         coment5:''
    }
    this.handleAdmision = this.handleAdmision.bind(this)
    this.handleInfoElectr = this.handleInfoElectr.bind(this)
    this.handleAudieConci = this.handleAudieConci.bind(this)
    this.handlePrestInofAd = this.handlePrestInofAd.bind(this)
    this.handleAudienFinal = this.handleAudienFinal.bind(this)
  }

componentDidMount = () => {
    firebase.firestore().collection('notes')
    .doc(this.props.selectedNote.id)
    .collection('fase2').onSnapshot(serverUpdate => {
       const note = serverUpdate.docs.map(doc => {
  
        const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        console.log(note[0])
        if(note[0])
        this.fullFields(note[0])
    })
  }

 fullFields = (data) => {
  this.setState({
        id: data.id,
        created: data.created, 
        numExped: data.numExped,
        fechaAdmis: data.fechaAdmis ? data.fechaAdmis.toDate() : null,
        coment1: data.coment1,
        fechaInfoViaElect: data.fechaInfoViaElect ? data.fechaInfoViaElect.toDate() : null,
        coment2: data.coment2,
        fechaAudConcil: data.fechaAudConcil ? data.fechaAudConcil.toDate() : null,
        coment3: data.coment3,
        fechaPrestInofAd: data.fechaPrestInofAd ? data.fechaPrestInofAd.toDate() : null,
        coment4: data.coment4,
        fechaAudienFinal: data.fechaAudienFinal ? data.fechaAudienFinal.toDate() : null,
        coment5: data.coment5
        })
}






handleAdmision(date){
  this.setState({fechaAdmis: date})
}
handleInfoElectr(date){
  this.setState({fechaInfoViaElect: date})
}
handleAudieConci(date){
  this.setState({fechaAudConcil: date})
}
handlePrestInofAd(date){
  this.setState({fechaPrestInofAd: date})
}
handleAudienFinal(date){
  this.setState({fechaAudienFinal: date})
}




render(){
  return(
    <div>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Grid 
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
             <TextField
               id="outlined-name"
               label="Numero del Siniestro"
               value={this.state.numExped} 
               onChange={(e) => this.setState({numExped: e.target.value})}
               margin="normal"
               variant="outlined"
               />
          <div>     
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha de Admision."
              value={this.state.fechaAdmis}
              onChange={this.handleAdmision}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="contained-button-file"
               multiple
               type="file"
               />
             <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" style={{margin: '20px'}}>
              Cargar archivo
             </Button>
             </label>
              <TextField
               id="outlined-name"
               label="Comentario"
               margin="normal"
               value={this.state.coment1}
               onChange={(e) => this.setState({coment1: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
         </div> 
         <div>   
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Informe via Electr."
              value={this.state.fechaInfoViaElect}
              onChange={this.handleInfoElectr}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="contained-button-file"
               multiple
               type="file"
               />
             <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" style={{margin: '20px'}}>
              Cargar archivo
             </Button>
             </label>
              <TextField
               id="outlined-name"
               label="Comentario"
               margin="normal"
                value={this.state.coment2}
               onChange={(e) => this.setState({coment2: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
          </div>
          <div> 
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Audiencia Concil."
              value={this.state.fechaAudConcil}
              onChange={this.handleAudieConci}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="contained-button-file"
               multiple
               type="file"
               />
             <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" style={{margin: '20px'}}>
              Cargar archivo
             </Button>
             </label>
              <TextField
               id="outlined-name"
               label="Comentario"
               margin="normal"
                value={this.state.coment3}
               onChange={(e) => this.setState({coment3: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
         </div>
         <div>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Info. Adicional"
              value={this.state.fechaPrestInofAd}
              onChange={this.handlePrestInofAd}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="contained-button-file"
               multiple
               type="file"
               />
             <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" style={{margin: '20px'}}>
              Cargar archivo
             </Button>
             </label>
              <TextField
               id="outlined-name"
               label="Comentario"
               margin="normal"
                value={this.state.coment4}
               onChange={(e) => this.setState({coment4: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
          </div>
          <div>  
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Audiencia Final"
              value={this.state.fechaAudienFinal}
              onChange={this.handleAudienFinal}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="contained-button-file"
               multiple
               type="file"
               />
             <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" style={{margin: '20px'}}>
              Cargar archivo
             </Button>
             </label>
              <TextField
               id="outlined-name"
               label="Comentario"
               margin="normal"
                value={this.state.coment5}
               onChange={(e) => this.setState({coment5: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
          </div> 
         </Grid>
       </MuiPickersUtilsProvider> 
        <Button 
          onClick={this.save}
          variant="contained" 
          color="primary">Guardar</Button>
    </div>
  )
}

save = async () =>{
if(!this.state.created){
 const newFromDB =await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase2').add({
        created: true,
        numExped: this.state.numExped,
        fechaAdmis: this.state.fechaAdmis,
        coment1: this.state.coment1,
        fechaInfoViaElect: this.state.fechaInfoViaElect,
        coment2: this.state.coment2,
        fechaAudConcil: this.state.fechaAudConcil,
        coment3: this.state.coment3,
        fechaPrestInofAd: this.state.fechaPrestInofAd,
        coment4: this.state.coment4,
        fechaAudienFinal: this.state.fechaAudienFinal,
        coment5: this.state.coment5
    });
    this.setState({id: newFromDB.id})
    }else{
await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase2').doc(this.state.id).update({

        numExped: this.state.numExped,
        fechaAdmis: this.state.fechaAdmis,
        coment1: this.state.coment1,
        fechaInfoViaElect: this.state.fechaInfoViaElect,
        coment2: this.state.coment2,
        fechaAudConcil: this.state.fechaAudConcil,
        coment3: this.state.coment3,
        fechaPrestInofAd: this.state.fechaPrestInofAd,
        coment4: this.state.coment4,
        fechaAudienFinal: this.state.fechaAudienFinal,
        coment5: this.state.coment5
    });
    }
    }



}
export default Etapa2