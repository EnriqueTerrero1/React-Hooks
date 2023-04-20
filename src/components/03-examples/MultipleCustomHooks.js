import React  from 'react'
import '../02-useEffect/effects.css'
import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'
export default function MultipleCustomHooks() {

  const{counter,increment,decrement}=useCounter(1);
    
  const {loading,data}=  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  // console.log(state)
  console.log(loading);
  const {author,quote}= !!data && data[0];

  console.log(author,quote)


  return (
    <div>
      <h1>Breaking Bad quotes!!</h1>
      <hr/>
      {
        loading ?
          (<div className='alert alert-info text-center '>
          Loading.....
      </div>):
      (<blockquote className='blockquote text-right'>
        <p className='mb-4'>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
         </blockquote>)
      }
        <button className='btn btn-danger' onClick={decrement}>Anterior quote</button>
       <button onClick={increment} className='btn btn-primary'>Siguiente quote</button>
    </div>
  )
}
