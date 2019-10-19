const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  titleInput: {
    height: '30px',
    boxSizing: 'border-box',
    border: 'none',
    padding: '5px',
    fontSize: '18px',
    width: 'calc(100% - 300px)',
    backgroundColor: '#29487d',
    color: 'white',
    paddingLeft: '10px'
  },
  paper: {
    padding: theme.spacing(3, 2),
    boxShadow: '0px 0px 2px black',
    boxSizing: 'border-box',
    left: '0'
  },
  editorContainer: {
    height: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
});

export default styles;