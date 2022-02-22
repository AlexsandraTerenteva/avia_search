import SortBlock from './SortBlock';
import FilterByTransfer from './FilterByTransfer';
import FilterByPrice from './FilterByPrice';
import FilterByAirline from './FilterByAirline';

function FilterGroup() {
  return (
    <div>
      <SortBlock />
      <FilterByTransfer />
      <FilterByPrice />
      <FilterByAirline />
    </div>
  );
}

export default FilterGroup;
