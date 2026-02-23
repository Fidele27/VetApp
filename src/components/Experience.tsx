import React from 'react';
import { Building2, Calendar, CheckCircle, Download } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Veterinarian',
      organization: 'Green Valley Animal Hospital',
      location: 'Portland, OR',
      duration: 'January 2022 - Present',
      type: 'Full-time',
      responsibilities: [
        'Lead veterinarian for domestic animal care unit',
        'Performed over 200 surgical procedures with 99% success rate',
        'Supervised and mentored 3 junior veterinarians',
        'Implemented new preventive care protocols',
        'Managed emergency cases and critical care patients',
      ],
      achievements: [
        'Reduced post-operative complications by 35%',
        'Increased client satisfaction scores to 4.9/5.0',
        'Developed innovative treatment protocol for chronic conditions',
      ],
    },
    {
      title: 'Associate Veterinarian',
      organization: 'Compassionate Paws Veterinary Clinic',
      location: 'Seattle, WA',
      duration: 'June 2020 - December 2021',
      type: 'Full-time',
      responsibilities: [
        'Provided comprehensive veterinary care for dogs and cats',
        'Conducted routine examinations and diagnostics',
        'Performed soft tissue and orthopedic surgeries',
        'Collaborated with specialists for complex cases',
        'Client consultation and education',
      ],
      achievements: [
        'Treated over 300 animals annually',
        'Achieved 97% client retention rate',
        'Implemented digital health records system',
      ],
    },
    {
      title: 'Veterinary Assistant',
      organization: 'Sunny Meadows Farm Veterinary Services',
      location: 'Eugene, OR',
      duration: 'March 2019 - May 2020',
      type: 'Part-time',
      responsibilities: [
        'Assisted senior veterinarians in large animal care',
        'Conducted wellness checks for livestock',
        'Administered medications and vaccinations',
        'Maintained medical equipment and supplies',
        'Educated farm owners on animal health',
      ],
      achievements: [
        'Supported treatment of over 150 farm animals',
        'Developed preventive care schedule for dairy cattle',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A track record of excellence in veterinary medicine across diverse clinical settings
          </p>
          <button className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors">
            <Download size={18} />
            Download Full CV
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-200 h-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full border-4 border-white shadow-md" />
                </div>

                {/* Content Card */}
                <div
                  className={`lg:col-start-${index % 2 === 0 ? '1' : '2'} bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl text-gray-900">{exp.title}</h3>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Building2 size={18} className="text-emerald-600" />
                        <span>{exp.organization}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={18} className="text-emerald-600" />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-lg text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-emerald-700">
                          <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block lg:col-start-${index % 2 === 0 ? '2' : '1'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
