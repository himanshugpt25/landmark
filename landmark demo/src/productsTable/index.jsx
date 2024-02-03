import addNew from '../assets/images/addNew.svg'
import filterIcon from '../assets/images/filterIcon.svg'
import arrowDownIcon from '../assets/images/arrowDownIcon.svg'
import editIcon from '../assets/images/editIcon.svg'
import deleteIcon from '../assets/images/deleteIcon.svg'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProducts } from '../controllers/products.controller'
export default function ProductsTable({setFilterDrawerToggle, setLocation}){
    let addr = useLocation()
    useEffect(()=>{
        setLocation(addr)
    },[addr])
    const pageSize = 10
    const [products, setProducts] = useState([])
    const [numRecords, setNumRecords] = useState(0)
    const [numPages, setNumPages] = useState(0)
    const [selectedPageNum, setSelectedPageNum] = useState(1)
    const [emptyArr, setEmptyArr] = useState([])
    useEffect(()=>{
        setDisplayProducts(0)
    },[])
    useEffect(()=>{
        console.log("setting num pages - ",Math.ceil(numRecords/pageSize))
        setNumPages(Math.ceil(numRecords/pageSize))
    },[numRecords])
    useEffect(()=>{
       setEmptyArr(()=>{
        const arr = []
        for(let i=0;i<numPages;i++){
            arr.push(i)
        }
        return arr
       })
    },[numPages])
    useEffect(()=>{
        setDisplayProducts((selectedPageNum-1)*pageSize)
    },[selectedPageNum])

    const setDisplayProducts = (startIndex)=>{
        const productsRes = getProducts(startIndex)
        setProducts(productsRes.records.slice(0,Math.min(productsRes.records.length,pageSize)))
        setNumRecords(productsRes.numRecords)
    }
    const getProductString =(products)=>{
        let str=''
        products.forEach((prod,index)=>{
            if(index>=3){
                return
            }
            if(index === products.length-1){
                str=`${str} ${prod}`
            }else{
                str=`${str} ${prod} ,`
            }
        })
        return str
    }
    return (
        <>
        <div className="w-full h-full flex flex-col rounded-lg justify-between bg-white">
            {/** ------------------------ Table head options start ----------------------------------------------- */}
            <div>
            <div className="flex justify-between items-center p-3">
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
                </div>

                <div className="flex">
                    <button className="inline-flex bg-primary text-white items-center rounded-lg px-3 py-2 text-sm">
                        <img src={addNew} className='mr-2' alt=""></img>
                        Add product
                    </button>
                    <button onClick={()=>{setFilterDrawerToggle(true)}} className="inline-flex bg-white text-gray-900 items-center rounded-lg px-3 py-2 text-sm border-2 border-gray-200 ml-2">
                        <img src={filterIcon} className='mr-2' alt=""></img>
                        Filter
                        <img src={arrowDownIcon} className='ml-2' alt=""></img>
                    </button>
                </div>
            </div>
            {/** -------------------  Table head options  end --------------------------------------------------------------- */}
            {/** -------------------  Table body start --------------------------------------------------------------- */}
            <div>   
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                VENDOR NAME
                            </th>
                            <th scope="col" class="px-6 py-3">
                                PRODUCT TYPE
                            </th>
                            <th scope="col" class="px-6 py-3">
                                UPDATE ON
                            </th>
                            <th scope="col" class="px-6 py-3">
                                VENDOR RATE EXPIRED
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STATUS
                            </th>
                            <th scope="col" class="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=>{
                            return(
                                <tr class="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.vendorName}
                            </th>
                            <td class="px-6 py-4">
                                {product.productType.length<=3?`${getProductString(product.productType)}`:`${getProductString(product.productType)} `}
                                {product.productType.length>3 && <span className='text-primary'>{product.productType.length-3} more</span>}
                            </td>
                            <td class="px-6 py-4">
                                {product.updateOn}
                            </td>
                            <td class="px-6 py-4">
                                {product.vendorRateStatus==='active'?<span className='bg-green-100 text-green-800 rounded-md py-1 px-3 text-xs'>Active</span>:
                                <span className='bg-red-100 text-red-800 rounded-md py-1 px-3 text-xs'>Expired</span>}
                            </td>
                            <td class="px-6 py-4">
                                {product.status==='active'?<span className='bg-green-100 text-green-800 rounded-md py-1 px-3 text-xs'>Active</span>:
                                <span className='bg-red-100 text-red-800 rounded-md py-1 px-3 text-xs'>Expired</span>}
                            </td>
                            <td className="px-6 py-4">
                                <div className='flex'>
                                    <img src={editIcon} alt="" className='mr-3 hover:cursor-pointer'></img>
                                    <img src={deleteIcon} alt="" className='ml-1 hover:cursor-pointer'></img>
                                </div>
                            </td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
            </div>
            {/** -------------------  Table body end --------------------------------------------------------------- */}
            {/** -------------------  Table footer start --------------------------------------------------------------- */}
            <div className='w-full flex justify-between p-4'>
                <div className='text-gray-500 text-sm'>
                    Showing <span className='text-gray-900'>{(selectedPageNum-1)*pageSize+1}-{(selectedPageNum-1)*pageSize+pageSize}</span> of <span className='text-gray-900'>{numRecords}</span>
                </div>
                <div>
                    <ul className='flex items-center -space-x-px h-8 text-sm'>
                        <li>
                            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                </svg>
                            </a>
                        </li>
                        {emptyArr.map((val,index)=>{
                            return <li>
                            <a href="#" className={(selectedPageNum === index+1)?"flex items-center justify-center px-3 h-8 leading-tight text-primary bg-primary-10 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white":"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} onClick={()=>{setSelectedPageNum(index+1)}}>{index+1}</a>
                            </li>
                        })}
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/** -------------------  Table footer end --------------------------------------------------------------- */}
        </div>
        </>
    )
}