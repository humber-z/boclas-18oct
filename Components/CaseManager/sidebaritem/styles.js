const styles = theme => ({
  listItem: {
    cursor: 'pointer',
  },
  textSection: {
    display: 'flex',
    flex: '1'
  },   
  itemText:{
    padding: '5px',
   
  },
  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    '&:hover': {
      color: 'red'
    }
  }
});

export default styles;