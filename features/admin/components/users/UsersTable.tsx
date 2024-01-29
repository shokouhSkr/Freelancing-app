"use client";

import { BeatLoader } from "react-spinners";
import { Empty, Table, UserRow } from "@/features";
import { useAllUsers } from "../../hooks/useAllUsers";

const UsersTable = () => {
  const { allUsers, isLoading } = useAllUsers();

  if (isLoading)
    return (
      <div className="text-center">
        <BeatLoader color="#a20ab6" size={8} />
      </div>
    );

  if (!allUsers.length) {
    return <Empty resourceName="درخواستی" />;
  }

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {allUsers.map((user: any, index: number) => (
          <UserRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
