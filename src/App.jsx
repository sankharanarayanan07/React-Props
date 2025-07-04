import { useState } from 'react';
import Message from './Message.jsx';

function App() {
  // Create state variables
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
  <h1 className="text-2xl font-bold text-center text-cyan-900">Welcome to the Props Example</h1>

  <div>
    <h4 className="text-lg font-semibold">Name :</h4>
    <input
      type="text"
      placeholder="Please enter your name"
      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div>
    <h4 className="text-lg font-semibold">Age :</h4>
    <input
      type="number"
      placeholder="Please enter your age"
      className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-800"
      value={age}
      onChange={(e) => setAge(e.target.value)}
    />
  </div>

  {/* Pass input values as props */}
  <Message username={name} age={age} />
</div>

  );
}


export default App;

