import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser() {
    fetch('http://localhost:1337/api/resiter');
  }

  const inputStyle = `border placeholder-gray-400 focus:outline-none
  focus:border-black w-96 pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
  border-gray-300 rounded-md`;
  return (
    <div className="pl-24 pt-12">
      <h1 className="text-white font-bold text-6xl">Register</h1>
      <form onSubmit={registerUser}>
        <p className="text-white mt-4">Name</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          className={inputStyle}
        />
        <br />
        <p className="text-white mt-4">Email</p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className={inputStyle}
        />
        <br />
        <p className="text-white mt-4">Password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className={inputStyle}
        />
        <br />
        <button
          type="submit"
          value="Register"
          className="uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded mt-4"
        >
          Regiter
        </button>
      </form>
    </div>
  );
}

export default App;
