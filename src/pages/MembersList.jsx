import React, { useEffect, useState } from 'react';


// Displays all members with full data dictionary fields
export default function MembersList() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder for fetching data from a MySQL backend
    const fetchMembers = () => {
      setLoading(true);
      // Mock data, replace with API call
      const mockMembers = [
        {
          id: '1',
          memberId: '101',
          applicationDate: '01/15/2023',
          lastName: 'Dela Cruz',
          firstName: 'Juan',
          middleName: 'Santos',
          birthdate: '05/20/1990',
          gender: 'M',
          age: 33,
          contactNumber: '09123456789',
          emailAddress: 'juan.delacruz@example.com',
          address: {
            streetBarangay: '123 Main St',
            townCity: 'Manila',
            province: 'Metro Manila'
          },
          role: 'Member'
        }
      ];
      setMembers(mockMembers);
      setLoading(false);
    };
    fetchMembers();
  }, []);

  if (loading) return <div className="text-center py-8">Loading members...</div>;

  return (
    <div className="max-w-3xl mx-auto my-8 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Church Members</h2>
      {members.length === 0 ? (
        <div className="text-gray-500">No members found.</div>
      ) : (
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-3 border">Member ID</th>
              <th className="py-2 px-3 border">Application Date</th>
              <th className="py-2 px-3 border">Last Name</th>
              <th className="py-2 px-3 border">First Name</th>
              <th className="py-2 px-3 border">Middle Name</th>
              <th className="py-2 px-3 border">Birthdate</th>
              <th className="py-2 px-3 border">Gender</th>
              <th className="py-2 px-3 border">Age</th>
              <th className="py-2 px-3 border">Contact Number</th>
              <th className="py-2 px-3 border">Email</th>
              <th className="py-2 px-3 border">Address</th>
              <th className="py-2 px-3 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id} className="border-b">
                <td className="py-1 px-2 border text-center">{member.memberId}</td>
                <td className="py-1 px-2 border text-center">{member.applicationDate}</td>
                <td className="py-1 px-2 border">{member.lastName}</td>
                <td className="py-1 px-2 border">{member.firstName}</td>
                <td className="py-1 px-2 border">{member.middleName}</td>
                <td className="py-1 px-2 border text-center">{member.birthdate}</td>
                <td className="py-1 px-2 border text-center">{member.gender}</td>
                <td className="py-1 px-2 border text-center">{member.age}</td>
                <td className="py-1 px-2 border text-center">{member.contactNumber}</td>
                <td className="py-1 px-2 border">{member.emailAddress}</td>
                <td className="py-1 px-2 border">
                  {member.address ? (
                    <span>{member.address.streetBarangay}, {member.address.townCity}, {member.address.province}</span>
                  ) : ''}
                </td>
                <td className="py-1 px-2 border text-center">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
