'use client'

import { RouteManagement } from '@/components/route-management/route-management'
import { TextToISL } from '@/components/text-to-isl/text-to-isl'
import { ISLDictionary } from '@/components/isl-dictionary/isl-dictionary'

interface ContentAreaProps {
    activeMenu: string
}

export const ContentArea: React.FC<ContentAreaProps> = ({ activeMenu }) => {
    const renderContent = () => {
        switch (activeMenu) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                            <p className="text-gray-600">Welcome to your SignVerse dashboard</p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Train Routes</p>
                                        <p className="text-2xl font-bold text-gray-900">2</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Text to ISL</p>
                                        <p className="text-2xl font-bold text-gray-900">0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">ISL Dictionary</p>
                                        <p className="text-2xl font-bold text-gray-900">0</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Settings</p>
                                        <p className="text-2xl font-bold text-gray-900">-</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Train route created: &quot;Golden Temple&quot;</span>
                                    <span className="text-xs text-gray-400 ml-auto">2 hours ago</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Train route created: &quot;Mumbai Central Indore Superfast&quot;</span>
                                    <span className="text-xs text-gray-400 ml-auto">4 hours ago</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Translation service initialized</span>
                                    <span className="text-xs text-gray-400 ml-auto">6 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'route-management':
                return <RouteManagement />

            case 'text-to-isl':
                return <TextToISL />

            case 'audio-file-to-isl':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Audio File to ISL</h1>
                            <p className="text-gray-600">Upload audio files to convert to Indian Sign Language video</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-200 text-center">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Audio File</h3>
                            <p className="text-gray-600 mb-6">Drag and drop your audio file here or click to browse</p>
                            <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                Choose Audio File
                            </button>
                        </div>
                    </div>
                )

            case 'speech-to-isl':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Speech to ISL</h1>
                            <p className="text-gray-600">Record speech and convert to Indian Sign Language video</p>
                        </div>
                        <div className="bg-white p-8 border border-gray-200 text-center">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Record Speech</h3>
                            <p className="text-gray-600 mb-6">Click the microphone to start recording your speech</p>
                            <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                Start Recording
                            </button>
                        </div>
                    </div>
                )

            case 'isl-dictionary':
                return <ISLDictionary />


            case 'settings':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                            <p className="text-gray-600">Manage your application settings and preferences</p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                        defaultValue="admin"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="pt-4">
                                    <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            default:
                return (
                    <div className="text-center py-12">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
                        <p className="text-gray-600">The requested page could not be found.</p>
                    </div>
                )
        }
    }

    return (
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
            {renderContent()}
        </div>
    )
}
