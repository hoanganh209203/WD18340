import { Outlet } from 'react-router-dom'
import HaederAdmin from '~/pages/Admins/HaederAdmin'


const AdminPage = () => {
  return (
    <>
   <div className="m-0 font-sans min-h-screen absolute w-full text-base antialiased font-normal leading-default bg-gray-200 text-gray-500">
        <HaederAdmin/>
        <div className="ml-5 ease-soft-in-out float-right p-20 xl:ml-68.5 relative h-full w-full rounded-xl transition-all duration-200 mt-4 mr-5">
          <div className="w-full px-5 pt-2 pb-2">
            <div className="py-5 rounded-lg px-5 bg-white border-l-4 border-r-4 border-[#ECAF82] w-full">
              <div className=''>
                <h2 className="text-lg font-bold">Admin.Prodcuts</h2>
              </div>
            </div>
            <div className="p-0 overflow-x-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default AdminPage