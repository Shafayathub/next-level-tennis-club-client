/* eslint-disable @typescript-eslint/no-explicit-any */

async function fetchMembers() {
  const res = await fetch("http://localhost:8080/api/members");
  return res.json();
}

export default async function MembersPage() {
  const members = await fetchMembers();

  return (
    <div>
      <h1 className="text-3xl font-bold">Members List (SSG)</h1>
      <ul>
        {members.map((member: any) => (
          <li key={member._id}>
            {member.name} - {member.membershipType}
          </li>
        ))}
      </ul>
    </div>
  );
}
