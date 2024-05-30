import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="#userImage" alt="@userImage" />
      <AvatarFallback>JJY</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
