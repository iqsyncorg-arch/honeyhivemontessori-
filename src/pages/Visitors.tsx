import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";
import beeAnimation from "../assets/BEE-lieve.json"; // ✅ Ensure the path to your JSON is correct

type FormData = {
  date_of_enquiry: string;
  child_name: string;
  dob: string;
  age_years: string;
  age_months: string;
  gender: string;
  previous_school: string;
  languages_spoken: string;
  admission_sought_for: string;
  parent_name: string;
  relationship: string;
  phone_number: string;
  email_id: string;
  address: string;
  how_did_you_hear: string;
  interaction_done_by: string;
  remarks: string;
};

const admissionOptions = [
  "Grub (Playgroup)",
  "Brood (Pre-KG)",
  "Junior Bees (LKG)",
  "Senior Bees (UKG)",
  "Radiant Bees (Special Education)",
  "Daycare",
];

const hearOptions = [
  "Google",
  "Referral (Friend/Family)",
  "Walk-in",
  "Social Media",
  "Other",
];

const RequiredStar = () => <span className="text-red-600 ml-1">*</span>;

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const calculateAge = (dob: string) => {
  if (!dob) return { years: "", months: "" };
  const birthDate = new Date(dob);
  const today = new Date();
  if (birthDate > today) return { years: "", months: "" };

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  if (today.getDate() < birthDate.getDate()) months -= 1;
  if (months < 0) { years -= 1; months += 12; }

  return { years: years.toString(), months: months.toString() };
};

