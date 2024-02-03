import rightArrow from '../assets/images/rightArrow.svg'
import messagesIcon from '../assets/images/messageIcon.svg'
import notificatonsIcon from '../assets/images/notificationIcon.svg'
import { useEffect, useState } from 'react'
export default function Navbar({location}){
    const [path, setPath] = useState('')
    useEffect(()=>{
        console.log("location - ",location)
        setPath(()=>{
            if(location!==undefined && location.pathname!==undefined){
                let loc = location.pathname.substring(1)
                let pth = ''
                if(loc!==undefined){
                    loc.split('/').forEach((pthVal,index)=>{
                        let val = `${pthVal.substring(0,1).toUpperCase()}${pthVal.substring(1)}`
                        if(index < loc.split('/').length-1){
                            val = `${val}/`
                        }
                        pth = `${pth}${val}`
                    })
                }
            return pth
            }
            return ''
        })
    },[location])
    const getPath = (clickIndex)=>{
        let pth = window.location.origin
        path.split('/').forEach((pthVal,index)=>{
            if(index>clickIndex){
                return
            }
            const pthFormat = `${pthVal.substring(0,1).toLowerCase()}${pthVal.substring(1)}`
            pth = `${pth}/${pthFormat}`
        })
        return pth
    }
    return(
        <div className="bg-white h-12 shadow-md flex items-center px-2 justify-between">
            <div className='flex items-center'>
            {path.split('/').map((pathVal,index)=>{
                if(index === 0){
                    return(
                        <a href={`${getPath(index)}`} className="flex px-1">
                            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                        <span className='px-1 text-sm'>{pathVal}</span>
                        </a>
                    )
                }
                return(
                    <a href={`${getPath(index)}`} className="flex px-1">
                        <img src={rightArrow} alt=""></img>
                        <span className={(index===path.split('/').length-1)?'px-2 text-sm text-primary':'px-2 text-sm'}>{pathVal}</span>
                    </a>
                )
            })}
            </div>
            <div className='flex px-2'>
                <a href="#" className='flex'>
                    <img src={messagesIcon} alt=""></img>
                    <span className='px-2 text-sm text-gray-500'>Messages</span>
                </a>
                <a href="#" className='flex ml-2'>
                    <img src={notificatonsIcon} alt=""></img>
                    <span className='px-2 text-sm text-gray-500'>Notification</span>
                </a>
            </div>
        </div>
    )
}