/**
 * Shared configuration for the desktop app
 */

const IS_DEV = !!process.env.ELECTRON_RENDERER_URL

/**
 * Get the API base URL
 * Uses MAIN_VITE_API_URL from .env if set, otherwise defaults to production
 */
export function getApiUrl(): string {
  return import.meta.env.MAIN_VITE_API_URL || "https://21st.dev"
}

/**
 * Check if running in development mode
 */
export function isDev(): boolean {
  return IS_DEV
}
