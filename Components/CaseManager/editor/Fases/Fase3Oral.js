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


class Etapa3Oral extends React.Component{
  constructor(){
    super()
    this.state = {
         id:'',
         created: false, 
         numExped: '',
         nombNumJuz: '',
         fechaPrestDem: null,
         coment1: '',
         fechaRadicDem: null,
         coment2: '',
         fechaEmplazam: null,
         coment3: '',
         fechaContestDem: null,
         coment4: '',
         fechaAdmisConte: null,
         coment5: '',
         fechaContVistaConte: null,
         coment6: '',
         fechaAdmisConteVist: null,
         coment7: '',
         fechaAudiePrelim: null,
         coment8: '',
         fechaAudieJuicio: null,
         coment9: '',
         fechaSentencia: null,
         coment10: '',
         fechaPrestAmpar: null,
         coment11: '',
         fechaEjecuAmpar: null,
         coment12: '',
         fechaCumplim: null,
         coment13: '',
         resumenResol: '',
         fechaCumplim2: null,
         coment14: '',
         otrosResum: ''
    }
     this.handlePrestDem = this.handlePrestDem.bind(this)
     this.handleRadicDeman = this.handleRadicDeman.bind(this)
     this.handleEmplaza = this.handleEmplaza.bind(this)
     this.handleContestDeman = this.handleContestDeman.bind(this)
     this.handleAdmisiContest = this.handleAdmisiContest.bind(this)
     this.handleContestVistContest = this.handleContestVistContest.bind(this)
     this.handleAdisiContestLitis = this.handleAdisiContestLitis.bind(this)
     this.handleAudienPrel = this.handleAudienPrel.bind(this)
     this.handleAudiJuic = this.handleAudiJuic.bind(this)
     this.handlePresentAmp = this.handlePresentAmp.bind(this)
     this.handleSentencia = this.handleSentencia.bind(this)
     this.handleEjecAmpa = this.handleEjecAmpa.bind(this)
     this.handleCumpliment = this.handleCumpliment.bind(this)
     this.handleCumpliment2 = this.handleCumpliment2.bind(this)
 
  }

componentDidMount = () => {
    firebase.firestore().collection('notes')
    .doc(this.props.selectedNote.id)
    .collection('fase3O').onSnapshot(serverUpdate => {
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
         nombNumJuz: data.nombNumJuz,
         fechaPrestDem: data.fechaPrestDem ? data.fechaPrestDem.toDate() : null,
         coment1: data.coment1,
         fechaRadicDem: data.fechaRadicDem ? data.fechaRadicDem.toDate() : null,
         coment2: data.coment2,
         fechaEmplazam: data.fechaEmplazam ? data.fechaEmplazam.toDate() : null,
         coment3: data.coment3,
         fechaContestDem: data.fechaContestDem ? data.fechaContestDem.toDate() : null,
         coment4: data.coment4,
         fechaAdmisConte: data.fechaAdmisConte ? data.fechaAdmisConte.toDate() : null,
         coment5: data.coment5,
         fechaContVistaConte: data.fechaContVistaConte ? data.fechaContVistaConte.toDate() : null,
         coment6: data.coment6,
         fechaAdmisConteVist: data.fechaAdmisConteVist ? data.fechaAdmisConteVist.toDate() : null,
         coment7: data.coment7,
         fechaAudiePrelim: data.fechaAudiePrelim ? data.fechaAudiePrelim.toDate() : null,
         coment8:data.coment8,
         fechaAudieJuicio: data.fechaAudieJuicio ? data.fechaAudieJuicio.toDate() : null,
         coment9: data.coment9,
         fechaSentencia: data.fechaSentencia ? data.fechaSentencia.toDate() : null,
         coment10: data.coment10,
         fechaPrestAmpar: data.fechaPrestAmpar ? data.fechaPrestAmpar.toDate() : null,
         coment11: data.coment11,
         fechaEjecuAmpar: data.fechaEjecuAmpar ? data.fechaEjecuAmpar.toDate() : null,
         coment12: data.coment12,
         fechaCumplim: data.fechaCumplim ? data.fechaCumplim.toDate() : null,
         coment13: data.coment13,
         resumenResol: data.resumenResol,
         fechaCumplim2: data.fechaCumplim2 ? data.fechaCumplim2.toDate() : null,
         coment14: data.coment14,
         otrosResum: data.otrosResum
        })
}






handlePrestDem(date){
  this.setState({fechaPrestDem: date})
}
handleRadicDeman(date){
  this.setState({fechaRadicDem: date})
}
handleEmplaza(date){
  this.setState({fechaEmplazam: date})
}
handleContestDeman(date){
  this.setState({fechaContestDem: date})
}
handleAdmisiContest(date){
  this.setState({fechaAdmisConte: date})
}
handleContestVistContest(date){
  this.setState({fechaContVistaConte: date})
}
handleAdisiContestLitis(date){
  this.setState({fechaAdmisConteVist: date})
}
handleAudienPrel(date){
  this.setState({fechaAudiePrelim: date})
}
handleAudiJuic(date){
  this.setState({fechaAudieJuicio: date})
}
handleSentencia(date){
  this.setState({fechaSentencia: date})
}
handlePresentAmp(date){
  this.setState({fechaPrestAmpar: date})
}
handleEjecAmpa(date){
  this.setState({fechaEjecuAmpar: date})
}
handleCumpliment(date){
  this.setState({fechaCumplim: date})
}
handleCumpliment2(date){
  this.setState({fechaCumplim2: date})
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
               label="Numero del Expediente"
               value={this.state.numExped} 
               onChange={(e) => this.setState({numExped: e.target.value})}
               margin="normal"
               variant="outlined"
               />
            <TextField
               id="outlined-name"
               label="Nomb. y Num. de juzgado"
               value={this.state.nombNumJuz} 
               onChange={(e) => this.setState({nombNumJuz: e.target.value})}
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
              label="Fecha de Prst. de Demanda"
              value={this.state.fechaPrestDem}
              onChange={this.handlePrestDem}
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
              label="Fecha Radic. Demanda"
              value={this.state.fechaRadicDem}
              onChange={this.handleRadicDeman}
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
              label="Fecha de Emplazamiento"
              value={this.state.fechaEmplazam}
              onChange={this.handleEmplaza}
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
              label="Fecha Contest. Demanda"
              value={this.state.fechaContestDem}
              onChange={this.handleContestDeman}
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
              label="Fecha Admis. Contest. Demanda"
              value={this.state.fechaAdmisConte}
              onChange={this.handleAdmisiContest}
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
          








          <div>     
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha Contest. Vista Contest."
              value={this.state.fechaContVistaConte}
              onChange={this.handleContestVistContest}
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
               value={this.state.coment6}
               onChange={(e) => this.setState({coment6: e.target.value})}
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
              label="Fecha Admis. Contest. Vista..."
              value={this.state.fechaAdmisConteVist}
              onChange={this.handleAdisiContestLitis}
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
               value={this.state.coment7}
               onChange={(e) => this.setState({coment7: e.target.value})}
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
              label="Fecha Audiencia Preliminar"
              value={this.state.fechaAudiePrelim}
              onChange={this.handleAudienPrel}
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
               value={this.state.coment8}
               onChange={(e) => this.setState({coment8: e.target.value})}
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
              label="Fecha Audiencia Juicio"
              value={this.state.fechaAudieJuicio}
              onChange={this.handleAudiJuic}
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
               value={this.state.coment9}
               onChange={(e) => this.setState({coment9: e.target.value})}
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
              label="Fecha Sentencia"
              value={this.state.fechaSentencia}
              onChange={this.handleSentencia}
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
               value={this.state.coment10}
               onChange={(e) => this.setState({coment10: e.target.value})}
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
              label="Fecha Present. Amparo"
              value={this.state.fechaPrestAmpar}
              onChange={this.handlePresentAmp}
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
               value={this.state.coment11}
               onChange={(e) => this.setState({coment11: e.target.value})}
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
              label="Fecha Ejecutoria Amparo"
              value={this.state.fechaEjecuAmpar}
              onChange={this.handleEjecAmpa}
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
               value={this.state.coment12}
               onChange={(e) => this.setState({coment12: e.target.value})}
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
              label="Fecha Cumplimentadora"
              value={this.state.fechaCumplim}
              onChange={this.handleCumpliment}
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
               value={this.state.coment13}
               onChange={(e) => this.setState({coment13: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
         </div>
         <div>
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
               label="Resumen de Resolutivos"
               margin="normal"
               value={this.state.resumenResol}
               onChange={(e) => this.setState({resumenResol: e.target.value})}
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
              label="Fecha Cumplimentadora"
              value={this.state.fechaCumplim2}
              onChange={this.handleCumpliment2}
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
               value={this.state.coment14}
               onChange={(e) => this.setState({coment14: e.target.value})}
               variant="outlined"
               style={{width: '350px'}}
               />
          </div>
          <div>  
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
               label="Otros, Resumenes"
               margin="normal"
               value={this.state.otrosResum}
               onChange={(e) => this.setState({otrosResum: e.target.value})}
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
 const newFromDB =await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase3O').add({
         created: true,
         numExped: this.state.numExped,
         nombNumJuz: this.state.nombNumJuz,
         fechaPrestDem: this.state.fechaPrestDem,
         coment1: this.state.coment1,
         fechaRadicDem:  this.state.fechaRadicDem,
         coment2: this.state.coment2,
         fechaEmplazam:  this.state.fechaEmplazam,
         coment3: this.state.coment3,
         fechaContestDem:  this.state.fechaContestDem,
         coment4: this.state.coment4,
         fechaAdmisConte:  this.state.fechaAdmisConte,
         coment5: this.state.coment5,
         fechaContVistaConte:  this.state.fechaContVistaConte,
         coment6: this.state.coment6,
         fechaAdmisConteVist:  this.state.fechaAdmisConteVist,
         coment7: this.state.coment7,
         fechaAudiePrelim:  this.state.fechaAudiePrelim,
         coment8: this.state.coment8,
         fechaAudieJuicio:  this.state.fechaAudieJuicio,
         coment9: this.state.coment9,
         fechaSentencia:  this.state.fechaSentencia,
         coment10: this.state.coment10,
         fechaPrestAmpar:  this.state.fechaPrestAmpar,
         coment11: this.state.coment11,
         fechaEjecuAmpar:  this.state.fechaEjecuAmpar,
         coment12: this.state.coment12,
         fechaCumplim:  this.state.fechaCumplim,
         coment13: this.state.coment13,
         resumenResol: this.state.resumenResol,
         fechaCumplim2:  this.state.fechaCumplim2,
         coment14: this.state.coment14,
         otrosResum: this.state.otrosResum
    });
    this.setState({id: newFromDB.id})
    }else{
await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase3O').doc(this.state.id).update({

        numExped: this.state.numExped,
         nombNumJuz: this.state.nombNumJuz,
         fechaPrestDem: this.state.fechaPrestDem,
         coment1: this.state.coment1,
         fechaRadicDem:  this.state.fechaRadicDem,
         coment2: this.state.coment2,
         fechaEmplazam:  this.state.fechaEmplazam,
         coment3: this.state.coment3,
         fechaContestDem:  this.state.fechaContestDem,
         coment4: this.state.coment4,
         fechaAdmisConte:  this.state.fechaAdmisConte,
         coment5: this.state.coment5,
         fechaContVistaConte:  this.state.fechaContVistaConte,
         coment6: this.state.coment6,
         fechaAdmisConteVist:  this.state.fechaAdmisConteVist,
         coment7: this.state.coment7,
         fechaAudiePrelim:  this.state.fechaAudiePrelim,
         coment8: this.state.coment8,
         fechaAudieJuicio:  this.state.fechaAudieJuicio,
         coment9: this.state.coment9,
         fechaSentencia:  this.state.fechaSentencia,
         coment10: this.state.coment10,
         fechaPrestAmpar:  this.state.fechaPrestAmpar,
         coment11: this.state.coment11,
         fechaEjecuAmpar:  this.state.fechaEjecuAmpar,
         coment12: this.state.coment12,
         fechaCumplim:  this.state.fechaCumplim,
         coment13: this.state.coment13,
         resumenResol: this.state.resumenResol,
         fechaCumplim2:  this.state.fechaCumplim2,
         coment14: this.state.coment14,
         otrosResum: this.state.otrosResum
    });
    }
    }


}
export default Etapa3Oral