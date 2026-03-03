export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export const translations = {
    es: {
        // Nav
        'nav.dashboard': 'Dashboard',
        'nav.transactions': 'Transacciones',
        'nav.savings': 'Ahorros',
        'nav.data': 'Datos',
        'nav.logout': 'Cerrar sesión',

        // Auth
        'auth.title': 'Finanzas Personales',
        'auth.subtitle': 'Tu dinero, bajo control. Para siempre.',
        'auth.google': 'Continuar con Google',
        'auth.privacy': 'Tus datos están protegidos y aislados por usuario.',

        // Dashboard
        'dash.title': 'Dashboard',
        'dash.income': 'Ingresos',
        'dash.expenses': 'Egresos',
        'dash.balance': 'Balance Neto',
        'dash.savings': 'Ahorros',
        'dash.thisMonth': 'Este mes',
        'dash.vsLastYear': 'vs. mismo mes año anterior',
        'dash.noData': 'Sin datos para mostrar',
        'dash.welcome': 'Bienvenido',

        // Transactions
        'tx.title': 'Transacciones',
        'tx.add': 'Agregar transacción',
        'tx.type': 'Tipo',
        'tx.amount': 'Monto',
        'tx.category': 'Categoría',
        'tx.entity': 'Entidad',
        'tx.account': 'Cuenta',
        'tx.method': 'Método de pago',
        'tx.installments': 'Cuotas',
        'tx.notes': 'Notas',
        'tx.date': 'Fecha',
        'tx.income': 'Ingreso',
        'tx.expense': 'Egreso',
        'tx.cash': 'Efectivo',
        'tx.debit': 'Débito',
        'tx.credit': 'Crédito',
        'tx.transfer': 'Transferencia',
        'tx.save': 'Guardar',
        'tx.cancel': 'Cancelar',
        'tx.edit': 'Editar',
        'tx.delete': 'Eliminar',
        'tx.copy': 'Copiar gasto anterior',
        'tx.copyHint': 'Duplica un registro y cambia la fecha',
        'tx.filter': 'Filtrar',
        'tx.all': 'Todos',
        'tx.noTransactions': 'No hay transacciones registradas.',
        'tx.deleteConfirm': '¿Eliminar esta transacción?',
        'tx.saved': 'Transacción guardada',

        // Categories
        'cat.title': 'Categorías',
        'cat.global': 'Globales',
        'cat.custom': 'Personalizadas',
        'cat.add': 'Agregar categoría',
        'cat.name': 'Nombre',
        'cat.icon': 'Ícono',
        'cat.food': 'Alimentación',
        'cat.transport': 'Transporte',
        'cat.housing': 'Vivienda',
        'cat.entertainment': 'Entretenimiento',
        'cat.health': 'Salud',
        'cat.education': 'Educación',
        'cat.salary': 'Salario',
        'cat.freelance': 'Freelance',
        'cat.other': 'Otros',

        // Savings
        'sav.title': 'Metas de Ahorro',
        'sav.add': 'Nueva meta',
        'sav.name': 'Nombre de la meta',
        'sav.target': 'Monto objetivo',
        'sav.current': 'Monto actual',
        'sav.deadline': 'Fecha límite',
        'sav.progress': 'Progreso',
        'sav.suggestion': 'Sugerencia 50/30/20',
        'sav.needs': 'Necesidades (50%)',
        'sav.wants': 'Deseos (30%)',
        'sav.savingsLabel': 'Ahorro (20%)',
        'sav.basedOn': 'Basado en tus ingresos de',
        'sav.noGoals': 'No hay metas de ahorro creadas.',

        // Import/Export
        'data.title': 'Importar / Exportar',
        'data.export': 'Exportar a Excel',
        'data.exportDesc': 'Descarga todas tus transacciones en formato .xlsx',
        'data.import': 'Importar desde Excel',
        'data.importDesc': 'Sube un archivo .xlsx con el formato correcto',
        'data.columns': 'Columnas: Fecha | Tipo | Monto | Categoría | Entidad | Cuenta | Método | Notas',
        'data.preview': 'Vista previa',
        'data.confirm': 'Confirmar importación',
        'data.processing': 'Procesando...',
        'data.success': 'Importación exitosa',
        'data.errors': 'Errores encontrados',
        'data.row': 'Fila',

        // Charts
        'chart.comparison': 'Comparativa Mensual',
        'chart.breakdown': 'Desglose por Categoría',
        'chart.trend': 'Tendencia',
        'chart.currentYear': 'Año actual',
        'chart.lastYear': 'Año anterior',

        // Common
        'common.save': 'Guardar',
        'common.cancel': 'Cancelar',
        'common.delete': 'Eliminar',
        'common.edit': 'Editar',
        'common.close': 'Cerrar',
        'common.loading': 'Cargando...',
        'common.error': 'Error',
        'common.success': 'Éxito',

        // Supabase errors
        'error.auth.expired': 'Tu sesión expiró. Por favor, iniciá sesión de nuevo.',
        'error.auth.invalid': 'Credenciales inválidas.',
        'error.rls.denied': 'No tenés permiso para esta operación.',
        'error.network': 'Error de conexión. Verificá tu internet.',
        'error.validation': 'Datos inválidos. Verificá los campos.',
        'error.notFound': 'Recurso no encontrado.',
        'error.duplicate': 'Este registro ya existe.',
        'error.unknown': 'Ocurrió un error inesperado.',

        // Footer
        'footer.text': 'Hecho con ❤️ por Kevin',
        'footer.rights': 'Todos los derechos reservados.',
    },
    en: {
        // Nav
        'nav.dashboard': 'Dashboard',
        'nav.transactions': 'Transactions',
        'nav.savings': 'Savings',
        'nav.data': 'Data',
        'nav.logout': 'Sign out',

        // Auth
        'auth.title': 'Personal Finance',
        'auth.subtitle': 'Your money, under control. Forever.',
        'auth.google': 'Continue with Google',
        'auth.privacy': 'Your data is protected and isolated per user.',

        // Dashboard
        'dash.title': 'Dashboard',
        'dash.income': 'Income',
        'dash.expenses': 'Expenses',
        'dash.balance': 'Net Balance',
        'dash.savings': 'Savings',
        'dash.thisMonth': 'This month',
        'dash.vsLastYear': 'vs. same month last year',
        'dash.noData': 'No data to display',
        'dash.welcome': 'Welcome',

        // Transactions
        'tx.title': 'Transactions',
        'tx.add': 'Add transaction',
        'tx.type': 'Type',
        'tx.amount': 'Amount',
        'tx.category': 'Category',
        'tx.entity': 'Entity',
        'tx.account': 'Account',
        'tx.method': 'Payment method',
        'tx.installments': 'Installments',
        'tx.notes': 'Notes',
        'tx.date': 'Date',
        'tx.income': 'Income',
        'tx.expense': 'Expense',
        'tx.cash': 'Cash',
        'tx.debit': 'Debit',
        'tx.credit': 'Credit',
        'tx.transfer': 'Transfer',
        'tx.save': 'Save',
        'tx.cancel': 'Cancel',
        'tx.edit': 'Edit',
        'tx.delete': 'Delete',
        'tx.copy': 'Copy previous expense',
        'tx.copyHint': 'Duplicate a record and change the date',
        'tx.filter': 'Filter',
        'tx.all': 'All',
        'tx.noTransactions': 'No transactions recorded.',
        'tx.deleteConfirm': 'Delete this transaction?',
        'tx.saved': 'Transaction saved',

        // Categories
        'cat.title': 'Categories',
        'cat.global': 'Global',
        'cat.custom': 'Custom',
        'cat.add': 'Add category',
        'cat.name': 'Name',
        'cat.icon': 'Icon',
        'cat.food': 'Food',
        'cat.transport': 'Transportation',
        'cat.housing': 'Housing',
        'cat.entertainment': 'Entertainment',
        'cat.health': 'Health',
        'cat.education': 'Education',
        'cat.salary': 'Salary',
        'cat.freelance': 'Freelance',
        'cat.other': 'Other',

        // Savings
        'sav.title': 'Savings Goals',
        'sav.add': 'New goal',
        'sav.name': 'Goal name',
        'sav.target': 'Target amount',
        'sav.current': 'Current amount',
        'sav.deadline': 'Deadline',
        'sav.progress': 'Progress',
        'sav.suggestion': '50/30/20 Suggestion',
        'sav.needs': 'Needs (50%)',
        'sav.wants': 'Wants (30%)',
        'sav.savingsLabel': 'Savings (20%)',
        'sav.basedOn': 'Based on your income of',
        'sav.noGoals': 'No savings goals created.',

        // Import/Export
        'data.title': 'Import / Export',
        'data.export': 'Export to Excel',
        'data.exportDesc': 'Download all your transactions as .xlsx',
        'data.import': 'Import from Excel',
        'data.importDesc': 'Upload a .xlsx file with the correct format',
        'data.columns': 'Columns: Date | Type | Amount | Category | Entity | Account | Method | Notes',
        'data.preview': 'Preview',
        'data.confirm': 'Confirm import',
        'data.processing': 'Processing...',
        'data.success': 'Import successful',
        'data.errors': 'Errors found',
        'data.row': 'Row',

        // Charts
        'chart.comparison': 'Monthly Comparison',
        'chart.breakdown': 'Category Breakdown',
        'chart.trend': 'Trend',
        'chart.currentYear': 'Current year',
        'chart.lastYear': 'Last year',

        // Common
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.close': 'Close',
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',

        // Supabase errors
        'error.auth.expired': 'Your session expired. Please sign in again.',
        'error.auth.invalid': 'Invalid credentials.',
        'error.rls.denied': 'You do not have permission for this action.',
        'error.network': 'Connection error. Check your internet.',
        'error.validation': 'Invalid data. Please check the fields.',
        'error.notFound': 'Resource not found.',
        'error.duplicate': 'This record already exists.',
        'error.unknown': 'An unexpected error occurred.',

        // Footer
        'footer.text': 'Built with ❤️ by Kevin',
        'footer.rights': 'All rights reserved.',
    },
} as const;

