import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import { useQuery } from "react-query";
import UserTable from "../../app/Modules/components/Table/User/User-Table";
import CreateUserBtn from "../../app/Modules/components/buttons/Create-User-Btn";
import Search from "../../app/Modules/components/buttons/Search";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

export default function UserManagement() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/api/users").then((res) => res.json()),
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  if (data) {
    
    return (
      <div className='flex flex-col h-screen justify-between '>
        <NavBarAdmin />
        <div className='flex flex-col-reverse'>
          <Search />
        </div>
        <div className='flex col flex-row-reverse'>
          <CreateUserBtn />
        </div>
        <div className='flex flex-col items-center w-screen justify-center'>
          {data.map((user: any, i: any) => {
            return <UserTable user={user} key={i} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
