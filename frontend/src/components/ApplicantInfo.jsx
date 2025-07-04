import { useState } from "react";

export default function ApplicantInfo({ onFormChange }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    about: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onFormChange(updated); // send data to parent
  }

  return (
    <form className="space-y-4 text-white">
      <div>
        <label className="block text-sm">Full Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-sm">Role</label>
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-sm">About You</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>
    </form>
  );
}
