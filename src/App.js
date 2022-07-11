import './App.css';
import React, { useState } from 'react';

function App() {
  const [value,setValue] = useState('')
  const [post,setPost] = React.useState([
    {id:1,title:'pizza',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus, quo sed ab aliquid, ullam laudantium quos eum aut quibusdam voluptatibus dolores consectetur, minima fugiat expedita beatae sint illum ipsa.'},
    {id:2,title:'pan',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus, quo sed ab aliquid, ullam laudantium quos eum aut quibusdam voluptatibus dolores consectetur, minima fugiat expedita beatae sint illum ipsa.'},
    {id:3,title:'pancile',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus, quo sed ab aliquid, ullam laudantium quos eum aut quibusdam voluptatibus dolores consectetur, minima fugiat expedita beatae sint illum ipsa.'},
    {id:4,title:'book',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus, quo sed ab aliquid, ullam laudantium quos eum aut quibusdam voluptatibus dolores consectetur, minima fugiat expedita beatae sint illum ipsa.'}

  ])
  console.log(value)

  const pizza = post.filter(item=>{
    if(item.title.toLowerCase().includes(value.toLowerCase())){
      return true
    }else{
      return (
        false
      )
    }
  })
  return (
    <div className="App">
      <input type="text" onChange={e => setValue(e.target.value)} value={value}/>
     { pizza.map((item)=>{
        return(
          <div key={item.id}> 
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        )
      })  
     }
    </div>
  );
}

export default App;
