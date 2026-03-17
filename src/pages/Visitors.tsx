import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";
import beeAnimation from "../assets/BEE-lieve.json";
import honeyLogo from "../assets/honey.png";
import treeImg from "../assets/tree.png";
import { toast } from "sonner";

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

const RequiredStar = () => <span className="text-red-500 ml-1.5 font-bold">*</span>;

const getTodayDate = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const calculateAge = (dob: string) => {
  if (!dob) return { years: "", months: "" };
  const birthDate = new Date(dob);
  const today = new Date();
  if (birthDate > today) return { years: "", months: "" };
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  if (today.getDate() < birthDate.getDate()) {
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years: years.toString(), months: months.toString() };
};

const Visitors = () => {
  const [isSplashActive, setIsSplashActive] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    date_of_enquiry: "",
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
  });

  const [loading, setLoading] = useState(false);

  // Splash Screen Timer + Auto fill Date
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      date_of_enquiry: getTodayDate(),
    }));

    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "dob") {
      const age = calculateAge(value);
      setFormData((prev) => ({
        ...prev,
        dob: value,
        age_years: age.years,
        age_months: age.months,
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields: (keyof FormData)[] = [
      "date_of_enquiry",
      "child_name",
      "dob",
      "age_years",
      "age_months",
      "gender",
      "previous_school",
      "languages_spoken",
      "admission_sought_for",
      "parent_name",
      "relationship",
      "phone_number",
      "email_id",
      "address",
      "how_did_you_hear",
    ];
    for (const key of requiredFields) {
      if (
        !formData[key] ||
        (typeof formData[key] === "string" && !formData[key].trim())
      ) {
        return `${key.replace(/_/g, " ")} is required`;
      }
    }
    return null;
  };

  const saveData = async () => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.from("honeyhive").insert([formData]).select();

      if (error) {
        toast.error("Error: " + error.message);
        return;
      }

      toast.success("Saved Successfully!");
      setFormData({
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
      });
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Modernized UI Classes
  const inputClass =
    "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 mt-1.5 focus:bg-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-500 outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 hover:border-yellow-300";
  const labelClass = "text-sm font-bold text-[#4A2F1B] flex items-center";
  const sectionHeader =
    "md:col-span-2 text-xl font-black text-[#4A2F1B] border-b-2 border-yellow-200 pb-3 mt-8 mb-4 flex items-center gap-2";

  const getCardClass = (isChecked: boolean) =>
    `flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${isChecked
      ? "border-[#4A2F1B] bg-yellow-50 shadow-sm ring-1 ring-[#4A2F1B]"
      : "border-gray-200 bg-white hover:border-yellow-300 hover:bg-yellow-50/30"
    }`;

  if (isSplashActive) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-yellow-50 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-200 to-yellow-300 opacity-30" />
        <img
          src={treeImg}
          alt="Tree"
          className="absolute -bottom-10 -left-10 w-[150%] sm:w-[120%] md:w-[100%] max-w-none object-contain opacity-100"
        />
        <div className="z-10 flex w-full max-w-lg flex-col items-center text-center -mt-16 sm:-mt-24">
          <div className="flex flex-col items-center justify-center">
            <img
              src={honeyLogo}
              alt="Honey Hive Montessori House"
              className="w-full max-w-[480px] drop-shadow-md transition-transform duration-700 hover:scale-110 mx-auto transform translate-x-8"
            />

            <p className="text-sm sm:text-lg mt-6 text-black leading-relaxed max-w-md mx-auto italic font-black">
              Managed by:{" "}
              <span className="text-black">
                Honey Hive Montessori Educational Trust
              </span>
              <br />
              <span className="text-xs sm:text-sm font-black opacity-80">
                (Registered under Tamilnadu. Reg No: 118/2021)
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-4">
            <div className="w-48 drop-shadow-2xl sm:w-64 md:w-72 animate-bounce-slow py-4">
              <Lottie animationData={beeAnimation} loop={true} />
            </div>

            <div className="flex space-x-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-orange-600 [animation-delay:-0.3s]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.15s]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-orange-400"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Reverted completely to flat, single-layer white layout
    <div className="min-h-screen bg-white flex flex-col items-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-700">


      {/* Header Section */}
      <div className="relative bg-white px-2 py-6 sm:py-8 text-center border-b border-gray-100">
        <span className="relative z-10 bg-[#4A2F1B] text-white border border-[#4A2F1B] px-5 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase shadow-lg mb-4 inline-block">
          Parent Enquiry Form
        </span>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 mt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="relative group">
              <img
                src={logo}
                alt="Honey Hive Logo"
                className="relative w-48 h-48 sm:w-48 sm:h-64 object-contain transform transition-all duration-700 hover:scale-110 drop-shadow-xl"
              />
            </div>
          </div>

          <div className="mt-0 transition-transform duration-500 hover:scale-105 active:scale-95">
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="py-6 sm:py-8 px-2 sm:px-6">
        <p className="text-sm sm:text-base text-gray-900 text-center mb-6 max-w-xl mx-auto font-medium">
          Thank you for your interest! Please fill out this brief form so we can
          learn more about your family and child.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

          <div className="md:col-span-2">
            <label className={labelClass}>
              Date of Enquiry <RequiredStar />
            </label>
            <input
              type="date"
              name="date_of_enquiry"
              value={formData.date_of_enquiry}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className={sectionHeader}>
            <span className="bg-yellow-100 text-[#4A2F1B] w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">1</span>
            Child’s Information
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Name of the Child <RequiredStar />
            </label>
            <input
              type="text"
              name="child_name"
              value={formData.child_name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter child's full name"
            />
          </div>

          <div>
            <label className={labelClass}>
              Date of Birth <RequiredStar />
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Age (Auto Calculated) <RequiredStar />
            </label>
            <div className="flex h-[50px] mt-1.5 bg-gray-50 border border-gray-200 rounded-xl items-center px-4 overflow-hidden">
              {formData.age_years || formData.age_months ? (
                <span className="font-semibold text-[#4A2F1B]">
                  {formData.age_years} <span className="text-gray-500 font-normal text-sm mr-2">Yrs</span>
                  {formData.age_months} <span className="text-gray-500 font-normal text-sm">Mos</span>
                </span>
              ) : (
                <span className="text-gray-400">Select DOB first</span>
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Gender <RequiredStar />
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {["Male", "Female"].map((g) => (
                <label key={g} className={getCardClass(formData.gender === g)}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    className="w-4 h-4 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="ml-3 font-semibold text-gray-700">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Previous School / Daycare <RequiredStar />
            </label>
            <input
              type="text"
              name="previous_school"
              value={formData.previous_school}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter 'None' if this is their first school"
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Languages Spoken at Home <RequiredStar />
            </label>
            <input
              type="text"
              name="languages_spoken"
              value={formData.languages_spoken}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. English, Tamil, Hindi"
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass + " mb-2"}>
              Admission Sought For <RequiredStar />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {admissionOptions.map((opt) => (
                <label key={opt} className={getCardClass(formData.admission_sought_for === opt)}>
                  <input
                    type="radio"
                    name="admission_sought_for"
                    value={opt}
                    checked={formData.admission_sought_for === opt}
                    onChange={handleChange}
                    className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 font-semibold">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={sectionHeader}>
            <span className="bg-yellow-100 text-[#4A2F1B] w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">2</span>
            Parent/Guardian Information
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Parent / Guardian Name <RequiredStar />
            </label>
            <input
              type="text"
              name="parent_name"
              value={formData.parent_name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className={labelClass}>
              Relationship to the Child <RequiredStar />
            </label>
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. Mother, Father"
            />
          </div>

          <div>
            <label className={labelClass}>
              Phone Number <RequiredStar />
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className={inputClass}
              placeholder="+91"
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Email Address <RequiredStar />
            </label>
            <input
              type="email"
              name="email_id"
              value={formData.email_id}
              onChange={handleChange}
              className={inputClass}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className={labelClass}>
              Residential Address <RequiredStar />
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={inputClass}
              placeholder="Enter full address"
              rows={3}
            />
          </div>

          <div className={sectionHeader}>
            <span className="bg-yellow-100 text-[#4A2F1B] w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">3</span>
            Additional Information
          </div>

          <div className="md:col-span-2">
            <label className={labelClass + " mb-2"}>
              How did you hear about us? <RequiredStar />
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {hearOptions.map((opt) => (
                <label key={opt} className={getCardClass(formData.how_did_you_hear === opt)}>
                  <input
                    type="radio"
                    name="how_did_you_hear"
                    value={opt}
                    checked={formData.how_did_you_hear === opt}
                    onChange={handleChange}
                    className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 font-semibold">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={saveData}
            disabled={loading}
            className="md:col-span-2 w-full mt-8 bg-[#4A2F1B] hover:bg-[#321f11] text-white font-black py-4 rounded-2xl shadow-[0_8px_20px_-6px_rgba(74,47,27,0.5)] transform active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed text-lg uppercase tracking-widest flex justify-center items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Enquiry"
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-white p-8 text-center border-t border-gray-100 mt-4">
        <div className="max-w-md mx-auto space-y-3">

          {/* Address */}
          <p className="font-bold text-[#4A2F1B] text-base sm:text-lg">
            1-A Rama Associates, MCN Nagar Extn, Thoraipakkam, Chennai - 600 097.
          </p>

          {/* Email + Website */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-gray-600 font-medium">
            <span className="flex items-center justify-center gap-1">
              📧 honeyhivechennai@gmail.com
            </span>
            <span className="flex items-center justify-center gap-1">
              🌐 honeyhivemontessorihouse.com
            </span>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-base sm:text-lg font-black text-[#4A2F1B] pt-2">
            <span>📞 99529 00051</span>
            <span>📞 97907 30051</span>
            <span>☎️ 044-4850 2661</span>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Visitors;