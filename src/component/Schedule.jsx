  import { useState } from "react";

const ScheduleCall = () => {
  const [formData, setFormData] =useState({
    full_name:'',
    email:'',
    phone_number:'',
    reason:'',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    const response = await fetch('https://usman-backend.onrender.com/api/schedule',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setMessage('Thank you! Your call has been scheduled.');
      setFormData({
        full_name:'',
        email:'',
        phone_number:'',
        reason:''
          })
    } else {
      setMessage('Something went wrong. Please hit the get in tourch botton to send me a mail.')
    }
  } catch (error) {
    setMessage('Fail to connect to server.')
  } finally {
    setLoading(false)
  }
};

  return (
    <section className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 px-8 py-6 text-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Schedule a Call
          </h1>
          <p className="text-slate-300 text-sm mt-1">
            Let’s discuss your project. I’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} action="/" method="post" className="p-8 space-y-6">
          
          {/* Name */}
          <div>
            <label 
              htmlFor="clientName" 
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition duration-200 placeholder:text-slate-400"
            />
          </div>

          {/* Email */}
          <div>
            <label 
              htmlFor="clientsEmail" 
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition duration-200 placeholder:text-slate-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label 
              htmlFor="number" 
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="+234 000-0000"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition duration-200 placeholder:text-slate-400"
            />
          </div>

          {/* Reasons */}
          <div>
            <label 
              htmlFor="reasons" 
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              What would you like to discuss?
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me a bit about your project or what you'd like to talk about..."
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                         transition duration-200 placeholder:text-slate-400 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit" disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                       py-3 px-6 rounded-lg shadow-md hover:shadow-lg 
                       transition-all duration-200 focus:outline-none focus:ring-2 
                       focus:ring-indigo-500 focus:ring-offset-2"
          >
            {loading ? 'Sending...' : 'Schedule Call'}
            
          </button>
        </form>

        {/* Footer note */} 
        <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 text-center">
          <p className="text-xs text-slate-500">
            Your information is safe and will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;

//  <section className="min-h-screen w-full bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-12">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* Header */}
//         <div className="bg-slate-900 px-8 py-6 text-center">
//           <h1 className="text-2xl font-bold text-white tracking-tight">
//             Schedule a Call
//           </h1>
//           <p className="text-slate-300 text-sm mt-1">
//             Let’s discuss your project. I’ll get back to you within 24 hours.
//           </p>
//         </div>

//         {/* Form */}
//         <form action="/" method="post" className="p-8 space-y-6">
          
//           {/* Name */}
//           <div>
//             <label 
//               htmlFor="clientName" 
//               className="block text-sm font-medium text-slate-700 mb-1.5"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="clientName"
//               id="clientName"
//               placeholder="John Doe"
//               required
//               className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
//                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                          transition duration-200 placeholder:text-slate-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label 
//               htmlFor="clientsEmail" 
//               className="block text-sm font-medium text-slate-700 mb-1.5"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               name="clientsEmail"
//               id="clientsEmail"
//               placeholder="john@example.com"
//               required
//               className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
//                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                          transition duration-200 placeholder:text-slate-400"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label 
//               htmlFor="number" 
//               className="block text-sm font-medium text-slate-700 mb-1.5"
//             >
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="number"
//               id="number"
//               placeholder="+1 (555) 000-0000"
//               className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
//                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                          transition duration-200 placeholder:text-slate-400"
//             />
//           </div>

//           {/* Reasons */}
//           <div>
//             <label 
//               htmlFor="reasons" 
//               className="block text-sm font-medium text-slate-700 mb-1.5"
//             >
//               What would you like to discuss?
//             </label>
//             <textarea
//               name="reasons"
//               id="reasons"
//               rows="5"
//               placeholder="Tell me a bit about your project or what you'd like to talk about..."
//               required
//               className="w-full px-4 py-2.5 rounded-lg border border-slate-300 
//                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
//                          transition duration-200 placeholder:text-slate-400 resize-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
//                        py-3 px-6 rounded-lg shadow-md hover:shadow-lg 
//                        transition-all duration-200 focus:outline-none focus:ring-2 
//                        focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Schedule Call
//           </button>
//         </form>

//         {/* Footer note */}
//         <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 text-center">
//           <p className="text-xs text-slate-500">
//             Your information is safe and will never be shared.
//           </p>
//         </div>
//       </div>
//     </section>