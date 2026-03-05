
import './App.css'
import { useState } from 'react'
import UserCard from './components/UserCard'

// Componente do React é ASSIM
// 1) Função (Código muitoooo antigos, pode ser uma classe)
// 2) Ele tem um return
// Fora do Return / Código JavaScript
// Dentro do Return / Código "HTML"

function App() {
  const [name, setName] = useState("Davi")
  const [email, setEmail] = useState("davi@mail.com")
  const [age, setAge] = useState(18)
  const [users, setUsers] = useState([])



  function handleSubmit(event) {
    event.preventDefault()// Evita que a página seja recarregada

    const newUser = {
      id: Date.now(),
      name,
      email,
      age
    }

    console.log(users)

    setUsers([...users, newUser])
    // ... / spread operator (manter todo mundo que ja tinha e adicionar o novo usuário)
  }

  return (
    //className
    <div className='app'>

      <h1>Cadastro de Usuários</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Nome'
          type='text'
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          placeholder='Email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          placeholder='Idade'
          type='number'
          value={age}
          onChange={event => setAge(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>

      </form>

      <div className='user-list'>

        {users.map( (user) => (

          <UserCard key = {user.id} user={user}/>

        ))}

      </div>

    </div>
  )
}

export default App
