export const generateReceiptId = () => {
  return `REC-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;
};

export const calculatePlatformFee = (amount: number, isInitial: boolean = true) => {
  const percentage = isInitial ? 2 : 1;
  return (amount * percentage) / 100;
};

export const calculateLandlordPayout = (amount: number, platformFee: number) => {
  return amount - platformFee;
};

export const formatCurrency = (amount: number, currency: string = 'NGN') => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
  }).format(amount);
};
