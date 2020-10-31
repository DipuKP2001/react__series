import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList(){
  return (
    <section className="book-list">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = ()=>{
  return (
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
}

const Image = ()=>(
  <img src="https://images-eu.ssl-images-amazon.com/images/I/81B0tZK01FL._AC_UL200_SR200,200_.jpg" alt="img"/>
);
const Title = ()=> <h1>Diary of a wimpy kid</h1>
const Author = ()=> <p style={{color:'#617d98'}}>Jeff Kinney</p>


ReactDom.render(<BookList/>,document.getElementById('root'))
