import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import CarBox from "../../app/Modules/components/boxs/CarBox";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import Search from "../../app/Modules/components/buttons/Search";
import CreateCarBtn from "../../app/Modules/components/buttons/Create-Car-Btn";
import CarTable from "../../app/Modules/components/Table/Car/Car-Table";
import { useQuery } from "react-query";
import NoCar from "../../app/Modules/components/Table/Car/No-Car";
export default function BrandManagement() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/api/cars").then((res) => res.json()),
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
          <CreateCarBtn />
        </div>

        {data.length < 0 ? (
          <NoCar />
        ) : (
        <div className='flex flex-col items-center w-screen justify-center'>
          {data.map((car: any, i: any) => {
            return <CarTable car={car} key={i} />;
          })}
        </div>
        )}

        <Footer />
      </div>
    );
  }
}
