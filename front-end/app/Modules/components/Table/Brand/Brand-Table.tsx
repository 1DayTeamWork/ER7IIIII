import React from "react";

const BrandTable = (props: any) => {
  return (
    <div>
        <div className='bg-white p-8 rounded-md w-full'>
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
                        Name
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
                              src={props.brand.logo}
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {props.brand.name}
                            </p>
                          </div>
                        </div>
                      </td>
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

export default BrandTable;
