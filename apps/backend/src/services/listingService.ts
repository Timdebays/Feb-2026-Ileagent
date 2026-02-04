import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const listingService = {
  async getListings(filters?: any) {
    return prisma.listing.findMany({
      where: {
        isActive: true,
        verificationStatus: 'VERIFIED',
        ...filters,
      },
      include: {
        landlord: true,
        agent: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async getListingById(id: string) {
    return prisma.listing.findUnique({
      where: { id },
      include: {
        landlord: true,
        agent: true,
        inquiries: true,
      },
    });
  },

  async createListing(data: any) {
    return prisma.listing.create({
      data: {
        ...data,
        totalAnnualRent: data.rentAmount + (data.rentAmount * data.agentFeePercentage) / 100,
      },
      include: {
        landlord: true,
        agent: true,
      },
    });
  },

  async updateListing(id: string, data: any) {
    return prisma.listing.update({
      where: { id },
      data,
      include: {
        landlord: true,
        agent: true,
      },
    });
  },

  async deleteListing(id: string) {
    return prisma.listing.delete({
      where: { id },
    });
  },

  async incrementViews(id: string) {
    return prisma.listing.update({
      where: { id },
      data: { viewsCount: { increment: 1 } },
    });
  },
};
