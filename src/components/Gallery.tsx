import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  category: 'treatment' | 'recovery' | 'internship' | 'certificates';
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1692906456160-385d805be646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB2ZXRlcmluYXJ5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc2ODgwNzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Canine Treatment Session',
      description: 'Post-surgical care and monitoring for dermatitis treatment',
      category: 'treatment',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1759164955426-cd2a0a8fc636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB2ZXRlcmluYXJ5JTIwY2FyZXxlbnwxfHx8fDE3Njg3ODU4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Feline Examination',
      description: 'Pre-operative assessment for spay procedure',
      category: 'treatment',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1673090586803-e146697186ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhlYWx0aHklMjBkb2d8ZW58MXx8fHwxNzY4ODA3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Successful Recovery',
      description: 'Fully recovered patient after GDV emergency surgery',
      category: 'recovery',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwc3VyZ2VyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg4MDc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Surgical Equipment Setup',
      description: 'Sterile surgical suite preparation for procedures',
      category: 'treatment',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1621371236495-1520d8dc72a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBjYXQlMjB2ZXRlcmluYXJ5fGVufDF8fHx8MTc2ODgwNzU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Multi-Pet Wellness Visit',
      description: 'Comprehensive health assessment for multiple pets',
      category: 'treatment',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjByZWNvdmVyeSUyMGhlYWx0aHxlbnwxfHx8fDE3Njg4MDc1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Recovery Monitoring',
      description: 'Patient recovery assessment and follow-up care',
      category: 'recovery',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1733783489145-f3d3ee7a9ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwaW50ZXJuJTIwd29ya3xlbnwxfHx8fDE3Njg4MDc1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Internship Clinical Work',
      description: 'Hands-on training during clinical internship',
      category: 'internship',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1606619788441-a9a360e8f685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBoZWFsdGglMjBjaGVja3VwfGVufDF8fHx8MTc2ODgwNzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Health Checkup Session',
      description: 'Routine wellness examination and preventive care',
      category: 'treatment',
    },
  ];

  const filteredImages = filter === 'all' ? images : images.filter((img) => img.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = images.find((img) => img.id === selectedImage);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Image Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visual documentation of treatments, procedures, and clinical experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Images
          </button>
          <button
            onClick={() => setFilter('treatment')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              filter === 'treatment'
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Treatment Procedures
          </button>
          <button
            onClick={() => setFilter('recovery')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              filter === 'recovery'
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Recovery Stages
          </button>
          <button
            onClick={() => setFilter('internship')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              filter === 'internship'
                ? 'bg-emerald-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Internship Activities
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image.id)}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <ImageWithFallback
                src={selectedImageData.url}
                alt={selectedImageData.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl mb-2">{selectedImageData.title}</h3>
                <p className="text-gray-300">{selectedImageData.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
