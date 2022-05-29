import {ReactComponent as IconRemove} from "./images/icon-remove.svg"; 

const FilterBar = ({filtersArray, removeFilter, clearFilter}) => {
    return (
        <div className={filtersArray.length < 1 ? "w-0 h-0" :'w-4/5 h-24 bg-white absolute top-28 left-[10vw] rounded-md flex'}>
        <div className='flex flex-wrap gap-3 justify-self-center w-2/3 ml-3 pb-2'>
          {
            filtersArray.map((filter, index) => {
              return <div key={index} className="flex self-end">
                <button className='bg-cyanBg text-dDarkCyan px-2 text-sm' >{filter}</button>
                <button className='bg-dDarkCyan h-8 w-6 px-1' onClick={() => removeFilter(index)}><IconRemove/></button>
                </div>
            })
         }
        </div>
        <button className={filtersArray.length < 1 ? "hidden" :'text-dDarkCyan justify-self-end w-1/3 h-1/3 self-center pl-5'} onClick={() => clearFilter()}>Clear</button>
      </div>
    )
}

export default FilterBar;