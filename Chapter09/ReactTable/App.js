import React, { useState } from 'react';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css';

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchData = () => {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    fetch(url)
    .then(response => response.json()) 
    .then(responseData => {
      setData(responseData.items); 
    }); 
  }
  
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }  

  const btnClick = (value) => {
    alert(value);
  }

  const columns = [{
    Header: 'Name', // Header of the column
    accessor: 'full_name' // Value accessor
  }, {
    Header: 'URL',
    accessor: 'html_url',
  }, {
    Header: 'Owner',
    accessor: 'owner.login',
  }, {
    id: 'button',
    sortable: false,
    filterable: false,
    width: 100,
    accessor: 'full_name',
    Cell: ({value}) => (<button onClick={() => {btnClick(value)}}>Press me</button>)
}]

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={fetchData} value={keyword} >fetch</button>
      <ReactTable data={data} columns={columns} filterable={true} defaultPageSize = {10} />
    </div>
  );
}

export default App;
