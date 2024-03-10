import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";
import { AuthenticationForm } from "@/core/components/MainAuthenticationForm";
import { useCurrentUser } from "@/features/users/hooks/useCurrentUser";
import { UserInfo } from "@/core/components/UserInfo";
import { Vertical } from "mantine-layout-components";

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser();

  return (
    <Layout title="Home">
      {currentUser && <UserInfo />}
      {!currentUser && (
        <Vertical center fullH fullW>
          <AuthenticationForm />
        </Vertical>
      )}
    </Layout>
  );
};

export default Home;
