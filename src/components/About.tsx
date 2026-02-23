import React from 'react';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const certifications = [
    'Doctor of Veterinary Medicine (DVM)',
    'Advanced Surgical Techniques Certification',
    'Emergency & Critical Care Specialist',
    'Canine & Feline Internal Medicine',
    'Licensed Veterinary Practitioner',
  ];

  const specializations = [
    {
      icon: Heart,
      title: 'Preventive Care',
      description: 'Regular check-ups, vaccinations, and health monitoring',
    },
    {
      icon: Award,
      title: 'Surgical Excellence',
      description: 'Advanced surgical procedures with proven outcomes',
    },
    {
      icon: Users,
      title: 'Client Education',
      description: 'Empowering pet owners with knowledge and care guidance',
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">About Daniel Vet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A compassionate veterinary professional dedicated to excellence in animal healthcare
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759164955427-14ca448a839d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY2xpbmljJTIwYW5pbWFsc3xlbnwxfHx8fDE3Njg3NjcyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Daniel Vet with animals"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <GraduationCap className="text-emerald-700" size={24} />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Professional Background</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Daniel graduated from a prestigious veterinary school with honors and has 
                  dedicated over 5 years to providing exceptional care for domestic animals. With 
                  extensive experience in both clinical and emergency settings, Daniel brings a 
                  comprehensive approach to veterinary medicine.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Heart className="text-blue-700" size={24} />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Philosophy of Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every animal deserves compassionate, evidence-based care. Daniel believes in 
                  treating each patient with individualized attention, working closely with pet 
                  owners to ensure optimal health outcomes and quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-900 mb-8 text-center">Areas of Specialization</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <Icon className="text-emerald-700 mb-4" size={32} />
                  <h4 className="text-xl text-gray-900 mb-2">{spec.title}</h4>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
            <Award className="text-emerald-700" size={28} />
            Certifications & Licenses
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />
                <p className="text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
