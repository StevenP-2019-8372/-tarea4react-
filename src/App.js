import React, {Component} from 'react';
import './App.css';
class App extends Component{
  render() {
    return <div className="app-contenedora">
      <h1><center>Tarea 4 Agenda React</center></h1> 
      
		     
      <Agregar/>
      <Ver/>
    </div>
  }
}
class Ver extends Component{
  
  render() {
    return <div>
      
  <ul>
    <li id="list"></li>
  </ul>
  </div>
  
  }
  
}
function vercont(){
  fetch('http://www.raydelto.org/agenda.php').then(data => data.json()).then(data => {

      const list = document.getElementById('list')
      for (const userInfo of data) {
          const listItem = document.createElement('li')
          listItem.textContent = `Nombre: ${userInfo.nombre} Apellido: ${userInfo.apellido} Telefono: ${userInfo.telefono}`
          list.appendChild(listItem)
      }
  })

  
}
function Guardarcont() {
  const name = document.getElementById('name')
  const lastName = document.getElementById('lastName')
  const phone = document.getElementById('phone')

  const newContact = {
      nombre: name.value,
      apellido: lastName.value,
      telefono: phone.value,
  }

  fetch('http://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(newContact),
      headers: {
          "content-type": "text/plain"
      }
  }).then(res => res.json()).then(res => console.log(res))
}

class Agregar extends Component{
 render(){
   return<div id="form-container" className="secondary-container">
   <form action="">
   <button type="button" class="bt" id="button1" onClick={vercont}>Ver Contactos</button><br/>
   <input className="text-field" type="text" placeholder="Introduzca su nombre" id="name" /><br/>
   <input className="text-field" type="text" placeholder="Introduzca su apellido" id="lastName" /><br/>
   <input className="text-field" type="text" placeholder="Introduzca su numero de telefono" id="phone" /><br/>
   <button type="button" class="bh" id="button" onClick={Guardarcont}>Guardar Contacto</button>
   </form>
   
 </div>
 }
}
export default App;
