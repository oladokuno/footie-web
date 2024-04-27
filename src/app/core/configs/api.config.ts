// API endpoints configuration
import { environment } from 'src/environments/environment';
/**
 * @description API endpoints
 */
export const ApiEndpoints = {
  auth: {
    login: {
      viaEmail: () => `${environment.apiUrl}/auth/loginWithEmail`,
      viaPhone: () => `${environment.apiUrl}/auth/loginWithPhone`,
      isAuthenticated: () => `${environment.apiUrl}/auth/validateToken`,
      logout: () => `${environment.apiUrl}/auth/logout`
    }
  },
  users: {
    getAll: () => `${environment.apiUrl}/users`,
    getById: (id: string) => `${environment.apiUrl}/users/id/${id}`,
    getByEmail: (email: string) => `${environment.apiUrl}/users/email/${email}`,
    create: () => `${environment.apiUrl}/users`,
    verifyOTP: () => `${environment.apiUrl}/users/verify`,
    resendOtp: () => `${environment.apiUrl}/users/resendOtp`,
    resetPassword: () => `${environment.apiUrl}/users/resetPassword`,
    verifyResetPasswordToken: (token: string) => `${environment.apiUrl}/users/verifyPasswordResetToken/${token}`,
    updatePassword: () => `${environment.apiUrl}/users/updatePassword`,
    changeEmail: () => `${environment.apiUrl}/users/changeEmail`,
  }
}
