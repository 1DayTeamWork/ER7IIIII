import DeleteBtn from "../buttons/DeleteBtn";
import UpdateBtn from "../buttons/UpdateBtn";

export default function CarBox(props: any) {
  return (
    <div className="flex  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center">
      <a href="#">
        <img className="rounded-t-lg" src="" alt="" />
      </a>
      <div className="p-5 flex flex-col max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center">
        <a href="#">
          <img
            src="https://ae01.alicdn.com/kf/U47c4c5be7e3a40d29aa081d9e0867a57u/Car-Garage-Vintage-Wall-Sticker-Decal-Artist-Sticker-Garage-Wall-Art-Decoration-A00975.jpg_Q90.jpg_.webp"
            alt="Car"
            role="img"
            className="w-200 h-200  relative  lg:block"
          />
        </a>
        <div>renault Clio</div>
        <div>description</div>
      </div>
      <UpdateBtn />
      <DeleteBtn />
    </div>
  );
}
