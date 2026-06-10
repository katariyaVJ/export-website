"use client";

import { useState } from "react";

interface InquiryFormProps {
  productPlaceholder?: string;
}

export default function InquiryForm({ productPlaceholder = "" }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: productPlaceholder,
    quantity: "",
    message: "",
    fax: "", // Honeypot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          country: "",
          product: "",
          quantity: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Validation failed. Please check your inputs.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/[0.02] border border-accent/20 rounded-[2rem] p-12 text-center animate-in zoom-in duration-500 min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent/20 rotate-12">
          <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4 text-white tracking-tight">Transmission Successful</h3>
        <p className="text-slate-400 mb-10 text-base max-w-sm mx-auto leading-relaxed">Your inquiry has been logged in our trade desk. A logistics specialist will contact you within 12 business hours.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="px-10 py-4 rounded-xl bg-accent text-primary font-bold text-[11px] uppercase tracking-widest hover:bg-accent-hover transition-all"
        >
          New Inquiry
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-6 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/40 focus:bg-white/[0.05] outline-none transition-all duration-300 text-sm placeholder:text-slate-600 text-white font-medium";
  const labelClasses = "block text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2 ml-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-bold text-center">
          {errorMessage}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="name" className={labelClasses}>Personal Name</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Full Name" />
        </div>
        <div className="space-y-1">
          <label htmlFor="company" className={labelClasses}>Organization</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClasses} placeholder="Company Name" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="email" className={labelClasses}>Corporate Email</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClasses} placeholder="email@domain.com" />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp</label>
          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+91 ..." />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className={labelClasses}>Trade Specifications</label>
        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className={`${inputClasses} resize-none`} placeholder="Detail your product needs, required quantities, and destination port..."></textarea>
      </div>

      {/* Honeypot field - hidden from users */}
      <div className="hidden">
        <label htmlFor="fax">Do not fill this if you are human</label>
        <input 
          type="text" 
          id="fax" 
          name="fax" 
          tabIndex={-1} 
          value={formData.fax} 
          onChange={handleChange} 
          autoComplete="off" 
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group relative w-full py-5 bg-accent hover:bg-accent-hover text-primary rounded-xl font-bold text-[12px] tracking-[0.2em] uppercase transition-all active:scale-[0.98] disabled:opacity-50 overflow-hidden shadow-xl shadow-accent/10"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {status === "submitting" ? "Processing Transmission..." : "Submit Trade Inquiry"}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </button>
    </form>
  );
}
