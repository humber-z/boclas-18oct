import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";



class Prueba1 extends React.Component {
  constructor(){
    super()
    this.state={
      data: [],
      fecha: '',
      etapa: '',
      expediente: '',
      autoridadInst: '',
      nombreAutoridad: '',
      etapaProc: ''
    }  
    this.agregarNuevo = this.agregarNuevo.bind(this)
  }
agregarNuevo(){
 
this.setState({
  data: this.state.data.concat([[
    this.state.fecha, 
    this.state.etapa, 
    this.state.expediente, 
    this.state.autoridadInst,
    this.state.nombreAutoridad, 
    this.state.etapaProc]]),
  fecha: '',
  etapa: '',
  autoridadInst: '',
  nombreAutoridad: '',
  etapaProc: '',
  expediente: ''
})





}
  render() {
    const columns = [
      {
        name: "Fecha",
        options: {
          filter: true
        }
      },
      {
        name: "Etapa",
        options: {
          filter: true
        }
      },
      {
        name: "Expediente",
        options: {
          filter: true
        }
      },
        {
        name: "Autoridad/Institucion",
        options: {
          filter: true
        }
      },
       {
        name: "Nomb. de la Autoridad",
        options: {
          filter: true
        }
      },
       {
        name: "Etapa Procesal Y/O Administrativa",
        options: {
          filter: true
        }
      }
    ];


    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };
    console.log(this.state.data)
    return (
      <div>
         <input 
          value={this.state.fecha}
          onChange={(e) => this.setState({fecha: e.target.value})} 
          placeHolder={"Fecha"}/>
         <input 
         value={this.state.etapa} 
         onChange={(e) => this.setState({etapa:e.target.value})} 
         placeHolder={"Etapa"}/>
         <input 
         value={this.state.expediente} 
         onChange={(e) => this.setState({expediente: e.target.value})} 
         placeHolder={"Expediente"}/>
         <input 
         value={this.state.autoridadInst} 
         onChange={(e) => this.setState({autoridadInst: e.target.value})}
          placeHolder={"Autoridad/Institucion"}/>
         <input 
         value={this.state.nombreAutoridad} 
         onChange={(e) => this.setState({nombreAutoridad:e.target.value})} 
         placeHolder={"Nombre de la Autoridad"}/>
         <input 
         value={this.state.etapaProc} 
         onChange={(e) => this.setState({etapaProc: e.target.value})}
          placeHolder={"Etapa Procesal Y/O Administrativa"}/>
         <button onClick={this.agregarNuevo}>Agregar</button>
      <MUIDataTable
        title={"Etapa 1 Reclamacion Directa"}
        data={this.state.data}
        columns={columns}
        options={options}
      />
      </div>
    );
  }
}
export default Prueba1