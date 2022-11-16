import DeleteBtn from "../buttons/DeleteBtn";
import UpdateBtn from "../buttons/UpdateBtn";

export default function CarList(props: any) {
  return (
    <ul className="container mx-auto px-4 max-w-screen-sm">
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {props.car.brandName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {props.car.model}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {props.car.serialNum}
          </div>
          <UpdateBtn car={props.car.id} />
          <DeleteBtn car={props.car.id} />
        </div>
      </li>
    </ul>
  );
}
