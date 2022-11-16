import Footer from "../../app/commun/layout/user/FooterUser";
import NavBarUser from "../../app/commun/layout/user/NavBarUser";
import { useQuery } from "react-query";
import AddBtn from "../../app/Modules/components/buttons/AddBtn";
import CarList from "../../app/Modules/components/boxs/CarList";

export default function HomePage(props: any) {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch("http://localhost:3000/api/cars/").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  if (data) {
    return (
      <div className="flex flex-col h-screen justify-between ">
        <NavBarUser />
        <div className="flex flex-col items-center w-screen justify-center">
          {data.map((car: any, i: any) => {
            return <CarList car={car} key={i} />;
          })}
          <AddBtn type={"car"} user={props.id} />
        </div>
        <Footer />
      </div>
    );
  }
}
