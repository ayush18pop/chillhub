import { useState } from "react";

export default function StepperForm({ onSubmit }) {
  const steps = [
    { label: "Full Name", name: "name", type: "text" },
    { label: "Role", name: "role", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Short Description", name: "description", type: "text" },
    { label: "Education", name: "education", type: "textarea" },
    { label: "Work Experience", name: "experience", type: "textarea" },
    { label: "About You", name: "about", type: "textarea" },
    { label: "Resume", name: "resume", type: "file" },
  ];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    description: "",
    education: "",
    experience: "",
    about: "",
    resume: null,
  });

  const current = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updated = {
      ...formData,
      [name]: current.type === "file" ? files[0] : value,
    };
    setFormData(updated);
  };

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else onSubmit(formData);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0b0b0f]/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#111113]/80 shadow-2xl p-6 md:p-8 transition-all duration-300 flex flex-col items-center">
        {/* Progress Bar */}
        <div className="w-full h-2 bg-[#1e1e23] rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-white transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Step Heading */}
        <h2 className="text-lg md:text-xl font-semibold text-white mb-4 text-center tracking-wide">
          {current.label}
        </h2>

        {/* Input Field */}
        {current.type === "textarea" ? (
          <textarea
            name={current.name}
            value={formData[current.name]}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg bg-[#1e1e23] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white mb-6 placeholder:text-gray-400"
            placeholder={`Enter your ${current.label.toLowerCase()}`}
          />
        ) : current.type === "file" ? (
          <>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleChange}
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-white file:text-black hover:file:bg-gray-300 bg-[#1e1e23] text-white rounded-lg p-3 mb-2"
            />
            {formData.resume && (
              <p className="text-sm text-gray-400 mt-1">
                Selected: {formData.resume.name}
              </p>
            )}
          </>
        ) : (
          <input
            type={current.type}
            name={current.name}
            value={formData[current.name]}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-[#1e1e23] text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white mb-6 placeholder:text-gray-400"
            placeholder={`Enter your ${current.label.toLowerCase()}`}
          />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="px-4 py-2 rounded-lg bg-[#27272a] text-white hover:bg-[#3f3f46] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            {step === steps.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
