import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { supabase } from "../supabaseClient";
import logo from "../assets/logo.png";
import beeAnimation from "../assets/BEE-lieve.json"; // ✅ Ensure the path to your JSON is correct
import honeyLogo from "../assets/honey.png";
import treeImg from "../assets/tree.png";

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
    interaction_done_by: "",
    remarks: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Splash Screen Timer + Auto fill Date
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
      alert(validationError);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("honeyhive").insert([formData]);
    setLoading(false);
    if (error) {
      alert("Error: " + error.message);
      return;
    }
    alert("Saved Successfully!");
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
      interaction_done_by: "",
      remarks: "",
    });
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all text-gray-800";
  const labelClass = "text-sm font-bold text-[#4A2F1B] flex items-center";
  const sectionHeader =
    "md:col-span-2 text-lg font-bold text-[#4A2F1B] border-b-2 border-yellow-200 pb-2 mt-6 mb-2";
  if (isSplashActive) {
    return (
      <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center p-10 relative overflow-hidden">
        {/* Tree Image - Left Corner */}
        <img
          src={treeImg}
          alt="Tree"
          className="absolute bottom-0 left-0 w-160 sm:w-208 md:w-256 object-contain"
        />

        <div className="max-w-md w-full flex flex-col items-center z-10">
          <Lottie animationData={beeAnimation} loop={true} />

          <img
            src={honeyLogo}
            alt="Honey Hive Montessori House"
            className="w-105 mt-4"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-700">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border-t-8 border-[#4A2F1B] overflow-hidden">
        {/* Header Section */}
        <div className="bg-white p-6 sm:p-10 text-center border-b border-gray-100">
          <span className="bg-yellow-100 text-[#4A2F1B] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Parent Enquiry Form
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <img
              src={logo}
              alt="Honey Hive Logo"
              className="w-20 h-20 object-contain"
            />

            <img
              src={honeyLogo} // <-- your text/logo image
              alt="Honey Hive Montessori House"
              className="w-60 sm:w-72 object-contain"
            />
          </div>

          <div className="mt-4 inline-block bg-red-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md transform -rotate-1">
            The best place to Bee!
          </div>

          <p className="text-[10px] sm:text-xs mt-6 text-gray-500 leading-relaxed max-w-md mx-auto italic">
            Managed by: Honey Hive Montessori Educational Trust.
            <br />
            (Registered under Tamilnadu. Reg No: 118/2021)
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8">
            Thank you for your interest! Please fill out this form so we can
            learn more about your family.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div className="md:col-span-2">
              <label className={labelClass}>
                Date of Enquiry
                <RequiredStar />
              </label>
              <input
                type="date"
                name="date_of_enquiry"
                value={formData.date_of_enquiry}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className={sectionHeader}>Child’s Information</div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Name of the Child
                <RequiredStar />
              </label>
              <input
                type="text"
                name="child_name"
                value={formData.child_name}
                onChange={handleChange}
                className={inputClass}
                placeholder="Full Name"
              />
            </div>

            <div>
              <label className={labelClass}>
                Date of Birth
                <RequiredStar />
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
                Age (Auto Calculated)
                <RequiredStar />
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  name="age_years"
                  value={formData.age_years}
                  readOnly
                  className={inputClass + " bg-gray-100 cursor-not-allowed"}
                  placeholder="Yrs"
                />
                <input
                  type="number"
                  name="age_months"
                  value={formData.age_months}
                  readOnly
                  className={inputClass + " bg-gray-100 cursor-not-allowed"}
                  placeholder="Mos"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Gender
                <RequiredStar />
              </label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Male", "Female", "Other"].map((g) => (
                  <label
                    key={g}
                    className="flex items-center space-x-2 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:bg-yellow-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      className="w-4 h-4 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {g}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Previous School / Daycare
                <RequiredStar />
              </label>
              <input
                type="text"
                name="previous_school"
                value={formData.previous_school}
                onChange={handleChange}
                className={inputClass}
                placeholder="Enter 'None' if first school"
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Languages Spoken at Home
                <RequiredStar />
              </label>
              <input
                type="text"
                name="languages_spoken"
                value={formData.languages_spoken}
                onChange={handleChange}
                className={inputClass}
                placeholder="e.g. English, Tamil"
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass + " mb-2"}>
                Admission Sought For
                <RequiredStar />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {admissionOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center p-3 border rounded-xl cursor-pointer hover:bg-yellow-50 transition-all"
                  >
                    <input
                      type="radio"
                      name="admission_sought_for"
                      value={opt}
                      checked={formData.admission_sought_for === opt}
                      onChange={handleChange}
                      className="w-5 h-5 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="ml-3 text-sm text-gray-700 font-medium">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className={sectionHeader}>Parent/Guardian Information</div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Parent Name
                <RequiredStar />
              </label>
              <input
                type="text"
                name="parent_name"
                value={formData.parent_name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>
                Relationship to Child
                <RequiredStar />
              </label>
              <input
                type="text"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className={inputClass}
                placeholder="Mother / Father"
              />
            </div>

            <div>
              <label className={labelClass}>
                Phone Number
                <RequiredStar />
              </label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Email Address
                <RequiredStar />
              </label>
              <input
                type="email"
                name="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="md:col-span-2">
              <label className={labelClass}>
                Residential Address
                <RequiredStar />
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
                rows={3}
              />
            </div>

            <div className={sectionHeader}>Additional Information</div>

            <div className="md:col-span-2">
              <label className={labelClass + " mb-2"}>
                How did you hear about us?
                <RequiredStar />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hearOptions.map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center p-3 border rounded-xl cursor-pointer hover:bg-yellow-50 transition-all"
                  >
                    <input
                      type="radio"
                      name="how_did_you_hear"
                      value={opt}
                      checked={formData.how_did_you_hear === opt}
                      onChange={handleChange}
                      className="w-5 h-5 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="ml-3 text-sm text-gray-700 font-medium">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className={sectionHeader + " !border-red-100 mt-10"}>
              Office Use Only
            </div>

            <div>
              <label className={labelClass}>Interaction Done By</label>
              <input
                type="text"
                name="interaction_done_by"
                value={formData.interaction_done_by}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Remarks</label>
              <input
                type="text"
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="button"
              onClick={saveData}
              disabled={loading}
              className="md:col-span-2 w-full mt-10 bg-[#4A2F1B] hover:bg-black text-white font-black py-4 rounded-2xl shadow-lg transform active:scale-[0.98] transition-all disabled:opacity-50 text-lg uppercase tracking-widest"
            >
              {loading ? "Processing..." : "Submit Enquiry"}
            </button>
          </form>
        </div>

        <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
          <div className="max-w-md mx-auto space-y-2">
            <p className="font-bold text-[#4A2F1B] text-sm">
              1-A Rama Associates, MCN Nagar Extn, Thoraipakkam, Chennai - 600
              097.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
              <span className="flex items-center">
                📧 honeyhivechennai@gmail.com
              </span>
              <span className="flex items-center">
                🌐 honeyhivemontessorihouse.com
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-bold text-gray-700">
              <span>📞 99529 00051</span>
              <span>📞 97907 30051</span>
              <span>☎️ 044-4850 2661</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
