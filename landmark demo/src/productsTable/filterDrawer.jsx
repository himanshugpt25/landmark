
import closeIcon from '../assets/images/closeIcon.svg'
import TitlesDropdown from '../components/titlesDropdown'
export default function FilterDrawer({filterDrawerToggle, setFilterDrawerToggle}){
    
    return(
        <aside id="sidebar-multi-level-sidebar" className={filterDrawerToggle?"fixed top-0 right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0":"fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden"} aria-label="Sidebar">
            <div class="h-full px-5 py-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
                <div>
                <div className="flex justify-between text-gray-500 text-base">
                    FILTERS
                    <img src={closeIcon} className='hover:cursor-pointer' alt="" onClick={()=>{setFilterDrawerToggle((prev)=>{return !prev})}}></img>
                </div>
                <div className='flex flex-col'>
                    <div class="relative w-full my-2">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                    </div>
                    <div className='max-h-80'>
                        <TitlesDropdown />
                    </div>
                </div>
                <div className='flex flex-col mt-3'>
                    <span className='text-sm text-gray-900'>Last Update On</span>
                    <div className='w-full flex mt-1'>
                        <div className='w-1/2 flex flex-col'>
                            <span className='text-sm text-gray-900'>From</span>
                            <div class="relative max-w-sm mt-1">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <input datepicker datepicker-format="mm/dd/yyyy" type="text" onFocus={(e)=>{e.target.type='date'}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                            </div>
                        </div>
                        <div className='w-1/2'></div>
                    </div>
                </div>
                <div className='flex flex-col mt-3'>
                    <span className='text-sm text-gray-900'>Vendor Status</span>
                    <select className="w-full mt-1 py-2 px-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Active</option>
                        <option>Expired</option>
                    </select>
                </div>
                <div className='flex flex-col mt-3'>
                    <span className='text-sm text-gray-900'>Vendor Rate Expired</span>
                    <select className="w-full mt-1 py-2 px-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Active</option>
                        <option>Expired</option>
                    </select>
                </div>
                </div>
                <div className='flex justify-between'>
                <button className="inline-flex bg-primary text-white items-center rounded-lg px-5 py-2 text-sm">
                    Apply filter
                </button>
                <button className="inline-flex bg-white text-gray-900 items-center rounded-lg px-5 py-2 text-sm border-2 border-gray-200">
                    Clear all
                </button>
                </div>
            </div>
            
        </aside>
    )
}