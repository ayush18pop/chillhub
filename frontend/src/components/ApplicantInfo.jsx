import { useState } from "react";

export default function ApplicantInfo({ onFormChange }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    about: "",
    description: "",
    education: "",
    experience: "",
    resume: null, // file
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    const updated = {
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    };
    setFormData(updated);
    onFormChange(updated);
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-foreground justify-items-center">
      {/* Full Name */}
      <div className="flex flex-col w-full md:w-4/5">
        <label className="text-sm mb-1">Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Role */}
      <div className="flex flex-col w-full md:w-4/5">
        <label className="text-sm mb-1">Role</label>
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="p-2 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col w-full md:w-4/5">
        <label className="text-sm mb-1">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col w-full md:w-4/5">
        <label className="text-sm mb-1">Short Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* Education */}
      <div className="flex flex-col md:col-span-2 w-full md:w-4/5">
        <label className="text-sm mb-1">Education</label>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows={3}
          className="p-2 rounded bg-gray-800 text-white w-full"
        />
      </div>

      {/* Work Experience */}
      <div className="flex flex-col md:col-span-2 w-full md:w-4/5">
        <label className="text-sm mb-1">Work Experience</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={3}
          className="p-2 rounded bg-gray-800 text-white w-full"
        />
      </div>

      {/* About */}
      <div className="flex flex-col md:col-span-2 w-full md:w-4/5">
        <label className="text-sm mb-1">About You</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          rows={3}
          className="p-2 rounded bg-gray-800 text-white w-full"
        />
      </div>

      {/* Resume Upload */}
      <div className="flex flex-col md:col-span-2 w-full md:w-4/5">
        <label className="text-sm mb-1">Upload Resume (PDF)</label>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleChange}
          className="p-2 rounded bg-gray-800 text-white file:mr-3 file:py-1 file:px-4 file:rounded file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
        />
        {formData.resume && (
          <p className="mt-1 text-sm text-gray-400">
            Selected file: {formData.resume.name}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex md:col-span-2 justify-center w-full md:w-4/5">
        <button
          type="submit"
          className="mt-4 px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
