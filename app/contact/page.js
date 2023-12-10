// import React from 'react'

// export default function page() {
//   return (
//     <div>


//     </div>

//   )
// }

"use client"
import React, { useState } from 'react';


export default function page() {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    selectedDoctor: '',
    preferredDate: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, e.g., book the appointment
    console.log('Appointment booked:', formData);
    // Reset the form after submission
    setFormData({
      patientName: '',
      email: '',
      selectedDoctor: '',
      preferredDate: '',
      additionalNotes: '',
    });
  };

  return (
    <div>

      <div className="container mx-auto mt-8">
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="patientName" className="block text-gray-600 font-semibold mb-2">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
              Phone No.
            </label>

            <form class="max-w-sm mx-auto">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input type="text" id="phone-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
              </div>

            </form>

          </div>

          <div className="mb-4">
            <label htmlFor="selectedDoctor" className="block text-gray-600 font-semibold mb-2">
              Select Doctor
            </label>
            <select
              id="selectedDoctor"
              name="selectedDoctor"
              value={formData.selectedDoctor}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            >
              <option value="" disabled>Select a doctor</option>
              <option value="drJohnSmith">Dr. Jason Aims</option>
              <option value="drEmilyJones">Dr. Parker</option>
              <option value="drEmilyJones">Dr. Dean</option>
              <option value="drEmilyJones">Dr. Harry Makeena</option>
              <option value="drEmilyJones">Dr.Sumera</option>
              <option value="drEmilyJones">Dr. Steve Jones</option>
              {/* Add more doctors as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="preferredDate" className="block text-gray-600 font-semibold mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="additionalNotes" className="block text-gray-600 font-semibold mb-2">
              Medical History
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md"
            ></textarea>
          </div>

          <button type="submit" className="bg-indigo-500 text-white p-2 rounded-md">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
