import Image from "next/image";

const UserAvatar = ({ user }: { user: any }) => {
  return (
    <div className="flex items-center gap-4 text-secondary-600">
      <Image
        width={35}
        height={35}
        alt="user"
        src="/images/user.jpg"
        className="rounded-full object-center"
      />
      <span>{user?.name}</span>
    </div>
  );
};

export default UserAvatar;
