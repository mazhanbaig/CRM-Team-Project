import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

/* ================= SUPABASE ================= */
const SUPABASE_URL = "https://vzfcckfivdrtdgyebdwi.supabase.co";
const SUPABASE_ANON_KEY =
  "sb_publishable_GWHg3RO54jZ4MduNwhulfA_AXO5a1aU";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ================= COMPONENT ================= */
const AddClient = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    client_id: "",
    user_id: 1,
    addres: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  /* ========= CHANGE ========= */
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ========= SUBMIT ========= */
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.from("client").insert([
      {
        name: form.name || null,
        email: form.email,
        phone: form.phone,
        client_id: Number(form.client_id),
        user_id: form.user_id,
        addres: form.addres || null,
        description: form.description || null,
      },
    ]);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("✅ Client added successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        client_id: "",
        user_id: 1,
        addres: "",
        description: "",
      });
    }

    setLoading(false);
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 bg-linear-to-r from-cyan-500 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Add New Client
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Client Name "
            className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          {/* EMAIL */}
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
              hover:border-blue-300 hover:shadow-sm hover:bg-blue-50/30
              focus:outline-none focus:border-blue-500"
          />

          {/* PHONE */}
          <input
            name="phone"
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
{/* 
          CLIENT ID
          <input
            name="client_id"
            type="number"
            value={form.client_id}
            onChange={handleChange}
            required
            placeholder="Client ID"
            className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-blue-300 hover:shadow-sm hover:bg-blue-50/30
              focus:outline-none focus:border-blue-500"
          /> */}

          {/* ADDRESS */}
          <input
            name="addres"
            value={form.addres}
            onChange={handleChange}
            placeholder="Address (optional)"
            className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white
              placeholder:text-gray-400 transition-all duration-200
              hover:border-cyan-300 hover:shadow-sm hover:bg-cyan-50/30
              focus:outline-none focus:border-cyan-500"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            className="w-full p-3 text-sm font-semibold text-gray-900
              rounded-xl border border-gray-200 bg-white resize-none
              placeholder:text-gray-400 transition-all duration-200
              hover:border-blue-300 hover:shadow-sm hover:bg-blue-50/30
              focus:outline-none focus:border-blue-500"
          />

          {message && (
            <p className="text-center text-sm text-red-500">{message}</p>
          )}

          {/* SUBMIT */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold
              bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-600
              hover:scale-[1.02] transition"
          >
            {loading ? "Saving..." : "Save Client"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClient;
