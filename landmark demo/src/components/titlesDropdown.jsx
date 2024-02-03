export default function TitlesDropdown({}){
    const options = [{title:'Transportation',options:['Airfare','Motor coach charter','Motor coach daily charter','Shuttle','Bus Ticket','Subway']},{title:'Accomodations',options:['Air BnB','Guest House']}]
    return(
        <div className="h-full p-4">
            <ul>
                {options.map((option)=>{return (
                    <li className="my-2">
                    <span className="text-sm text-gray-900">{option.title}</span>
                    <ul>
                        {option.options.map((opt)=>{return (
                             <li className="hover:bg-gray-100 pl-3 py-2 hover:cursor-pointer">
                             <div class="flex items-center hover:cursor-pointer">
                                 <input id={`checkbox-${option.title}-${opt}`} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded accent-primary focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 hover:cursor-pointer"/>
                                 <label for={`checkbox-${option.title}-${opt}`} class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:cursor-pointer">{opt}</label>
                             </div>
                            </li>
                        )})}
                    </ul>
                    </li>
                )})}
            </ul>
        </div>
    )
}