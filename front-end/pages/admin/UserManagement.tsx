import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import UserBox from "../../app/Modules/components/boxs/UserBox";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import { useQuery } from "react-query";

export default function UserManagement() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/users/all").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  if (data) {
    console.log(data);
    return (
      <div className="flex flex-col h-screen justify-between ">
        <NavBarAdmin />
        <div className="flex flex-col items-center w-screen justify-center">
          {data.map((user: any) => {
            console.log(user);
            return <UserBox user={user} />;
          })}
          <AddBtn />
        </div>
        <Footer />
      </div>
    );
  }
}
