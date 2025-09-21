import { AuthResponse, LoginRequest } from '@/types/auth'
import toast from 'react-hot-toast'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1'

class ApiService {
    private baseURL: string

    constructor(baseURL: string = API_BASE_URL) {
        this.baseURL = baseURL
    }

    async request<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T | null> {
        const url = `${this.baseURL}${endpoint}`

        const config: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        }

        // Add auth token if available
        const token = localStorage.getItem('auth_token')
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            }
        }

        try {
            const response = await fetch(url, config)

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                const errorMessage = errorData.detail || `HTTP error! status: ${response.status}`
                // Don't show toast for 404 errors (translation not found)
                if (response.status !== 404) {
                    toast.error(errorMessage)
                }
                throw new Error(errorMessage)
            }

            // Handle 204 No Content responses (like DELETE operations)
            if (response.status === 204) {
                return null
            }

            return response.json()
        } catch (error) {
            if (error instanceof TypeError && error.message.includes('fetch')) {
                toast.error('Failed to fetch - Please check your connection')
            }
            throw error
        }
    }

    // Auth endpoints
    async login(credentials: LoginRequest): Promise<AuthResponse> {
        const formData = new FormData()
        formData.append('username', credentials.username)
        formData.append('password', credentials.password)

        try {
            const response = await fetch(`${this.baseURL}/auth/token`, {
                method: 'POST',
                body: formData,
            })

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}))
                const errorMessage = errorData.detail || 'Login failed'
                toast.error(errorMessage)
                throw new Error(errorMessage)
            }

            return response.json()
        } catch (error) {
            if (error instanceof TypeError && error.message.includes('fetch')) {
                toast.error('Failed to fetch - Please check your connection')
            }
            throw error
        }
    }


    // Health check
    async healthCheck(): Promise<{ status: string; timestamp: string; service: string }> {
        const result = await this.request<{ status: string; timestamp: string; service: string }>('/health')
        if (!result) {
            throw new Error('Health check failed - no response received')
        }
        return result
    }
}

export const apiService = new ApiService()
