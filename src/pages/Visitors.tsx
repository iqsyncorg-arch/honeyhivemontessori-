import { useState, ChangeEvent, FormEvent } from "react";

interface StudentData {
  studentName: string;
  studentAge: number;
  studentGender: string;
  program: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  emergencyContact: string;
  address: string;
  startDate: string;
  additionalNotes: string;
  consent: boolean;
}

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState<StudentData>({
    studentName: "",
    studentAge: 0,
    studentGender: "",
    program: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    emergencyContact: "",
    address: "",
    startDate: "",
    additionalNotes: "",
    consent: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : name === "studentAge"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Details Saved!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#F4C430" }}
    >
      <div
        className="w-full max-w-xl bg-white rounded-lg shadow-2xl overflow-hidden border-4"
        style={{ borderColor: "#4A2F1B" }}
      >
        <div className="p-6 text-center" style={{ backgroundColor: "#4A2F1B" }}>
          <h2 className="text-2xl font-bold text-white">
            Honey Hive Montessori House
          </h2>
          <p className="text-yellow-300">
            Parent / Guardian Student Registration Form
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {/* Student Name */}
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Student Age */}
          <input
            type="number"
            name="studentAge"
            placeholder="Student Age"
            value={formData.studentAge}
            onChange={handleChange}
            min={1}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Student Gender */}
          <select
            name="studentGender"
            value={formData.studentGender}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Program */}
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Program</option>
            <option value="Toddler Program">Toddler Program</option>
            <option value="Primary Montessori">Primary Montessori</option>
            <option value="Kindergarten">Kindergarten</option>
          </select>

          {/* Parent Name */}
          <input
            type="text"
            name="parentName"
            placeholder="Parent / Guardian Name"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Parent Email */}
          <input
            type="email"
            name="parentEmail"
            placeholder="Parent Email"
            value={formData.parentEmail}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Parent Phone */}
          <input
            type="tel"
            name="parentPhone"
            placeholder="Parent Phone Number"
            value={formData.parentPhone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Emergency Contact */}
          <input
            type="tel"
            name="emergencyContact"
            placeholder="Emergency Contact Number"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />

          {/* Address */}
          <textarea
            name="address"
            placeholder="Home Address"
            value={formData.address}
            onChange={handleChange}
            rows={2}
            className="w-full border rounded px-3 py-2"
          />

          {/* Preferred Start Date */}
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          {/* Additional Notes */}
          <textarea
            name="additionalNotes"
            placeholder="Medical info, allergies, special needs, etc."
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded px-3 py-2"
          />

          {/* Consent */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            I confirm the above information is accurate.
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full text-white font-bold py-2 rounded"
            style={{ backgroundColor: "#4A2F1B" }}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
