import React from 'react';
import { Card, CardContent, CardHeader } from './card';
import { Badge } from './badge';
import { MapPinIcon, BedIcon, BathIcon, Eye } from 'lucide-react';
import clsx from 'clsx';

interface ListingCardProps {
  id: string;
  title: string;
  image: string;
  city: string;
  state: string;
  rentAmount: number;
  agentFeePercentage: number;
  bedrooms: number;
  bathrooms: number;
  verificationStatus: 'verified' | 'pending' | 'rejected' | 'flagged';
  viewsCount: number;
  onClick?: () => void;
}

const ListingCard = React.forwardRef<HTMLDivElement, ListingCardProps>(
  (
    {
      id,
      title,
      image,
      city,
      state,
      rentAmount,
      agentFeePercentage,
      bedrooms,
      bathrooms,
      verificationStatus,
      viewsCount,
      onClick,
    },
    ref
  ) => {
    const totalRent = rentAmount + (rentAmount * agentFeePercentage) / 100;
    const agentFeeAmount = (rentAmount * agentFeePercentage) / 100;

    const getVerificationColor = () => {
      switch (verificationStatus) {
        case 'verified':
          return 'verified';
        case 'pending':
          return 'pending';
        case 'rejected':
          return 'rejected';
        case 'flagged':
          return 'flagged';
        default:
          return 'secondary';
      }
    };

    return (
      <Card
        ref={ref}
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={onClick}
      >
        {/* Image Container */}
        <div className="relative h-48 bg-slate-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Verification Badge */}
          <div className="absolute top-3 right-3">
            <Badge variant={getVerificationColor()}>
              {verificationStatus === 'verified' ? '✓ Verified' : 'Pending'}
            </Badge>
          </div>

          {/* Views Count */}
          <div className="absolute bottom-3 left-3 bg-black/60 text-white rounded-full px-3 py-1 flex items-center gap-1 text-xs">
            <Eye className="w-3.5 h-3.5" />
            {viewsCount} views
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-slate-600 mb-3">
            <MapPinIcon className="w-4 h-4" />
            <span>{city}, {state}</span>
          </div>

          {/* Property Features */}
          <div className="flex gap-4 text-xs text-slate-600 mb-4">
            <div className="flex items-center gap-1">
              <BedIcon className="w-4 h-4" />
              {bedrooms} bed
            </div>
            <div className="flex items-center gap-1">
              <BathIcon className="w-4 h-4" />
              {bathrooms} bath
            </div>
          </div>

          {/* Price Section */}
          <div className="border-t pt-3">
            <div className="text-xs text-slate-600 mb-1">Annual Rent</div>
            <div className="flex items-baseline gap-2 mb-2">
              <div className="text-lg font-bold text-emerald-600">
                ₦{rentAmount.toLocaleString()}
              </div>
              {agentFeePercentage > 0 && (
                <div className="text-xs text-slate-600">
                  +{agentFeePercentage}% agent fee
                </div>
              )}
            </div>
            {agentFeePercentage > 0 && (
              <div className="text-xs text-slate-600">
                Total: ₦{totalRent.toLocaleString()}/year
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
);

ListingCard.displayName = 'ListingCard';

export { ListingCard };
