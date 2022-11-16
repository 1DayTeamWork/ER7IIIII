import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import UserBox from "../../app/Modules/components/boxs/UserBox";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import { useQuery } from "react-query";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

export default function UserManagement() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/api/users/").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  if (data) {
    
    return (
      <div className="flex flex-col h-screen justify-between ">
        <NavBarAdmin />
        <div className="flex flex-col items-center w-screen justify-center">
          {data.map((user: any) => {
            return <UserBox user={user} />;
          })}
          <AddBtn />
        </div>
        <Footer />
      </div>
    );
  }
}
