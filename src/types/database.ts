/**
 * Database Types — Supabase PostgreSQL
 *
 * Mirrors the RLS-enabled tables in the finance app schema.
 * All tables enforce user_id isolation via Supabase RLS policies.
 */

// ─── Enums ──────────────────────────────────────────────────────

export type TransactionType = 'income' | 'expense';

export type PaymentMethod = 'cash' | 'debit' | 'credit' | 'transfer';

// ─── Tables ─────────────────────────────────────────────────────

/** profiles — extends Supabase auth.users */
export interface Profile {
    id: string;                    // UUID — matches auth.users.id
    full_name: string | null;
    preferred_currency: string;    // defaults to 'ARS'
    monthly_budget_cap: number | null;
    created_at: string;
    updated_at: string;
}

/** categories — global + user-custom */
export interface Category {
    id: string;                    // UUID
    name: string;
    icon: string;                  // emoji or icon key
    type: TransactionType | null;  // null = applies to both
    is_custom: boolean;            // false = global system category
    user_id: string | null;        // null = global, UUID = user-owned
    created_at: string;
}

/** transactions — core financial data */
export interface Transaction {
    id: string;                    // UUID
    user_id: string;               // UUID — FK to auth.users
    date: string;                  // ISO date string (YYYY-MM-DD)
    type: TransactionType;
    amount: number;                // numeric, always positive
    category_id: string | null;    // FK to categories
    entity: string | null;         // e.g. "Mercado Libre"
    account: string | null;        // e.g. "Banco Nación"
    method: PaymentMethod;
    installments: number;          // defaults to 1
    notes: string | null;
    created_at: string;
}

/** savings_goals — user savings targets */
export interface SavingsGoal {
    id: string;                    // UUID
    user_id: string;               // UUID — FK to auth.users
    name: string;
    target_amount: number;
    current_amount: number;        // defaults to 0
    deadline: string | null;       // ISO date string
    created_at: string;
}

// ─── Insert types (omit server-generated fields) ────────────────

export type TransactionInsert = Omit<Transaction, 'id' | 'user_id' | 'created_at'>;

export type CategoryInsert = Omit<Category, 'id' | 'created_at'>;

export type SavingsGoalInsert = Omit<SavingsGoal, 'id' | 'user_id' | 'created_at'>;

export type ProfileUpdate = Partial<Omit<Profile, 'id' | 'created_at'>>;

// ─── Row with relations (for queries with joins) ────────────────

export interface TransactionWithCategory extends Transaction {
    categories: Pick<Category, 'name' | 'icon'> | null;
}

// ─── Database schema type for Supabase client ───────────────────

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: Profile;
                Insert: Omit<Profile, 'created_at' | 'updated_at'>;
                Update: ProfileUpdate;
            };
            categories: {
                Row: Category;
                Insert: CategoryInsert;
                Update: Partial<CategoryInsert>;
            };
            transactions: {
                Row: Transaction;
                Insert: TransactionInsert;
                Update: Partial<TransactionInsert>;
            };
            savings_goals: {
                Row: SavingsGoal;
                Insert: SavingsGoalInsert;
                Update: Partial<SavingsGoalInsert>;
            };
        };
    };
}
