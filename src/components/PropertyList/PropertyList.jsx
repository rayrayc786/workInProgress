import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const PropertyList = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};


export default PropertyList;
