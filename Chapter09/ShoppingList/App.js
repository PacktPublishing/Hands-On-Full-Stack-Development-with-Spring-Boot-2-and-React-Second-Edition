import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddItem from './AddItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function App() {
  const [items, setItems] = React.useState([]);

  const addItem = (item) => {
    setItems([item, ...items]);
  }

  const listItems = items.map((item, index) => 
    <ListItem key={index}>
    <ListItemText primary={item.product} secondary={item.amount} />
    </ListItem>);

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            SHOPPINGLIST
          </Typography>
        </Toolbar>
      </AppBar> 
      <AddItem addItem={addItem} />
      <List>{listItems}</List> 
    </div>
  );
}

export default App;
