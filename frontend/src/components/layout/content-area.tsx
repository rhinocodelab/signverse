'use client'

import { RouteManagement } from '@/components/route-management/route-management'
import { TextToISL } from '@/components/text-to-isl/text-to-isl'
import AudioToISL from '@/components/audio-to-isl/audio-to-isl'
import SpeechToISL from '@/components/speech-to-isl/speech-to-isl'
import { ISLDictionary } from '@/components/isl-dictionary/isl-dictionary'
import { GeneralAnnouncementISL } from '@/components/general-announcement-isl/general-announcement-isl'
import { AnnouncementTemplates } from '@/components/announcement-templates/announcement-templates'

interface ContentAreaProps {
    activeMenu: string
}

export const ContentArea: React.FC<ContentAreaProps> = ({ activeMenu }) => {
    const renderContent = () => {
        switch (activeMenu) {
            case 'dashboard':
                return (
                    <div className="p-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="space-y-6">
                                <div className="mb-8">
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
                        </div>
                    </div>
                )

            case 'route-management':
                return <RouteManagement />

            case 'text-to-isl':
                return <TextToISL />

            case 'audio-file-to-isl':
                return <AudioToISL />

            case 'speech-to-isl':
                return <SpeechToISL />

            case 'isl-dictionary':
                return <ISLDictionary />

            case 'general-announcement-isl':
                return <GeneralAnnouncementISL />

            case 'announcement-templates':
                return <AnnouncementTemplates />


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
        <div className="p-6 bg-gray-50">
            {renderContent()}
        </div>
    )
}