const Visitors = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    date_of_enquiry: getTodayDate(),
    child_name: "",
    dob: "",
    age_years: "",
    age_months: "",
    gender: "",
    previous_school: "",
    languages_spoken: "",
    admission_sought_for: "",
    parent_name: "",
    relationship: "",
    phone_number: "",
    email_id: "",
    address: "",
    how_did_you_hear: "",
    interaction_done_by: "",
    remarks: "",
  });

  // ✅ Splash Screen Logic (3 Seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prev) => ({ ...prev, dob: value, age_years: age.years, age_months: age.months }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = [
      "date_of_enquiry", "child_name", "dob", "gender", "previous_school",
      "languages_spoken", "admission_sought_for", "parent_name", "relationship",
      "phone_number", "email_id", "address", "how_did_you_hear"
    ];
    for (const key of requiredFields) {
      if (!formData[key] || (typeof formData[key] === "string" && !formData[key].trim())) {
        return `${key.replace(/_/g, " ")} is required`;
      }
    }
    return null;
  };

  const saveData = async () => {
    const errorMsg = validateForm();
    if (errorMsg) return alert(errorMsg);

    setLoading(true);
    const { error } = await supabase.from("honeyhive").insert([formData]);
    setLoading(false);

    if (error) return alert("Error: " + error.message);
    
    alert("Saved Successfully!");
    setFormData({ ...formData, child_name: "", dob: "", age_years: "", age_months: "", gender: "", previous_school: "", languages_spoken: "", admission_sought_for: "", parent_name: "", relationship: "", phone_number: "", email_id: "", address: "", how_did_you_hear: "", interaction_done_by: "", remarks: "" });
  };

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:ring-2 focus:ring-yellow-500 outline-none transition-all text-gray-800";
  const labelClass = "text-sm font-bold text-[#4A2F1B] flex items-center";
  const sectionHeader = "md:col-span-2 text-lg font-bold text-[#4A2F1B] border-b-2 border-yellow-200 pb-2 mt-6 mb-2";

  // Splash Screen View
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-yellow-400 flex flex-col items-center justify-center z-50">
        <div className="w-64 h-64 sm:w-80 sm:h-80">
          <Lottie animationData={beeAnimation} loop={true} />
        </div>
        <h2 className="text-[#4A2F1B] text-2xl font-black mt-4 animate-pulse">
          Welcome to Honey Hive...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-t-8 border-[#4A2F1B] overflow-hidden animate-in fade-in zoom-in duration-500">
        
        {/* Header Section */}
        <div className="p-6 sm:p-10 text-center border-b border-gray-100">
          <span className="bg-yellow-100 text-[#4A2F1B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            Parent Enquiry Form
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-black text-[#4A2F1B] tracking-tight">Honey Hive</h1>
              <h2 className="text-xl font-bold text-yellow-600">Montessori House</h2>
            </div>
          </div>
          <div className="mt-4 inline-block bg-red-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md transform -rotate-1">
            The best place to Bee!
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="md:col-span-2">
              <label className={labelClass}>Date of Enquiry<RequiredStar /></label>
              <input type="date" name="date_of_enquiry" value={formData.date_of_enquiry} onChange={handleChange} className={inputClass} />
            </div>

            <div className={sectionHeader}>Child’s Information</div>
            
            <div className="md:col-span-2">
              <label className={labelClass}>Name of the Child<RequiredStar /></label>
              <input type="text" name="child_name" value={formData.child_name} onChange={handleChange} className={inputClass} placeholder="Full Name" />
            </div>

            <div>
              <label className={labelClass}>Date of Birth<RequiredStar /></label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Age (Auto Calculated)</label>
              <div className="flex gap-2">
                <input type="text" value={`${formData.age_years} Yrs`} readOnly className={`${inputClass} bg-gray-50`} />
                <input type="text" value={`${formData.age_months} Mos`} readOnly className={`${inputClass} bg-gray-50`} />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Gender<RequiredStar /></label>
              <div className="flex gap-4 mt-2">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex-1 flex items-center justify-center p-3 border rounded-xl cursor-pointer hover:bg-yellow-50">
                    <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="text-yellow-600" />
                    <span className="ml-2 text-sm font-medium">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Admission Sought For<RequiredStar /></label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {admissionOptions.map((opt) => (
                  <label key={opt} className="flex items-center p-3 border rounded-xl cursor-pointer hover:bg-yellow-50">
                    <input type="radio" name="admission_sought_for" value={opt} checked={formData.admission_sought_for === opt} onChange={handleChange} className="text-yellow-600" />
                    <span className="ml-3 text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={sectionHeader}>Parent/Guardian Information</div>
            
            <div className="md:col-span-2">
              <label className={labelClass}>Parent Name<RequiredStar /></label>
              <input type="text" name="parent_name" value={formData.parent_name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Phone Number<RequiredStar /></label>
              <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Email Address<RequiredStar /></label>
              <input type="email" name="email_id" value={formData.email_id} onChange={handleChange} className={inputClass} />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>Residential Address<RequiredStar /></label>
              <textarea name="address" value={formData.address} onChange={handleChange} className={inputClass} rows={3} />
            </div>

            <div className={sectionHeader}>Additional Information</div>

            <div className="md:col-span-2">
              <label className={labelClass}>How did you hear about us?<RequiredStar /></label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                {hearOptions.map((opt) => (
                  <label key={opt} className="flex items-center p-3 border rounded-xl cursor-pointer hover:bg-yellow-50">
                    <input type="radio" name="how_did_you_hear" value={opt} checked={formData.how_did_you_hear === opt} onChange={handleChange} />
                    <span className="ml-2 text-xs font-medium">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className={sectionHeader}>Office Use (Optional)</div>
            <input type="text" name="interaction_done_by" placeholder="Interaction done by" value={formData.interaction_done_by} onChange={handleChange} className={inputClass} />
            <input type="text" name="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange} className={inputClass} />

            <button
              type="button"
              onClick={saveData}
              disabled={loading}
              className="md:col-span-2 w-full mt-10 bg-[#4A2F1B] text-white font-black py-4 rounded-2xl shadow-xl hover:bg-black transition-all disabled:opacity-50"
            >
              {loading ? "Processing..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Visitors;