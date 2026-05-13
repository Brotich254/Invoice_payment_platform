import { prisma } from './prisma';

export function calcInvoiceTotal(items: { quantity: number; unitPrice: number }[]) {
  return items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
}

export async function generateInvoiceNumber(userId: string): Promise<string> {
  const count = await prisma.invoice.count({ where: { userId } });
  return `INV-${String(count + 1).padStart(4, '0')}`;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function isOverdue(dueDate: Date, status: string): boolean {
  return status !== 'PAID' && status !== 'CANCELLED' && new Date(dueDate) < new Date();
}
