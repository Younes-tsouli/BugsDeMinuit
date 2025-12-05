'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface DriveFile {
    id: number;
    name: string;
    type: 'image';
    thumbnail: string;
    isBlurred: boolean;
}

const driveFiles: DriveFile[] = [
    { id: 1, name: 'vacances_2022.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 2, name: 'anniversaire_marc.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 3, name: 'projet_alpha.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 4, name: 'soiree_plage.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 5, name: 'bureau_equipe.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 6, name: 'weekend_ski.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 7, name: 'restaurant_julien.jpg', type: 'image', thumbnail: '/img.png', isBlurred: true },
    { id: 8, name: 'masqué.jpg', type: 'image', thumbnail: '/img.png', isBlurred: false },
];

export default function DriveApp() {
    const [selectedFile, setSelectedFile] = useState<DriveFile | null>(null);

    if (selectedFile) {
        return (
            <div className="h-full bg-gray-50 flex flex-col">
                {/* Header */}
                <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
                    <button
                        onClick={() => setSelectedFile(null)}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                    >
                        <span>←</span>
                        <span>Retour</span>
                    </button>
                    <h2 className="text-lg font-medium">{selectedFile.name}</h2>
                    <div className="w-20"></div>
                </div>

                {/* Image Viewer */}
                <div className="flex-1 flex items-center justify-center p-8 bg-gray-900 relative">
                    <div className={`relative w-full h-full ${selectedFile.isBlurred ? 'blur-xl' : ''}`}>
                        <Image
                            src={selectedFile.thumbnail}
                            alt={selectedFile.name}
                            fill
                            className="object-contain"
                            style={{ filter: selectedFile.isBlurred ? 'blur(20px)' : 'none' }}
                        />
                    </div>
                </div>

                {selectedFile.name === 'masqué.jpg' && !selectedFile.isBlurred && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <div className="bg-red-900 text-white p-8 rounded-lg max-w-md text-center">
                            <div className="text-6xl mb-4">⚠️</div>
                            <h3 className="text-2xl font-bold mb-4">FICHIER COMPROMIS</h3>
                            <p className="mb-4">
                                Cette image contient des données sensibles qui ont été exfiltrées.
                            </p>
                            <p className="text-red-300">
                                Toutes vos données personnelles sont maintenant entre nos mains.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="h-full bg-white flex flex-col">
            {/* Drive Header */}
            <div className="border-b bg-white px-6 py-4">
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <svg className="w-10 h-10" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                            <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                            <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                            <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                            <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                            <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                            <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                        </svg>
                        <h1 className="text-xl font-medium text-gray-800">Mon Drive</h1>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="px-6 py-2 border-b bg-gray-50">
                <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-600">Mon Drive</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-900">Photos personnelles</span>
                </div>
            </div>

            {/* Files Grid */}
            <div className="flex-1 overflow-auto p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {driveFiles.map((file) => (
                        <button
                            key={file.id}
                            onClick={() => setSelectedFile(file)}
                            className="group relative bg-white border border-gray-200 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <div className="aspect-square bg-gray-100 rounded mb-2 overflow-hidden relative">
                                <Image
                                    src={file.thumbnail}
                                    alt={file.name}
                                    fill
                                    className={`object-cover ${
                                        file.isBlurred ? 'blur-md' : ''
                                    }`}
                                    style={{ filter: file.isBlurred ? 'blur(8px)' : 'none' }}
                                />
                            </div>

                            {/* File Info */}
                            <div className="flex items-start space-x-2">
                                <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                </svg>
                                <div className="flex-1 min-w-0 text-left">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {file.name}
                                    </p>
                                    <p className="text-xs text-gray-500">Image</p>
                                </div>
                            </div>

                            {file.name === 'masqué.jpg' && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                    Sensible
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

