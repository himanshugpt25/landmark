export default function TitlesDropdown({}){
    const options = [{title:'Transportation',options:['Airfare','Motor coach charter','Shuttle']},{title:'Accomodations',options:['Air BnB','Guest House']}]
    return(
        <div className="h-full overflow-y-auto bg-gray-50 rounded-lg border-gray-300 border-2 p-4">
            <ul>
                {options.map((option)=>{return (
                    <li>
                    <span>{option.title}</span>
                    <ul>
                        {option.options.map((opt)=>{return (
                             <li className="hover:bg-gray-100 pl-3">
                             <div class="flex items-center">
                                 <input id={`checkbox-${option.title}-${opt}`} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                 <label for={`checkbox-${option.title}-${opt}`} class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{opt}</label>
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