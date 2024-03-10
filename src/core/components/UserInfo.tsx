import logout from "@/features/auth/mutations/logout";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { useMutation } from "@blitzjs/rpc";
import { Button } from "@mantine/core";

export const UserInfo = () => {
  const currentUser = useCurrentUser();
  const [logoutMutation] = useMutation(logout);

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <Button
        onClick={async () => {
          await logoutMutation();
        }}
      >
        Logout
      </Button>
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    </>
  );
};
