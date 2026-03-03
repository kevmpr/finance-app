/**
 * Centralized currency and date formatting utilities.
 * All money amounts in the app MUST use formatCurrency() for display.
 */

const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

/**
 * Format a number as Argentine Pesos ($ 1.234,56).
 */
export function formatCurrency(amount: number): string {
    return currencyFormatter.format(amount);
}

/**
 * Format a date based on locale.
 */
export function formatDate(date: Date | string, lang: string = 'es'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const locale = lang === 'en' ? 'en-US' : 'es-AR';
    return d.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Format a date as YYYY-MM-DD (for input[type=date]).
 */
export function toInputDate(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
}

/**
 * Get the month name in a given locale.
 */
export function getMonthName(month: number, lang: string = 'es'): string {
    const locale = lang === 'en' ? 'en-US' : 'es-AR';
    return new Date(2024, month, 1).toLocaleDateString(locale, { month: 'long' });
}

/**
 * Format a percentage (e.g., 0.756 → "75,6%").
 */
export function formatPercent(value: number, lang: string = 'es'): string {
    const locale = lang === 'en' ? 'en-US' : 'es-AR';
    return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(value);
}
