export const PRESERVED_QUERYSTRING_PARAMS = ['after_sign_in_url', 'after_sign_up_url', 'redirect_url'];

export const DEV_BROWSER_SSO_JWT_KEY = 'clerk-db-jwt';
export const DEV_BROWSER_SSO_JWT_PARAMETER = '__dev_session';
export const DEV_BROWSER_SSO_JWT_PARAMETER_SEPARATOR = '*^*';
export const DEV_BROWSER_SSO_JWT_PARAMETER_WITH_HASH_SEPARATOR = '*^**';
export const DEV_BROWSER_SSO_JWT_HTTP_HEADER = 'Clerk-Cookie';

// TODO: Clerk should not depend on ./ui
// Remove this dependency after components v4
export { ERROR_CODES } from '../ui/common/constants';

export const CLERK_MODAL_STATE = '__clerk_modal_state';
export const CLERK_SYNCED = '__clerk_synced';
