import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import { ChevronDownIcon, XIcon } from 'lucide-react';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi',
  'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo',
  'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
];

const PROPERTY_TYPES = [
  'apartment',
  'house',
  'studio',
  'duplex',
  'self_contain',
  'room',
  'office',
];

interface SearchFiltersProps {
  onFilterChange?: (filters: SearchFilters) => void;
  compact?: boolean;
}

export interface SearchFilters {
  state?: string;
  propertyTypes?: string[];
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  verified?: boolean;
}

const SearchFilters = React.forwardRef<HTMLDivElement, SearchFiltersProps>(
  ({ onFilterChange, compact = false }, ref) => {
    const [filters, setFilters] = useState<SearchFilters>({
      verified: true,
    });

    const [expanded, setExpanded] = useState(!compact);

    const handleStateChange = (state: string) => {
      const newFilters = { ...filters, state: state || undefined };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handlePropertyTypeToggle = (type: string) => {
      const types = filters.propertyTypes || [];
      const updated = types.includes(type)
        ? types.filter((t) => t !== type)
        : [...types, type];
      const newFilters = {
        ...filters,
        propertyTypes: updated.length > 0 ? updated : undefined,
      };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFilters = { ...filters, minPrice: e.target.value ? parseInt(e.target.value) : undefined };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newFilters = { ...filters, maxPrice: e.target.value ? parseInt(e.target.value) : undefined };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleBedroomsChange = (bedrooms: number) => {
      const newFilters = { ...filters, minBedrooms: bedrooms || undefined };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleClearFilters = () => {
      const newFilters = { verified: true };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    if (compact && !expanded) {
      return (
        <Button
          ref={ref}
          variant="outline"
          onClick={() => setExpanded(true)}
          className="w-full"
        >
          <ChevronDownIcon className="w-4 h-4 mr-2" />
          Show Filters
        </Button>
      );
    }

    return (
      <Card ref={ref}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Search Filters</CardTitle>
          {compact && (
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <XIcon className="w-5 h-5" />
            </button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {/* State Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              State
            </label>
            <select
              value={filters.state || ''}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All States</option>
              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Property Type Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Property Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PROPERTY_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.propertyTypes?.includes(type) || false}
                    onChange={() => handlePropertyTypeToggle(type)}
                    className="w-4 h-4 rounded border-slate-300 text-emerald-600"
                  />
                  <span className="text-sm text-slate-700 capitalize">
                    {type.replace(/_/g, ' ')}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Monthly Rent Range (₦)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Min price"
                value={filters.minPrice || ''}
                onChange={handleMinPriceChange}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="number"
                placeholder="Max price"
                value={filters.maxPrice || ''}
                onChange={handleMaxPriceChange}
                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">
              Minimum Bedrooms
            </label>
            <select
              value={filters.minBedrooms || ''}
              onChange={(e) => handleBedroomsChange(e.target.value ? parseInt(e.target.value) : 0)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Any</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}+ Bedrooms
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <Button
            variant="ghost"
            onClick={handleClearFilters}
            className="w-full"
          >
            Clear All Filters
          </Button>
        </CardContent>
      </Card>
    );
  }
);

SearchFilters.displayName = 'SearchFilters';

export { SearchFilters };
