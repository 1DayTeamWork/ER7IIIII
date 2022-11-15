import NavBarAdmin from "../../app/commun/layout/admin/NavBarAdmin";
import Footer from "../../app/commun/layout/admin/FooterAdmin";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import BrandBox from "../../app/Modules/components/boxs/BrandBox";

export default function BrandManagement() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <NavBarAdmin />
      <div className="flex flex-row p-8 space-x-10 ">
        <BrandBox />
        <BrandBox />
        <AddBtn />
      </div>
      <Footer />
    </div>
  );
}
