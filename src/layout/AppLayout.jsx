import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../loader/Loader";
import Header from "../components/header/Header";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
