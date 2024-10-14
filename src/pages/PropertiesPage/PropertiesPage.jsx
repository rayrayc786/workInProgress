import React, { useState } from 'react';
import FiltersSidebar from '../../components/FiltersSidebar/FiltersSidebar';
import PropertyList from '../../components/PropertyList/PropertyList';
import ResultsSummary from '../../components/ResultsSummary/ResultsSummary';
import Property1Image from '../../assets/property1.png'
const propertiesData = [
  {
    id: 1,
    name: 'BLK 6-1403, Vascon Tulips Gold',
    location: 'Avinashi Road, Coimbatore',
    image: Property1Image,
    minInvested: 8000,
    propertyValue: 8000,
  },
  {
    id: 2,
    name: 'BLK 6-1403, Vascon Tulips Gold',
    location: 'Avinashi Road, Coimbatore',
    image: Property1Image,
    minInvested: 8000,
    propertyValue: 8000,
  },
  // More properties...
];

const PropertiesPage = ({ properties, totalResults }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      {/* Sidebar for filters */}
      <div
        className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'} w-full lg:w-1/4`}
      >
        <FiltersSidebar />
      </div>

      {/* Toggle button for mobile */}
      <div className="lg:hidden mb-4">
        <button
          className="p-2 bg-blue-600 text-white rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? 'Close Filters' : 'Open Filters'}
        </button>
      </div>

      {/* Property list */}
      <div className="w-full lg:w-3/4">
        <ResultsSummary totalResults={totalResults} />
        <PropertyList properties={propertiesData} />
      </div>
    </div>
  );
};


export default PropertiesPage;
