
import { useEffect, useState } from 'react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Change this password to something only you know
  const ADMIN_PASSWORD = 'Maguire80&';

  const handleLogin = (e) => { 
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true'); // stay logged in
    } else {
      setError('Wrong password');
    }
  };

  useEffect(() => {
    // Check if already logged in
    if (localStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    setLoading(true);
    fetch('http://localhost:5000/api/schedule')
      .then(res => res.json())
      .then(data => {
        setCalls(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [isAuthenticated]);

const handleDelete = async (id) => {
  if (!window.confirm('Are you sure you want to delete this call?')) return;

  try {
    const response = await fetch(`http://localhost:5000/api/schedule/${id}`, {
      method: 'DELETE',
    });

    const data = await response.json();
    console.log('Delete response:', data); // ← Check this in browser console

    if (data.success) {
      setCalls(prev => prev.filter(call => call.id !== id));
    } else {
      alert(data.message || 'Failed to delete');
    }
  }catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. check the console.')
  }
};

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // Admin Dashboard (your previous table code)
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Scheduled Calls</h1>
          <button
            onClick={() => {
              localStorage.removeItem('adminAuth');
              setIsAuthenticated(false);
            }}
            className="text-sm text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>

        {/* Your table code here */}

         <div className="bg-white rounded-xl shadow overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="text-left p-4 font-medium text-gray-600">Name</th>
                                    <th className="text-left p-4 font-medium text-gray-">Email</th>
                                    <th className="text-left p-4 font-medium text-gray-">Phone Number</th>
                                    <th className="text-left p-4 font-medium text-gray-">Reasons</th>
                                    <th className="text-left p-4 font-medium text-gray-">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {calls.map((call) => (
                                    <tr key={call.id} className="border-b hover:bg-gray-50">
                                        <td className="p-4 font-medium">{call.full_name}</td>
                                        <td className="p4">
                                            <a href={`mailto:${call.email}`} className="text-indigo-600 hover:underline">{call.email}</a>
                                        </td>
                                        <td className="p-4 font-medium">{call.phone_number}</td>
                                        <td className="p-4 text-gray-700">{call.reason}</td>
                                        <td className="p-4 text-sm text-gray-500">{new Date(call.created_at).toLocaleString}</td>
                                        <td className="p-4">
                                          <button
                                          onClick={() => handleDelete(call.id)}
                                          className='text-red-600 hover:red-800 text-sm font-medium'>
                                            Delete
                                          </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
      </div>
    </div>
  );
};

export default Admin;



//  import {  useEffect, useState} from "react";

//  const Admin = () => {
//     const [calls, setCalls]= useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() =>{
//         fetch('http://localhost:5000/api/schedule')
//         .then(res => res.json())
//         .then(data => {
//             setCalls(data);
//             setLoading(false)
//         })
//         .catch(err =>{
//             console.error(err);
//             setLoading(false)
//         });
        
//     },[]);

//     if (loading) {
//         return <div className="p-10 text-center">Loading..</div>
//     }
    
//     return (
        // <div className="min-h-screen bg-gray-100 p-6 md:p-10">
        //     <div className="max-w-6xl mx-auto">
        //         <h1 className="text-3xl fon-bold mb-8 text-gray-800">Scheduled Calls</h1>
        //         {calls.length === 0 ? (
        //             <p className="text-gray-500">No one has scheduled a call yet.</p>
        //         ) : (
                   
        //         )}
        //     </div>

        // </div>
//     )
//  }

//  export default Admin;