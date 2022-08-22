import PropType from 'prop-types';
import { ReactComponent as IconRemove } from '../images/icon-remove.svg';

const FilterBar = ({ filtersArray, removeFilter, clearFilter }) => (
  <div
    className={
      !filtersArray.length
        ? 'w-0 h-0'
        : 'w-4/5 h-24 bg-white absolute top-28 left-[10vw] rounded-md flex'
    }
  >
    <div className="flex flex-wrap gap-3 justify-self-center w-2/3 ml-3 pb-2">
      {filtersArray.map((filter, index) => (
        <div key={index} className="flex self-end">
          <button
            type="button"
            className="bg-cyanBg text-dDarkCyan px-2 text-sm"
          >
            {filter}
          </button>
          <button
            type="button"
            className="bg-dDarkCyan h-8 w-6 px-1"
            onClick={() => removeFilter(index)}
          >
            <IconRemove />
          </button>
        </div>
      ))}
    </div>
    <button
      type="button"
      className={
        !filtersArray.length
          ? 'hidden'
          : 'text-dDarkCyan justify-self-end w-1/3 h-1/3 self-center pl-5'
      }
      onClick={() => clearFilter()}
    >
      Clear
    </button>
  </div>
);

FilterBar.propTypes = {
  filtersArray: PropType.array.isRequired,
  removeFilter: PropType.func.isRequired,
  clearFilter: PropType.func.isRequired,
};

export default FilterBar;
