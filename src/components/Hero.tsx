import React from 'react';
import { ArrowRight, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onScrollTo: (section: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
              <Stethoscope size={18} />
              <span className="text-sm">Professional Veterinary Care</span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-gray-900">
              MANIRAGUHA Daniel
            </h1>

            <p className="text-xl text-gray-700">
              Dedicated Veterinary Doctor
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate about providing exceptional veterinary care for domestic animals. 
              Specializing in preventive medicine, surgical interventions, and emergency treatment 
              with a commitment to animal welfare and client education.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onScrollTo('experience')}
                className="bg-emerald-700 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2"
              >
                View Experience
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onScrollTo('projects')}
                className="bg-white text-emerald-700 border-2 border-emerald-700 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-2"
              >
                Treatment Projects
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onScrollTo('dailytasks')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Daily Tasks
              </button>
              <button
                onClick={() => onScrollTo('contact')}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact Daniel
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl text-emerald-700">500+</div>
                <div className="text-sm text-gray-600">Animals Treated</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-700">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-emerald-700">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1640161415278-a5ac46f82d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4MDc0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Veterinarian Daniel"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Specialized in</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                  Preventive Care
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Surgery
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Emergency Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}