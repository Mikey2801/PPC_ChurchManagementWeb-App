import React, { useState } from 'react';


const initialState = {
  memberId: '',
  applicationDate: '',
  lastName: '',
  firstName: '',
  middleName: '',
  birthdate: '',
  gender: '',
  age: '',
  contactNumber: '',
  emailAddress: '',
  address: {
    streetBarangay: '',
    townCity: '',
    province: ''
  },
  role: 'Member'
};

export default function AddMemberForm({ onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const addrField = name.split('.')[1];
      setForm((prev) => ({ ...prev, address: { ...prev.address, [addrField]: value } }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log('Form submitted:', form);
    // Here you would typically send the data to your backend API
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setLoading(false);
      setForm(initialState);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  return (
    <form className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2">Add New Member</h2>
      {error && <div className="text-red-500">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="memberId" value={form.memberId} onChange={handleChange} placeholder="Member ID" className="input input-bordered" required />
        <input name="applicationDate" value={form.applicationDate} onChange={handleChange} placeholder="Application Date (mm/dd/yyyy)" className="input input-bordered" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="input input-bordered" required />
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered" required />
        <input name="middleName" value={form.middleName} onChange={handleChange} placeholder="Middle Name" className="input input-bordered" />
        <input name="birthdate" value={form.birthdate} onChange={handleChange} placeholder="Birthdate (mm/dd/yyyy)" className="input input-bordered" required />
        <input name="gender" value={form.gender} onChange={handleChange} placeholder="Gender (M/F)" className="input input-bordered" required />
        <input name="age" value={form.age} onChange={handleChange} placeholder="Age" className="input input-bordered" required />
        <input name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="Contact Number (11 digits)" className="input input-bordered" required />
        <input name="emailAddress" value={form.emailAddress} onChange={handleChange} placeholder="Email Address" className="input input-bordered" required />
        <input name="address.streetBarangay" value={form.address.streetBarangay} onChange={handleChange} placeholder="Street/Barangay" className="input input-bordered" required />
        <input name="address.townCity" value={form.address.townCity} onChange={handleChange} placeholder="Town/City" className="input input-bordered" required />
        <input name="address.province" value={form.address.province} onChange={handleChange} placeholder="Province" className="input input-bordered" required />
      </div>
      <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? 'Adding...' : 'Add Member'}</button>
    </form>
  );
}
