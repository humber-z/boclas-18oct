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


class Etapa3Merc extends React.Component{
  constructor(){
    super()
    this.state = {
         created: false,
         numExped: '',
         nombNumJuz: '',
         fechaPrestDem: null,
         fechaRadicDem: null,
         fechaEmplazam: null,
         fechaContestDem: null,
         fechaAdmisConte: null,
         fechaContVistaConte: null,
         fechaAdmisConteVist: null,


         fechaImpugnDoc: null,
         fechaOfrecPrueDem: null,
         fechaAutoAdmiActora: null,
         fechaAutoAdmiDeman: null,
         resumen1:'',
         fechaApertuAleg: null,
         fechaCitaSent: null,
         fechaSentDefin: null,
         resumenResol: '',
         fechaPresentRecApe: null,
         fechaResSegInst: null,
         resumenReso2: '',
         fechaPresentAmp: null,
         fechaEjecAmp: null,
         resumenReso3: '',
         fechaCumplim: null,
         otrosResum: '',
         coment1:'',
         coment2:'',
         coment3:'',
         coment4:'',
         coment5:'',
         coment6:'',
         coment7:'',
         coment8:'',
         coment9:'',
         coment10:'',
         coment11:'',
         coment12:'',
         coment13:'',
         coment14:'',
         coment15:'',
         coment16:'',
         coment17:'',
         coment18:'',
         coment19:''
       
    }
     this.handlePrestDem = this.handlePrestDem.bind(this)
     this.handleRadicDeman = this.handleRadicDeman.bind(this)
     this.handleEmplaza = this.handleEmplaza.bind(this)
     this.handleContestDeman = this.handleContestDeman.bind(this)
     this.handleAdmisiContest = this.handleAdmisiContest.bind(this)
     this.handleContestVistContest = this.handleContestVistContest.bind(this)
     this.handleAdisiContestLitis = this.handleAdisiContestLitis.bind(this)
     this.handleImpugnDoc = this.handleImpugnDoc.bind(this)
     this.handleOfrecPruebDem = this.handleOfrecPruebDem.bind(this)
     this.handleAutoAdmitAct = this.handleAutoAdmitAct.bind(this)
     this.handleAutoAdmitDem = this.handleAutoAdmitDem.bind(this)
     this.handleCitaAleg = this.handleCitaAleg.bind(this)
     this.handleSentDef = this.handleSentDef.bind(this)
     //citacion sentencia
     this.handleCitSen = this.handleCitSen.bind(this)
     this.handlePresRecApel = this.handlePresRecApel.bind(this)
     this.handleResSegInst = this.handleResSegInst.bind(this)
     this.handlePresentAmp = this.handlePresentAmp.bind(this)
     this.handleEjecAmp = this.handleEjecAmp.bind(this)
     this.handleCumplim = this.handleCumplim.bind(this)
     this.handleApertAleg = this.handleApertAleg.bind(this)

 
  }

componentDidMount = () => {
    firebase.firestore().collection('notes')
    .doc(this.props.selectedNote.id)
    .collection('fase3M').onSnapshot(serverUpdate => {
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
        nombNumJuz: data.nombNumJuz,
        numExped: data.numExped,
        fechaPrestDem:  data.fechaPrestDem ? data.fechaPrestDem.toDate() : null,
        coment1: data.coment1,
        fechaRadicDem:  data.fechaRadicDem ? data.fechaRadicDem.toDate() : null,
        coment2: data.coment2,
        fechaEmplazam : data.fechaEmplazam ? data.fechaEmplazam.toDate() : null,
        coment3: data.coment3,
        fechaContestDem : data.fechaContestDem ? data.fechaContestDem.toDate() : null,
        coment4: data.coment4,
        fechaAdmisConte : data.fechaAdmisConte ? data.fechaAdmisConte.toDate() : null,
        coment5: data.coment5,
        fechaContVistaConte : data.fechaContVistaConte ? data.fechaContVistaConte.toDate() : null,
        coment6:data.coment6,
        fechaAdmisConteVist : data.fechaAdmisConteVist ? data.fechaAdmisConteVist.toDate() : null,
        coment7: data.coment7,
        fechaImpugnDoc: data.fechaImpugnDoc ? data.fechaImpugnDoc.toDate() : null,
        coment8: data.coment8,
        fechaOfrecPrueDem : data.fechaOfrecPrueDem ? data.fechaOfrecPrueDem.toDate() : null,
        coment9: data.coment9,
        fechaAutoAdmiActora  : data.fechaAutoAdmiActora  ? data.fechaAutoAdmiActora.toDate() : null,
        coment10: data.coment10,
        fechaAutoAdmiDeman  : data.fechaAutoAdmiDeman  ? data.fechaAutoAdmiDeman.toDate() : null,
        coment11: data.coment11,
        resumen1  : data.resumen1  ,
        coment12: data.coment12,
        fechaApertuAleg  : data.fechaApertuAleg ? data.fechaApertuAleg.toDate() : null, 
        coment13: data.coment13,
        fechaCitaSent  : data.fechaCitaSent ? data.fechaCitaSent.toDate() : null, 
        coment14: data.coment14,
        fechaSentDefin  : data.fechaSentDefin ? data.fechaSentDefin.toDate() : null, 
        coment15: data.coment15,
        resumenResol  : data.resumenResol  ,
        fechaResSegInst : data.fechaResSegInst ? data.fechaResSegInst.toDate() : null,
        coment16: data.coment16,
        fechaPresentRecApe   : data.fechaPresentRecApe ? data.fechaPresentRecApe.toDate() : null, 
        coment17: data.coment17,
        resumenReso2   : data.resumenReso2  ,
        coment18: data.coment18,
        fechaPresentAmp  : data.fechaPresentAmp ? data.fechaPresentAmp.toDate() : null, 
        coment19: data.coment19,
        fechaEjecAmp  : data.fechaEjecAmp ? data.fechaEjecAmp.toDate() : null, 
       
        resumenReso3  : data.resumenReso3  ,
      
        fechaCumplim  : data.fechaCumplim ? data.fechaCumplim.toDate() : null, 
      
        otrosResum  : data.otrosResum,
       

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
handleImpugnDoc(date){
  this.setState({fechaImpugnDoc: date})
}
handleOfrecPruebDem(date){
  this.setState({fechaOfrecPrueDem: date})
}
handleAutoAdmitAct(date){
  this.setState({fechaAutoAdmiActora: date})
}
handleAutoAdmitDem(date){
  this.setState({fechaAutoAdmiDeman: date})
}
handleApertAleg(date){
  this.setState({fechaApertuAleg: date})
}
handleCitaAleg(date){
  this.setState({fechaApertuAleg: date})
    
}
handleSentDef(date){
  this.setState({fechaSentDefin: date})
}
handleCitSen(date){
  /////////////////////////////////////////////////////
  this.setState({fechaCitaSent: date})
}
handlePresRecApel(date){
  this.setState({fechaPresentRecApe: date})
}
handleResSegInst(date){
  this.setState({fechaResSegInst: date})
}
handlePresentAmp(date){
  this.setState({fechaPresentAmp: date})
}
handleEjecAmp(date){
  this.setState({fechaEjecAmp: date})
}
handleCumplim(date){
  this.setState({fechaCumplim: date})
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
               value={this.state.coment1}
               onChange={(e) => this.setState({coment1: e.target.value})}
               margin="normal"
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
                value={this.state.coment2}
               onChange={(e) => this.setState({coment2: e.target.value})}
               margin="normal"
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
               value={this.state.coment3}
               onChange={(e) => this.setState({coment3: e.target.value})}
               margin="normal"
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
               value={this.state.coment4}
               onChange={(e) => this.setState({coment4: e.target.value})}
               margin="normal"
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
               value={this.state.coment5}
               onChange={(e) => this.setState({coment5: e.target.value})}
               margin="normal"
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
               value={this.state.coment6}
               onChange={(e) => this.setState({coment6: e.target.value})}
               margin="normal"
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
               value={this.state.coment7}
               onChange={(e) => this.setState({coment7: e.target.value})}
               margin="normal"
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
              label="Fecha Impugnacion Documento"
              value={this.state.fechaImpugnDoc}
              onChange={this.handleImpugnDoc}
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
               value={this.state.coment8}
               onChange={(e) => this.setState({coment8: e.target.value})}
               margin="normal"
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
              label="Fecha Ofrec. Pruebas Demand."
              value={this.state.fechaOfrecPrueDem}
              onChange={this.handleOfrecPruebDem}
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
               value={this.state.coment9}
               onChange={(e) => this.setState({coment9: e.target.value})}
               margin="normal"
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
              label="Fecha Auto Admite Actora"
              value={this.state.fechaAutoAdmiActora}
              onChange={this.handleAutoAdmitAct}
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
               value={this.state.coment10}
               onChange={(e) => this.setState({coment10: e.target.value})}
               margin="normal"
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
              label="Fecha Auto Admite Demanda"
              value={this.state.fechaAutoAdmiDeman}
              onChange={this.handleAutoAdmitDem}
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
               value={this.state.coment11}
               onChange={(e) => this.setState({coment11: e.target.value})}
               margin="normal"
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
               label="Resumen"
               value={this.state.resumen1}
               onChange={(e) => this.setState({resumen1: e.target.value})}
               margin="normal"
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
              label="Fecha Apertura Alegatos"
              value={this.state.fechaApertuAleg}
              onChange={this.handleCitaAleg}
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
               value={this.state.coment12}
               onChange={(e) => this.setState({coment12: e.target.value})}
               margin="normal"
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
              label="Fecha Citacion Sentencia"
              value={this.state.fechaCitaSent}
              onChange={this.handleCitSen}
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
               value={this.state.coment13}
               onChange={(e) => this.setState({coment13: e.target.value})}
               margin="normal"
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
              label="Fecha Sentencia Definitiva"
              value={this.state.fechaSentDefin}
              onChange={this.handleSentDef}
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
               value={this.state.coment14}
               onChange={(e) => this.setState({coment14: e.target.value})}
               margin="normal"
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
               value={this.state.resumenResol}
               onChange={(e) => this.setState({resumenResol: e.target.value})}
               margin="normal"
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
              label="Fecha Present. Rec. Apel."
              value={this.state.fechaPresentRecApe}
              onChange={this.handlePresRecApel}
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
               value={this.state.coment15}
               onChange={(e) => this.setState({coment15: e.target.value})}
               margin="normal"
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
              label="Fecha Reso. Segu. Inst."
              value={this.state.fechaResSegInst}
              onChange={this.handleResSegInst}
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
               value={this.state.coment16}
               onChange={(e) => this.setState({coment16: e.target.value})}
               margin="normal"
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
               label="Resumen Reso.(Seg. Inst)"
               value={this.state.resumenReso2}
               onChange={(e) => this.setState({resumenReso2: e.target.value})}
               margin="normal"
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
              value={this.state.fechaPresentAmp}
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
               value={this.state.coment17}
               onChange={(e) => this.setState({coment17: e.target.value})}
               margin="normal"
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
              label="Fecha Ejecutoria Amp."
              value={this.state.fechaEjecAmp}
              onChange={this.handleEjecAmp}
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
               value={this.state.coment18}
               onChange={(e) => this.setState({coment18: e.target.value})}
               margin="normal"
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
               label="Resumen Resolutivos"
               value={this.state.resumenReso3}
               onChange={(e) => this.setState({resumenReso3: e.target.value})}
               margin="normal"
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
              onChange={this.handleCumplim} 
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
               value={this.state.coment19}
               onChange={(e) => this.setState({coment19: e.target.value})}
               margin="normal"
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
               label="Otros Resumenes"
               value={this.state.otrosResum}
               onChange={(e) => this.setState({otrosResum: e.target.value})}
               margin="normal"
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
 const newFromDB =await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase3M').add({
        created: true,
        id: this.props.selectedNote.id,
        nombNumJuz: this.state.nombNumJuz,
        numExped: this.state.numExped,
        coment1: this.state.coment1,
        fechaPrestDem:  this.state.fechaPrestDem ,
        coment2: this.state.coment2,
        fechaRadicDem:  this.state.fechaRadicDem ,
        coment3: this.state.coment3,
        fechaEmplazam : this.state.fechaEmplazam ,
        coment4: this.state.coment4,
        fechaContestDem : this.state.fechaContestDem ,
        coment5: this.state.coment5,
        fechaAdmisConte : this.state.fechaAdmisConte ,
        coment6: this.state.coment6,
        fechaContVistaConte : this.state.fechaContVistaConte ,
        coment7: this.state.coment7,
        fechaAdmisConteVist : this.state.fechaAdmisConteVist ,
        coment8: this.state.coment8,
        fechaImpugnDoc: this.state.fechaImpugnDoc ,
        coment9: this.state.coment9,
        fechaOfrecPrueDem : this.state.fechaOfrecPrueDem ,
        coment10: this.state.coment10,
        fechaAutoAdmiActora  : this.state.fechaAutoAdmiActora  ,
        coment11: this.state.coment11,
        fechaAutoAdmiDeman  : this.state.fechaAutoAdmiDeman  ,
        coment12: this.state.coment12,
        resumen1  : this.state.resumen1  ,
        coment13: this.state.coment13,
        fechaApertuAleg  : this.state.fechaApertuAleg  ,
        coment14: this.state.coment14,
        fechaCitaSent  : this.state.fechaCitaSent  ,
        coment15: this.state.coment15,
        fechaSentDefin  : this.state.fechaSentDefin  ,
        fechaResSegInst : this.state.fechaResSegInst,
        coment16: this.state.coment16,
        resumenResol  : this.state.resumenResol  ,
        coment17: this.state.coment17,
        fechaPresentRecApe   : this.state.fechaPresentRecApe ,
        coment18: this.state.coment18,
        resumenReso2   : this.state.resumenReso2  ,
        coment19: this.state.coment19,
        fechaPresentAmp  : this.state.fechaPresentAmp  ,
        fechaEjecAmp  : this.state.fechaEjecAmp  ,
        resumenReso3  : this.state.resumenReso3  ,
        fechaCumplim  : this.state.fechaCumplim  ,
        otrosResum  : this.state.otrosResum,
        
    });
    this.setState({id: newFromDB.id})
    }else{
await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase3M').doc(this.state.id).update({

        numExped: this.state.numExped,
        nombNumJuz: this.state.nombNumJuz,
        coment1: this.state.coment1,
        fechaPrestDem:  this.state.fechaPrestDem ,
        coment2: this.state.coment2,
        fechaRadicDem:  this.state.fechaRadicDem ,
        coment3: this.state.coment3,
        fechaEmplazam : this.state.fechaEmplazam ,
        coment4: this.state.coment4,
        fechaContestDem : this.state.fechaContestDem ,
        coment5: this.state.coment5,
        fechaAdmisConte : this.state.fechaAdmisConte ,
        coment6: this.state.coment6,
        fechaContVistaConte : this.state.fechaContVistaConte ,
        coment7: this.state.coment7,
        fechaAdmisConteVist : this.state.fechaAdmisConteVist ,
        coment8: this.state.coment8,
        fechaImpugnDoc: this.state.fechaImpugnDoc ,
        coment9: this.state.coment9,
        fechaOfrecPrueDem : this.state.fechaOfrecPrueDem ,
        coment10: this.state.coment10,
        fechaAutoAdmiActora  : this.state.fechaAutoAdmiActora  ,
        coment11: this.state.coment11,
        fechaAutoAdmiDeman  : this.state.fechaAutoAdmiDeman  ,
        coment12: this.state.coment12,
        resumen1  : this.state.resumen1  ,
        coment13: this.state.coment13,
        fechaApertuAleg  : this.state.fechaApertuAleg  ,
        coment14: this.state.coment14,
        fechaCitaSent  : this.state.fechaCitaSent  ,
        coment15: this.state.coment15,
        fechaSentDefin  : this.state.fechaSentDefin  ,
        fechaResSegInst : this.state.fechaResSegInst,
        coment16: this.state.coment16,
        resumenResol  : this.state.resumenResol  ,
        coment17: this.state.coment17,
        fechaPresentRecApe   : this.state.fechaPresentRecApe ,
        coment18: this.state.coment18,
        resumenReso2   : this.state.resumenReso2  ,
        coment19: this.state.coment19,
        fechaPresentAmp  : this.state.fechaPresentAmp  ,
        fechaEjecAmp  : this.state.fechaEjecAmp  ,
        resumenReso3  : this.state.resumenReso3  ,
        fechaCumplim  : this.state.fechaCumplim  , 
        otrosResum  : this.state.otrosResum,
       
    });
    }
    }
}
export default Etapa3Merc