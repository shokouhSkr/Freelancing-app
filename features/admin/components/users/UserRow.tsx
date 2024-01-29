"use client";

import { useState } from "react";
import { ChangeUserStatus, Modal, Table } from "@/features";
import { statusStyle } from "@/utils/constants";

const UserRow = ({ user, index }: { user: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, email, phoneNumber, role, status } = user;

  return (
    <Table.Row key={user._id}>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{role}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setIsOpen(true)}>تغییر وضعیت</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="تغییر وضعیت کاربر">
          <ChangeUserStatus userId={user._id} onClose={() => setIsOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
};

export default UserRow;
