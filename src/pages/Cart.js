import {Link} from "react-router-dom"
import Header from "../components/Header"
import Delivery from "../components/Delivery"
import RenderCartTable from "../components/RenderCartTable"
import Modal from "../components/Modal"
import { useState } from "react"

const Cart = () => {

  const storageCart = localStorage.getItem("cartItems")

  //HeaderCart
  const cost = () => {
    const newCosts = JSON.parse(storageCart)  
    function calcCost(arr) {
      let resCost = 0
      for ( let i = 0; i < arr.length; i++) resCost += arr[i].cost
      return resCost 
    }
    return storageCart ? calcCost(newCosts) : 0
  }

  const qty = () => {
    const newCosts = JSON.parse(storageCart)  
    function calcQty(arr) {
      let resQty = 0
      for ( let i = 0; i < arr.length; i++) resQty += arr[i].quantity.quantity
      return resQty 
    }
    return storageCart ? calcQty(newCosts) : 0
  }
  
  const [cartQty, setCartQty] = useState(qty)
  const [cartCost, setCartCost] = useState(cost)
  // const [total, setTotal] = useState(0)
  // const [del, setDel] = useState(0)
  let total = 0
  let del = 0
  
  const getTotal = () => {
    
  }
  const getDel = () => {

  }

  const clearCart = () => {
    setCartQty(0)
    setCartCost(0)
    localStorage.clear()
    window.location.reload()  
  }
  
  
  const pull_products = (costProducts) => {
    // setTotal(costProducts)  
  }
  
  const pull_delivery = (deliveryCost) => {
    // setDel(deliveryCost)
  }

  return (
    <div className="cart">
      <Header
        qty = {cartQty}
        cost = {cartCost}
        visibility = {false}  
      />
      <div className="container">
        <h2>Sua Cesta</h2>      
        <RenderCartTable
          func={pull_products}
         
        />
        <Delivery
          func={pull_delivery}
        />
        <h3>Total a pagar:</h3>
        <h2 className="cart__total">{total + del} Rs</h2>
      </div>
      <Link className="cart__btn btn" to={"/Home"}>Voltar ao Menu</Link>
      <button className="cart__btn btn" disabled={total > 0 ? false : true} >Pagar</button>
      <button 
        className="cart__btn btn"
        onClick={clearCart}
        disabled={total > 0 ? false : true}
      >
        Vaziar a cesta
      </button>
      <Modal/>
    </div>
  )
}



export default Cart