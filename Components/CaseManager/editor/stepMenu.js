import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Switcher from './switcherApp';
import EditorComponent from './editor';

 

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1200,
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
     <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Informacion General" onClick={() => setValue(0)}/>
          <Tab label="Etapa 1 Reclm. Directa" onClick={() =>  setValue(1)}/>
          <Tab label="Etapa 2 Reclm. Admin." onClick={() =>  setValue(2)}/>
          <Tab label="Etapa 3 Demanda Judicial"  onClick={() =>  setValue(3)}/>
          <Tab label="Etapa 3 Demanda Oral"  onClick={() =>  setValue(4)}/>
        </Tabs>
        
    </Paper>
    <Switcher 
       index={value}
       selectedNote={props.selectedNote}
       noteUpdate={props.noteUpdate}
       selectedNoteIndex={props.selectedNoteIndex}
       notes={props.notes}
       /> 
    </div>
  );
}
