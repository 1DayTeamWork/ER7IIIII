import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import CarBox from "../../app/Modules/components/boxs/CarBox";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
export default function BrandManagement() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <NavBarAdmin />
      <div className="flex flex-row p-8 space-x-10 ">
        <CarBox />
        <AddBtn />
      </div>
      <Footer />
    </div>
  );
}