export type TranslationKey = keyof typeof translations.es;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: TranslationKey) {
        return translations[lang][key] || translations[defaultLang][key];
    };
}

export function getLocalizedPath(lang: string, path: string = '') {
    return `/${lang}/${path}`;
}

/**
 * Map a Supabase error to an i18n key.
 * Usage: t(mapSupabaseError(error))
 */
export function mapSupabaseError(error: { message?: string; code?: string; status?: number }): TranslationKey {
    const msg = (error.message ?? '').toLowerCase();
    const code = error.code ?? '';

    if (code === 'PGRST301' || error.status === 401 || msg.includes('jwt expired')) {
        return 'error.auth.expired';
    }
    if (msg.includes('invalid login') || msg.includes('invalid credentials')) {
        return 'error.auth.invalid';
    }
    if (code === '42501' || msg.includes('policy') || msg.includes('rls')) {
        return 'error.rls.denied';
    }
    if (msg.includes('fetch') || msg.includes('network') || msg.includes('econnrefused')) {
        return 'error.network';
    }
    if (msg.includes('not found') || error.status === 404) {
        return 'error.notFound';
    }
    if (code === '23505' || msg.includes('duplicate') || msg.includes('unique')) {
        return 'error.duplicate';
    }
    if (msg.includes('validation') || msg.includes('invalid input')) {
        return 'error.validation';
    }
    return 'error.unknown';
}
