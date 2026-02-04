import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export const paymentService = {
  async createPayment(data: any) {
    const escrowReference = uuidv4();
    
    return prisma.payment.create({
      data: {
        ...data,
        escrowReference,
        status: 'HELD',
        platformFee: data.amount * (data.platformFeePercentage / 100),
        landlordPayout: data.amount - (data.amount * (data.platformFeePercentage / 100)),
      },
    });
  },

  async getPaymentById(id: string) {
    return prisma.payment.findUnique({
      where: { id },
      include: {
        listing: true,
        tenant: true,
        lease: true,
      },
    });
  },

  async getPayments(filters?: any) {
    return prisma.payment.findMany({
      where: filters,
      include: {
        listing: true,
        tenant: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  },

  async releasePayment(id: string) {
    return prisma.payment.update({
      where: { id },
      data: {
        status: 'RELEASED',
        releaseDate: new Date(),
      },
    });
  },

  async refundPayment(id: string, reason: string) {
    return prisma.payment.update({
      where: { id },
      data: {
        status: 'REFUNDED',
      },
    });
  },
};
