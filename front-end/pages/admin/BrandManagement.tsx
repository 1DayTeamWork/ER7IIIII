import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import BrandBox from "../../app/Modules/components/boxs/BrandBox";
import Search from "../../app/Modules/components/buttons/Search";
import CreateBrandBtn from "../../app/Modules/components/buttons/Create-Brand-Btn";
import NoBrand from "../../app/Modules/components/Table/Brand/No-Brand";
import BrandTable from "../../app/Modules/components/Table/Brand/Brand-Table";
import { useQuery } from "react-query";

export default function BrandManagement() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/api/brands").then((res) => res.json()),
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  if (data) {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <NavBarAdmin />
      <div className='flex flex-col-reverse'>
          <Search />
        </div>
        <div className='flex col flex-row-reverse'>
          <CreateBrandBtn />
        </div>

        {data.length < 0 ? (
           <NoBrand />
        ) : ( 
          <div className='flex flex-col items-center w-screen justify-center'>
            {data.map((brand: any, i: any) => {
              return <BrandTable brand={brand} key={i} />;
            })}
          </div>
        )}
        
      <Footer />
    </div>
  );
}
}
