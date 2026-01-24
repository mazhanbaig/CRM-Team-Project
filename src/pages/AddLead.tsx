// // import React, { useState } from "react";
// // import { createClient } from "@supabase/supabase-js";

// // /* ================= SUPABASE CONFIG ================= */
// // const SUPABASE_URL = "https://vzfcckfivdrtdgyebdwi.supabase.co";
// // const SUPABASE_ANON_KEY =
// //   "sb_publishable_GWHg3RO54jZ4MduNwhulfA_AXO5a1aU";

// // const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// // /* ================= COMPONENT ================= */
// // const AddLead = () => {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     status: "new",
// //     source: "",
// //     description: "",
// //     user_id: 1,
// //   });

// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   /* ========== HANDLE CHANGE ========== */
// //   const handleChange = (e: { target: { name: any; value: any; }; }) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   /* ========== SUBMIT TO SUPABASE ========== */
// //   const handleSubmit = async (e: { preventDefault: () => void; }) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     const { error } = await supabase.from("addlead").insert([
// //       {
// //         name: form.name,
// //         email: form.email,
// //         phone: Number(form.phone),
// //         status: form.status,
// //         source: form.source,
// //         description: form.description,
// //         user_id: form.user_id,
// //       },
// //     ]);

// //     if (error) {
// //       setMessage(error.message);
// //     } else {
// //       setMessage("✅ Lead added successfully");
// //       setForm({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         status: "new",
// //         source: "",
// //         description: "",
// //         user_id: 1,
// //       });
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
// //       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
// //         <h2 className="text-2xl font-bold text-center bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
// //           Add New Lead
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <input
// //             name="name"
// //             value={form.name}
// //             onChange={handleChange}
// //             required
// //             placeholder="Full Name"
// //                         className="w-full p-3 text-sm font-semibold text-gray-900
//               rounded-xl border border-gray-200 bg-white
//               placeholder:text-gray-400 transition-all duration-200
//               hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
//               focus:outline-none focus:border-cyan-500"
// // //           />

// //           <input
// //             name="email"
// //             type="email"
// //             value={form.email}
// //             onChange={handleChange}
// //             required
// //             placeholder="Email Address"
// //             className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
// //           />

// //           <input
// //             name="phone"
// //             type="number"
// //             value={form.phone}
// //             onChange={handleChange}
// //             required
// //             placeholder="Phone Number"
// //                         className="w-full p-3 text-sm font-semibold text-gray-900
//               rounded-xl border border-gray-200 bg-white
//               placeholder:text-gray-400 transition-all duration-200
//               hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
//               focus:outline-none focus:border-cyan-500"
// //           />

// //           <select
// //             name="status"
// //             value={form.status}
// //             onChange={handleChange}
// //                         className="w-full p-3 text-sm font-semibold text-gray-900
//               rounded-xl border border-gray-200 bg-white
//               placeholder:text-gray-400 transition-all duration-200
//               hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
//               focus:outline-none focus:border-cyan-500"
// //           >
// //             <option value="new">New</option>
// //             <option value="contacted">Contacted</option>
// //             <option value="converted">Converted</option>
// //           </select>

// //           <input
// //             name="source"
// //             value={form.source}
// //             onChange={handleChange}
// //             placeholder="Source (Facebook, Call, Website)"
// //                         className="w-full p-3 text-sm font-semibold text-gray-900
//               rounded-xl border border-gray-200 bg-white
//               placeholder:text-gray-400 transition-all duration-200
//               hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
//               focus:outline-none focus:border-cyan-500"
// //           />

// //           <textarea
// //             name="description"
// //             value={form.description}
// //             onChange={handleChange}
// //             placeholder="Description"
// //                         className="w-full p-3 text-sm font-semibold text-gray-900
//               rounded-xl border border-gray-200 bg-white
//               placeholder:text-gray-400 transition-all duration-200
//               hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
//               focus:outline-none focus:border-cyan-500"
// // //           />

// //           {message && (
// //             <p className="text-center text-sm text-red-500">{message}</p>
// //           )}

// //           <button
// //             disabled={loading}
// //             className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:scale-[1.02] transition"
// //           >
// //             {loading ? "Saving..." : "Save Lead"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddLead;


import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

/* ================= SUPABASE CONFIG ================= */
const SUPABASE_URL = "https://vzfcckfivdrtdgyebdwi.supabase.co";
const SUPABASE_ANON_KEY =
  "sb_publishable_GWHg3RO54jZ4MduNwhulfA_AXO5a1aU";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ================= COMPONENT ================= */
const AddLead = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "new",
    source: "",
    description: "",
    user_id: 1,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* ========== HANDLE CHANGE ========== */
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ========== SUBMIT TO SUPABASE ========== */
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("addlead").insert([
      {
        name: form.name,
        email: form.email,
        phone: Number(form.phone),
        status: form.status,
        source: form.source,
        description: form.description,
        user_id: form.user_id,
      },
    ]);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Lead added successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        status: "new",
        source: "",
        description: "",
        user_id: 1,
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          Add New Lead
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          <input
            name="phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          >
            
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="converted">Converted</option>
          </select>






          <input
            name="source"
            value={form.source}
            onChange={handleChange}
            placeholder="Source (Facebook, Call, Website)"
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
                        className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          {message && (
            <p className="text-center text-sm text-red-500">{message}</p>
          )}

          <button
            disabled={loading}
            className="w-full py-3 rounded-lg text-white font-semibold bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:scale-[1.02] transition"
          >
            {loading ? "Saving..." : "Save Lead"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLead;

