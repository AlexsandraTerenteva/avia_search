import TicketList from '../TicketList';
import FilterGroup from '../FilterGroup';

function MainLayout() {
  return (
    <div className="flex justify-center p-8 space-x-4">
      <FilterGroup />
      <div className="flex flex-col min-w-[50%]">
        <TicketList />
      </div>
    </div>
  );
}

export default MainLayout;
