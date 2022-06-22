import PagSeguro from './PagSeguro'
import {Link} from 'react-router-dom'
import pixLogo from './../images/pix-logo.jpg'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'



const PurchaseForm = ({data}) => {

  console.log(data.delivery);

  const [showMethods, setShowMethods] = useState(false)

 
  const formfilled = () => {
    return (
      <>
        <h3 className="purchase__subtitle">Escolhe o Metodo de Pagamento:</h3>
        <div className="purchase__methods">
          <div className="purchase__method">
            <Link 
              className='pix__btn' 
              to="./../Pix"
            >
              <img src={pixLogo} alt=""  />  
            </Link>
          </div>
          <div className="purchase__method">
            <PagSeguro/>
          </div>
        </div>
      </>
      
    )
  }
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState()


  const [inputDisabled, setInputDisabled] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(phone)
     
    if (phone.length === 14 && phone.includes('+5521')) {
      setShowMethods(true)
      const userData = {
        name: name,
        email: email,
        phone: phone
      }
      console.log(userData)
      setInputDisabled(true)
      setButtonDisabled(true)

    } else {
      setShowMethods(false)
      alert('Favor digite o numero de telefone com DDD de RJ, exemplo (21) 21212-2121')
      setPhone()
    }
  }
  
  return(
    <div className="purchase">
      <h2 className="purchase__title">Por favor preencher seus dados:</h2>
      <div className="purchase__form">
        <form
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="senderName"
            title="Seu nome"
            placeholder="nome"
            minLength="3"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={inputDisabled}
          />
          <input 
            type="email"
            title="exemplo@exemplo.com"
            name="senderEmail" 
            placeholder="email" 
            required
            autoComplete="off"
            value={email}
            disabled={inputDisabled}
            onChange={(event) => setEmail(event.target.value)} 
          />
          <PhoneInput 
            name="senderPhone" 
            placeholder="telefone"
            title="(21) 21212-2121"
            maxLength="15"
            minLength="15"
            country="BR"
            autoComplete="off"
            value={phone}
            onChange={setPhone}
            type="tel"  
            requiredfdg
            disabled={inputDisabled}
          />
          
          {data.delivery !== 0 && 
            <>
              <h3 className="purchase__subtitle">Endereço de Entrega:</h3> 
              <input 
                name="shippingAddressPostalCode" 
                pattern="\d{5}[\-]?\d{3}" 
                type="text" 
                placeholder="CEP"
                title="22222-222"
                maxLength="9"
                required 
              />
              <input 
                name="shippingAddressCity" 
                type="text" 
                placeholder="cidade" 
                required  
              /> 
              <input 
                name="shippingAddressStreet" 
                type="text" 
                placeholder="rua" 
                required 
              />  
              <input name="shippingAddressNumber" type="number" placeholder="número" 
                required 
              />  
              <input name="shippingAddressComplement" type="text" placeholder="complemento" />
            </>   
          }
          <button 
            className="btn" 
            disabled={buttonDisabled}
          >Pronto!</button>
        </form>
        {showMethods && formfilled()} 
      </div>
    </div>
  )
}

export default PurchaseForm

// {/* <!-- Campos obrigatórios -->   */}
// <input name="receiverEmail" type="hidden" value="suporte@lojamodelo.com.br" />  
// <input name="currency" type="hidden" value="BRL" />  

// {/* <!-- Itens do pagamento (ao menos um item é obrigatório) -->   */}
// <input name="itemId1" type="hidden" value="0001" />  
// <input name="itemDescription1" type="hidden" value="Notebook Prata" />  
// <input name="itemAmount1" type="hidden" value="24300.00" />  
// <input name="itemQuantity1" type="hidden" value="1" />  
// <input name="itemWeight1" type="hidden" value="1000" />  
// <input name="itemId2" type="hidden" value="0002" />  
// <input name="itemDescription2" type="hidden" value="Notebook Rosa" />  
// <input name="itemAmount2" type="hidden" value="25600.00" />  
// <input name="itemQuantity2" type="hidden" value="2" />  
// <input name="itemWeight2" type="hidden" value="750" />  

// {/* <!-- Código de referência do pagamento no seu sistema (opcional) -->   */}
// <input name="reference" type="hidden" value="REF1234" />  
  
// {/* <!-- Informações de frete (opcionais) -->   */}
// <input name="shippingType" type="hidden" value="1" />  
// <input name="shippingAddressPostalCode" type="hidden" value="01452002" />  
// <input name="shippingAddressStreet" type="hidden" value="Av. Brig. Faria Lima" />  
// <input name="shippingAddressNumber" type="hidden" value="1384" />  
// <input name="shippingAddressComplement" type="hidden" value="5o andar" />  
// <input name="shippingAddressDistrict" type="hidden" value="Jardim Paulistano" />  
// <input name="shippingAddressCity" type="hidden" value="Sao Paulo" />  
// <input name="shippingAddressState" type="hidden" value="SP" />  
// <input name="shippingAddressCountry" type="hidden" value="BRA" />  

// {/* <!-- Dados do comprador (opcionais) -->   */}
// <input name="senderName" type="hidden" value="José Comprador" />  
// <input name="senderAreaCode" type="hidden" value="11" />  
// <input name="senderPhone" type="hidden" value="56273440" />  
// <input name="senderEmail" type="hidden" value="comprador@uol.com.br" />