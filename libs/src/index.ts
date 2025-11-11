//! Services
export * from './lib/auth/auth.service';

//! Base classes
export * from './lib/auth/base/authAPI';

//! Interfaces
export * from './lib/auth/adapter/authAPIRes.adapter';

//! Request Interfaces
export * from './lib/auth/interfaces/forget-password/IForgetReq';
export * from './lib/auth/interfaces/reset-password/IResetReq';
export * from './lib/auth/interfaces/sign-in/ISignInReq';
export * from './lib/auth/interfaces/sign-up/ISignUpReq';
export * from './lib/auth/interfaces/verify-code/IVerifyReq';

//! Response Interfaces
export * from './lib/auth/interfaces/forget-password/IForgetRes';
export * from './lib/auth/interfaces/log-out/ILogOutRes';
export * from './lib/auth/interfaces/reset-password/IResetRes';
export type { ISignInRes } from './lib/auth/interfaces/sign-in/ISignInRes';
export type { ISignUpRes } from './lib/auth/interfaces/sign-up/ISignUpRes';
export * from './lib/auth/interfaces/verify-code/IVerifyRes';

//! User Interface (export from sign-up to avoid conflicts)
export type { User } from './lib/auth/interfaces/sign-up/ISignUpRes';

//! Enums
export * from './lib/auth/enums/AuthEndPoints';

//! Adapters
export * from './lib/auth/adapter/authAPIRes.adapter';

//! Adapted Response Interfaces
export * from './lib/auth/interfaces/adapter/AdaptedSignInRes';
export * from './lib/auth/interfaces/adapter/AdaptedSignUpRes';
// Export Token

export * from './lib/auth/tokens/tokens';
