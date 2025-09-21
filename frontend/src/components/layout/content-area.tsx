'use client'

import { Camera, Mic, FileText, Users } from 'lucide-react'
import { RouteManagement } from '@/components/route-management/route-management'

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
                                        <Camera className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Video Translations</p>
                                        <p className="text-2xl font-bold text-gray-900">24</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <Mic className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Audio Translations</p>
                                        <p className="text-2xl font-bold text-gray-900">18</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <FileText className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Text Translations</p>
                                        <p className="text-2xl font-bold text-gray-900">42</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 border border-gray-200">
                                <div className="flex items-center">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <Users className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-600">Community Members</p>
                                        <p className="text-2xl font-bold text-gray-900">156</p>
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
                                    <span className="text-sm text-gray-600">Video translation completed: &quot;Hello World&quot;</span>
                                    <span className="text-xs text-gray-400 ml-auto">2 hours ago</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Audio translation completed: &quot;Good morning&quot;</span>
                                    <span className="text-xs text-gray-400 ml-auto">4 hours ago</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Text translation completed: &quot;Thank you&quot;</span>
                                    <span className="text-xs text-gray-400 ml-auto">6 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'route-management':
                return <RouteManagement />

            case 'video-translation':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Translation</h1>
                            <p className="text-gray-600">Upload or record video to translate sign language to text</p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 text-center">
                            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Video</h3>
                            <p className="text-gray-600 mb-6">Drag and drop your video file here or click to browse</p>
                            <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                Choose File
                            </button>
                        </div>
                    </div>
                )

            case 'audio-translation':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Audio Translation</h1>
                            <p className="text-gray-600">Convert speech to sign language gestures and animations</p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 text-center">
                            <Mic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Record Audio</h3>
                            <p className="text-gray-600 mb-6">Click the microphone to start recording your speech</p>
                            <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                Start Recording
                            </button>
                        </div>
                    </div>
                )

            case 'text-translation':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Text Translation</h1>
                            <p className="text-gray-600">Translate text content to sign language representations</p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enter Text</h3>
                            <textarea
                                className="w-full p-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                rows={6}
                                placeholder="Enter the text you want to translate to sign language..."
                            ></textarea>
                            <div className="mt-4 flex justify-end">
                                <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                    Translate
                                </button>
                            </div>
                        </div>
                    </div>
                )

            case 'community':
                return (
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
                            <p className="text-gray-600">Connect with the sign language learning community</p>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 text-center">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join the Community</h3>
                            <p className="text-gray-600 mb-6">Connect with other users and share your sign language experiences</p>
                            <button className="px-6 py-3 text-white font-medium transition-colors" style={{ backgroundColor: 'oklch(50% 0.134 242.749)' }}>
                                Explore Community
                            </button>
                        </div>
                    </div>
                )

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
