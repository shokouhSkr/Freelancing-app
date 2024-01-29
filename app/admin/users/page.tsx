import { UsersTable } from "@/features";

const AdminUsersPage = () => {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">لیست کاربران</h1>
      <UsersTable />
    </div>
  );
};

export default AdminUsersPage;
