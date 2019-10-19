import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogContent from '@material-ui/core/DialogContent';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import {storage} from './firebase';
const firebase = require('firebase'); 
require('firebase/firestore');
//require('firebase/storage');








class Etapa1 extends React.Component{
   constructor(){
     let fiu=[]
     super()
       this.state = {

        id: '', 
        created: false, 
        numSinsitro: '',
        fechaReclamo: null,
        coment1: '',
        fechaRespueRecl: null,
        coment2: '',
        fechaInfoAdici: null,
        coment3: '',
        fechaInformeAdic: null,
        coment4: '',
        archivo:'',
        url: [],
        open: false,
        open2: false,
        docs1: []

    
       };

       this.handleReclamo = this.handleReclamo.bind(this)
       this.handleRespRec = this.handleRespRec.bind(this)
       this.handleInfoAdic = this.handleInfoAdic.bind(this)
       this.handleInfoFin = this.handleInfoFin.bind(this)
       this.onChangeHandler = this.onChangeHandler.bind(this)
      // this.getUrls = this.getUrls.bind(this)
   }

componentDidMount = () => {
    firebase.firestore().collection('notes')
    .doc(this.props.selectedNote.id)
    .collection('fase1').onSnapshot(serverUpdate => {
       const note = serverUpdate.docs.map(doc => {
  
        const data = doc.data();
          data['id'] = doc.id;
          return data;
        });
        console.log(note[0])
        if(note[0])
        this.fullFields(note[0])
    })
    
   
   const storageRef = firebase.storage().ref(this.props.selectedNote.id);
    // Create a reference under which you want to list
const listRef = storageRef.child('pdf/');

// Find all the prefixes and items.
 const list = listRef.listAll().then((res) => {
 // res.prefixes.forEach(function(folderRef) {
    // All the prefixes under listRef.  
    // You may call listAll() recursively on them.
 // });
   const data =res.items; 
   return data;
  //this.init(res.items)
  //this.setState.({docs1: res.items})
  res.items.forEach(function(itemRef) {
  itemRef.fullPath.getDownloadURL().then((url) => console.log('urls',url))
 // const url=  storageRef.child(itemRef.fullPath).getDownloadURL();
  // `url` is the download URL for 'images/stars.jpg'
  console.log(items.fullPath)
  //  this.setState.docs1.push(res.items)
   //this.setState({ docs1: [...this.state.docs1, itemRef] })

  });

 
   console.log(res.fullPath) 
   console.log('res.fullPath') 
    
  
}).catch(function(error) {
  // Uh-oh, an error occurred!
});
//console.log('lista',list)
this.init(list)
  }

init = async (data) => {
   const arr = []
 await  data.then((result) => {
    // here you can use the result of promiseB
     console.log('init',result)
    // 
     //console.log('state',this.state.docs1)
   arr = result
});
   this.setState({docs1:  arr})
  console.log('state',this.state.docs1)

   fiu=this.state.url
   console.log('carga de url en la var',fiu)
}

