import React, { useState } from 'react';
import { Building, User, Calendar, FileText, Award, ChevronDown, ChevronUp, Download } from 'lucide-react';

interface Internship {
  id: number;
  institution: string;
  location: string;
  supervisor: string;
  supervisorTitle: string;
  duration: string;
  description: string;
  skills: string[];
  activities: string[];
  casesHandled: number;
  certificates: string[];
  reports: string[];
}

export function Internships() {
  const [expandedInternship, setExpandedInternship] = useState<number | null>(1);

  const internships: Internship[] = [
    {
      id: 1,
      institution: 'University Veterinary Teaching Hospital',
      location: 'Portland, Oregon',
      supervisor: 'Dr. Sarah Mitchell',
      supervisorTitle: 'Chief of Small Animal Surgery',
      duration: 'September 2018 - May 2019 (9 months)',
      description:
        'Comprehensive clinical internship focusing on small animal medicine and surgery. Rotated through multiple departments including emergency medicine, internal medicine, surgery, and diagnostic imaging.',
      skills: [
        'Advanced surgical techniques',
        'Emergency and critical care',
        'Diagnostic imaging interpretation',
        'Client communication',
        'Medical record documentation',
        'Anesthesia protocols',
      ],
      activities: [
        'Assisted in 150+ surgical procedures',
        'Conducted daily rounds with senior veterinarians',
        'Participated in emergency overnight shifts',
        'Performed physical examinations and diagnostics',
        'Attended weekly case discussion seminars',
        'Shadowed specialists in cardiology and oncology',
      ],
      casesHandled: 250,
      certificates: ['Clinical Internship Certificate', 'Advanced Surgical Training'],
      reports: ['Internship_Final_Report.pdf', 'Case_Study_Collection.pdf'],
    },
    {
      id: 2,
      institution: 'Countryside Large Animal Clinic',
      location: 'Eugene, Oregon',
      supervisor: 'Dr. Robert Johnson',
      supervisorTitle: 'Senior Large Animal Veterinarian',
      duration: 'June 2018 - August 2018 (3 months)',
      description:
        'Specialized internship in large animal and farm veterinary medicine. Gained hands-on experience with livestock health management, preventive care, and field veterinary practices.',
      skills: [
        'Large animal handling',
        'Herd health management',
        'Field veterinary procedures',
        'Preventive medicine protocols',
        'Reproductive health assessment',
      ],
      activities: [
        'Conducted wellness checks on cattle, horses, and sheep',
        'Assisted in pregnancy examinations and breeding programs',
        'Administered vaccinations and deworming treatments',
        'Performed basic surgical procedures on farm animals',
        'Educated farm owners on biosecurity and disease prevention',
        'Participated in emergency farm calls',
      ],
      casesHandled: 120,
      certificates: ['Large Animal Medicine Certificate'],
      reports: ['Farm_Veterinary_Internship.pdf'],
    },
    {
      id: 3,
      institution: 'Wildlife Rehabilitation Center',
      location: 'Seattle, Washington',
      supervisor: 'Dr. Emily Chen',
      supervisorTitle: 'Wildlife Veterinarian',
      duration: 'March 2018 - May 2018 (3 months)',
      description:
        'Unique internship opportunity working with native wildlife species. Focused on rehabilitation medicine, trauma care, and release protocols for injured wild animals.',
      skills: [
        'Wildlife handling and restraint',
        'Trauma assessment',
        'Rehabilitation protocols',
        'Species-specific care',
        'Release preparation',
      ],
      activities: [
        'Provided medical care to injured birds, mammals, and reptiles',
        'Administered medications and wound care',
        'Monitored recovery progress and documented cases',
        'Prepared animals for successful release to wild',
        'Assisted in public education programs',
        'Collaborated with wildlife conservation agencies',
      ],
      casesHandled: 85,
      certificates: ['Wildlife Medicine Training Certificate'],
      reports: ['Wildlife_Rehabilitation_Summary.pdf'],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Internship Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive clinical training across diverse veterinary specialties and practice settings
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl text-emerald-700 mb-2">3</div>
            <div className="text-gray-600">Internships</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl text-emerald-700 mb-2">15</div>
            <div className="text-gray-600">Months Total</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl text-emerald-700 mb-2">450+</div>
            <div className="text-gray-600">Cases Handled</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl text-emerald-700 mb-2">5</div>
            <div className="text-gray-600">Certificates</div>
          </div>
        </div>

        {/* Internship Cards */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-emerald-300 transition-colors"
            >
              {/* Header */}
              <div
                className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-6 cursor-pointer"
                onClick={() =>
                  setExpandedInternship(expandedInternship === internship.id ? null : internship.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{internship.institution}</h3>
                    <div className="grid md:grid-cols-2 gap-3 text-emerald-50">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="text-sm">{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span className="text-sm">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="text-sm">
                          {internship.supervisor} - {internship.supervisorTitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText size={16} />
                        <span className="text-sm">{internship.casesHandled} Cases Handled</span>
                      </div>
                    </div>
                  </div>
                  <button className="ml-4">
                    {expandedInternship === internship.id ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedInternship === internship.id && (
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{internship.description}</p>
                  </div>

                  {/* Skills Learned */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3">Skills Learned</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {internship.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Daily Activities */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {internship.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certificates */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
                      <Award className="text-emerald-600" size={20} />
                      Certificates Earned
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {internship.certificates.map((cert, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Reports */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3">Documentation</h4>
                    <div className="space-y-2">
                      {internship.reports.map((report, idx) => (
                        <button
                          key={idx}
                          className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-lg transition-colors w-full md:w-auto"
                        >
                          <Download size={18} className="text-emerald-600" />
                          <span className="text-gray-700">{report}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
