import React from "react";
import DeleteBtn from "../../buttons/DeleteBtn";
import UpdateBtn from "../../buttons/UpdateBtn";

const CarTable = (props: any) => {
  return (
    <div>
      <div className='bg-whitey rounded-md w-full'>
        <div className=' flex items-center justify-between pb-6'>
          <div className='flex items-center justify-between'></div>
        </div>
        <div>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      model
                    </th>
                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      brand Name
                    </th>

                    <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
                      Serial Number
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 w-10 h-10'>
                          <img
                            className='w-full h-full rounded-full'
                            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {props.car.model}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {props.car.brandName}
                      </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {props.car.serialNum}
                      </p>
                    </td>
                    <UpdateBtn type={"cars"} car={props.car} />
                    <DeleteBtn type={"cars"} car={props.car} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarTable;