 fullFields = (data) => {
  this.setState({
        id: data.id,
        created: data.created, 
        numSinsitro: data.numSinsitro,
        fechaReclamo: data.fechaReclamo ? data.fechaReclamo.toDate() : null,
        coment1: data.coment1,
        fechaRespueRecl: data.fechaRespueRecl ? data.fechaRespueRecl.toDate() : null,
        coment2: data.coment2,
        fechaInfoAdici: data.fechaInfoAdici ? data.fechaInfoAdici.toDate() : null,
        coment3: data.coment3,
        fechaInformeAdic: data.fechaInformeAdic ? data.fechaInformeAdic.toDate() : null,
        coment4: data.coment4,
        archivo: 'fullfields step',
        url : data.url
        })

        console.log( data.url )
}



handleReclamo(date){
    this.setState({fechaReclamo: date})
}

handleRespRec(date){
  this.setState({fechaRespueRecl: date})
}

handleInfoAdic(date){
  this.setState({fechaInfoAdici: date})
}

handleInfoFin(date){
  this.setState({fechaInformeAdic: date})
}

openDialog() {

        this.setState({ open: true });

    }

/*getUrls= path =>{
// Create a reference to the file we want to download
var starsRef = storageRef.child(path);
const urldir=''
// Get the download URL
starsRef.getDownloadURL().then(function(url) {
  urldir=url
  // Insert url into an <img> tag to "download"
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});
return urldir
}*/


render(){
  return(
    <div style={{}}>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Grid 
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
            <TextField
               style={{display: 'felx-start'}}
               id="outlined-name"
               label="Numero del Siniestro"
               value={this.state.numSinsitro} 
               onChange={(e) => this.setState({numSinsitro: e.target.value})}
               margin="normal"
               variant="outlined"

               />
        <div >
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha de Reclamo ante..."
              value={this.state.fechaReclamo}
              onChange={this.handleReclamo}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <input
               accept="pdf/*"
               style={{display: 'none'}}
               id="fechaReclamo"
               key="fechaReclamo"
               multiple
               type="file"
               onChange={this.onChangeHandler}/>
               
             <label htmlFor="fechaReclamo">
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
            <Button 
              onClick={() => this.setState({open: true})}
              variant="contained" 
              style={{margin: '20px'}}
              color="primary">Ver Archivos</Button>
             <Dialog open={this.state.open} >
                  { this.state.url.length>0 && (this.state.url.map (item =>{
                    console.log('dialog',item.name)
                   return( <DialogContent key={item.name}><a href={item.downloadURL} target = "blank">{item.name}</a> 
             <Button 
              onClick={() => this.setState({open1: true})}
              variant="contained" 
              style={{margin: '20px'}}
              color="primary">Abrir</Button></DialogContent>)
                   }))
                   }
                     
             
 
                  
            <Button variant="outlined" color="primary" 
            onClick={()=>{this.setState({open: false})}}>
        cerrar
       </Button>
            </Dialog> 
       <object data=''></object>
           <h1>PDF Example with iframe</h1>
    <iframe src="gs://datamodel-1b560.appspot.com/VohUSbiGtCdFoNOtIZq7/fechaReclamo/ACUA SARA NAYMEA REY.pdf" width="100%" height="500px">
    </iframe>
       </div>
       <div >
             <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Fecha de Resp. de Reclamo"
              value={this.state.fechaRespueRecl}
              onChange={this.handleRespRec}
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
              label="Fecha Info. Adicional"
              value={this.state.fechaInfoAdici}
              onChange={this.handleInfoAdic}
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
              label="Fecha Info. Final"
              value={this.state.fechaInformeAdic}
              onChange={this.handleInfoFin}
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
               onChange={(e) => this.setState({coment4: e.target.value})
               }
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

  console.log('fiu en el save',fiu)
if(!this.state.created){
 const newFromDB = await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase1').add({
       created: true,
       numSinsitro: this.state.numSinsitro,
        fechaReclamo: this.state.fechaReclamo,
        coment1: this.state.coment1,
        fechaRespueRecl: this.state.fechaRespueRecl,
        coment2: this.state.coment2,
        fechaInfoAdici: this.state.fechaInfoAdici,
        coment3: this.state.coment3,
        fechaInformeAdic: this.state.fechaInformeAdic,
        coment4: this.state.coment4,
        url: fiu
    });
    this.setState({id: newFromDB.id})
    }else{
await firebase.firestore().collection('notes').doc(this.props.selectedNote.id).collection('fase1').doc(this.state.id).update({
        numSinsitro: this.state.numSinsitro,
        fechaReclamo: this.state.fechaReclamo,
        coment1: this.state.coment1,
        fechaRespueRecl: this.state.fechaRespueRecl,
        coment2: this.state.coment2,
        fechaInfoAdici: this.state.fechaInfoAdici,
        coment3: this.state.coment3,
        fechaInformeAdic: this.state.fechaInformeAdic,
        coment4: this.state.coment4,
        url: fiu

    });
    }


  
    
}


onChangeHandler= async (event)=>{
    const gui=event.target.id
    console.log(event.target.files[0])
    console.log(this.state.archivo)

    await this.setState({archivo: event.target.files[0]})
    console.log(this.state.archivo)
    console.log(this.state.archivo.name)
    console.log(gui)
   
    const arch = this.state.archivo;
    const name=arch.name
    let metadata = {
  contentType: 'document/pdf'
                      };

  const storageRef = firebase.storage().ref(this.props.selectedNote.id);
  let uploadTask = storageRef.child(gui+'/' + arch.name).put(arch, metadata);


  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    ()=>{this.setState({open2: true})}
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        
      //setTimeout(function() {w.close();}, 5000)
        break;
    }
    ()=>{ this.setState({open2: false})}
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      console.log('User doesnt have permission to access the object');
      break;

    case 'storage/canceled':
      // User canceled the upload
       console.log('User canceled the upload');
      break;

    

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
       console.log('Unknown error occurred, inspect error.serverResponse');
      break;
  }
}, ()=> {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    console.log('antes del push', fiu)
    const b={downloadURL, gui,name}
    fiu.push(b)
    console.log('la url no llega pa aca', fiu)
 });
   
});

this.save
}



}
export default Etapa1