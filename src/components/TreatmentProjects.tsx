import React, { useState } from 'react';
import { Filter, Calendar, Pill, Scissors, AlertCircle, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type ProjectCategory = 'all' | 'preventive' | 'surgery' | 'disease' | 'emergency';

interface TreatmentProject {
  id: number;
  title: string;
  animalType: string;
  category: ProjectCategory;
  problem: string;
  diagnosis: string;
  treatment: string;
  tools: string[];
  outcome: string;
  date: string;
  image: string;
}

export function TreatmentProjects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: TreatmentProject[] = [
    {
      id: 1,
      title: 'Canine Dermatitis Treatment',
      animalType: 'Dog (Golden Retriever)',
      category: 'disease',
      problem: '8-year-old Golden Retriever presented with severe skin inflammation, hair loss, and constant scratching. Owner reported symptoms persisting for 3 weeks.',
      diagnosis: 'Diagnosed with atopic dermatitis through skin scraping and allergy testing. Identified environmental allergens as primary trigger.',
      treatment: 'Implemented multi-modal treatment: corticosteroid therapy, antihistamines, medicated baths, and dietary modifications. Prescribed hypoallergenic diet and topical medications.',
      tools: ['Corticosteroids', 'Antihistamines', 'Medicated Shampoo', 'Allergy Test Kit', 'Skin Biopsy Tools'],
      outcome: 'Complete resolution of symptoms within 4 weeks. Follow-up at 3 months showed no recurrence. Owner reported significant improvement in quality of life.',
      date: '2025-12-15',
      image: 'https://images.unsplash.com/photo-1692906456160-385d805be646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB2ZXRlcmluYXJ5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc2ODgwNzQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: 'Feline Spay Surgery',
      animalType: 'Cat (Domestic Shorthair)',
      category: 'surgery',
      problem: '6-month-old female cat scheduled for routine ovariohysterectomy (spay surgery) as preventive care measure.',
      diagnosis: 'Pre-operative examination confirmed good health status. Blood work and physical exam cleared for surgery.',
      treatment: 'Performed routine ovariohysterectomy under general anesthesia. Used advanced surgical techniques with minimal invasion. Post-operative pain management and monitoring.',
      tools: ['Surgical Suite', 'Anesthesia Machine', 'Scalpel & Instruments', 'Sutures', 'Pain Medication'],
      outcome: 'Surgery completed successfully in 45 minutes. Patient recovered well from anesthesia. Discharged same day with post-op care instructions. Sutures removed after 10 days with excellent healing.',
      date: '2026-01-05',
      image: 'https://images.unsplash.com/photo-1759164955426-cd2a0a8fc636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB2ZXRlcmluYXJ5JTIwY2FyZXxlbnwxfHx8fDE3Njg3ODU4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: 'Emergency GDV Surgery',
      animalType: 'Dog (Great Dane)',
      category: 'emergency',
      problem: '4-year-old Great Dane presented with acute abdominal distension, restlessness, and non-productive vomiting. Emergency case suspected gastric dilatation-volvulus (GDV).',
      diagnosis: 'Radiographs confirmed GDV (bloat). Immediate life-threatening condition requiring emergency surgical intervention.',
      treatment: 'Emergency gastric decompression followed by exploratory surgery. Derotated stomach and performed gastropexy to prevent recurrence. Fluid therapy and intensive monitoring.',
      tools: ['Emergency Surgery Kit', 'Gastropexy Instruments', 'IV Fluids', 'X-Ray Machine', 'Monitoring Equipment'],
      outcome: 'Patient stabilized successfully. No tissue necrosis found during surgery. Full recovery within 2 weeks. Gastropexy prevents future GDV episodes.',
      date: '2025-11-22',
      image: 'https://images.unsplash.com/photo-1673090586803-e146697186ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhlYWx0aHklMjBkb2d8ZW58MXx8fHwxNzY4ODA3NDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: 'Vaccination Protocol Implementation',
      animalType: 'Mixed (Dogs & Cats)',
      category: 'preventive',
      problem: 'New client with multiple pets requiring comprehensive vaccination schedule and health assessment.',
      diagnosis: 'Completed thorough health examinations for 3 dogs and 2 cats. Reviewed vaccination history and identified gaps in preventive care.',
      treatment: 'Developed customized vaccination schedule: Core vaccines (Rabies, DHPP for dogs, FVRCP for cats) and lifestyle-based vaccines. Included deworming and flea prevention.',
      tools: ['Vaccines', 'Syringes', 'Deworming Medication', 'Flea Prevention', 'Health Records System'],
      outcome: 'All pets successfully vaccinated without adverse reactions. Established annual wellness schedule. Owners educated on preventive care importance.',
      date: '2025-10-08',
      image: 'https://images.unsplash.com/photo-1725859189283-eaeb03a0a1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwc3VyZ2VyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg4MDc0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const categories = [
    { id: 'all' as ProjectCategory, label: 'All Projects', icon: Filter },
    { id: 'preventive' as ProjectCategory, label: 'Preventive Care', icon: Heart },
    { id: 'surgery' as ProjectCategory, label: 'Surgery', icon: Scissors },
    { id: 'disease' as ProjectCategory, label: 'Disease Management', icon: Pill },
    { id: 'emergency' as ProjectCategory, label: 'Emergency Treatment', icon: AlertCircle },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Treatment Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world veterinary cases showcasing diagnostic expertise and successful treatment outcomes
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-emerald-700 px-3 py-1 rounded-full text-sm">
                    {project.animalType}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm">
                      {new Date(project.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500 mb-1">Problem</h4>
                    <p className="text-gray-700">{project.problem}</p>
                  </div>

                  {expandedProject === project.id && (
                    <>
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Diagnosis</h4>
                        <p className="text-gray-700">{project.diagnosis}</p>
                      </div>

                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Treatment Procedure</h4>
                        <p className="text-gray-700">{project.treatment}</p>
                      </div>

                      <div>
                        <h4 className="text-sm text-gray-500 mb-2">Tools & Medications Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Outcome & Follow-up</h4>
                        <p className="text-emerald-700">{project.outcome}</p>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={() =>
                    setExpandedProject(expandedProject === project.id ? null : project.id)
                  }
                  className="mt-6 text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  {expandedProject === project.id ? 'Show Less' : 'Read Full Case Study'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
