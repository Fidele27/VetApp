import React, { useState } from 'react';
import { Lock, Upload, Save, Plus, Trash2, Edit2, X, User, GraduationCap, Briefcase, Heart, Award, Scissors, Pill, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdminPanelProps {
  onClose?: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'skills' | 'services'>('profile');

  // Mock authentication (in production, use proper authentication)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Daniel@2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please contact administrator.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lock className="text-white" size={40} />
            </div>
            <h2 className="text-3xl text-gray-900 mb-3">Admin Access Only</h2>
            <p className="text-gray-600">This area is restricted to authorized personnel</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Warning:</strong> Unauthorized access is prohibited
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Administrator Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secure password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all shadow-lg"
            >
              Secure Login
            </button>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back to Website
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-white mb-1">Content Management System</h1>
              <p className="text-emerald-100">MANIRAGUHA Daniel - Veterinary Portfolio</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 text-white px-4 py-2 rounded-lg">
                <User size={16} className="inline mr-2" />
                Admin
              </div>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  if (onClose) onClose();
                }}
                className="bg-white text-emerald-700 px-6 py-2 rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {[
              { id: 'profile', label: 'Profile & Images', icon: User },
              { id: 'education', label: 'Education & Certificates', icon: GraduationCap },
              { id: 'skills', label: 'Skills & Expertise', icon: Briefcase },
              { id: 'services', label: 'Service Categories', icon: Heart },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-4 px-6 border-b-4 transition-all ${
                    activeTab === tab.id
                      ? 'border-emerald-600 text-emerald-700 bg-emerald-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'profile' && <ProfileManagement />}
        {activeTab === 'education' && <EducationManagement />}
        {activeTab === 'skills' && <SkillsManagement />}
        {activeTab === 'services' && <ServicesManagement />}
      </div>
    </div>
  );
}

// Profile & Images Management
function ProfileManagement() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setSelectedImages([...selectedImages, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const animalImages = [
    {
      url: 'https://images.unsplash.com/photo-1699711676690-5f58cc35b51c',
      animal: 'Cow',
      description: 'Treating dairy cattle',
    },
    {
      url: 'https://images.unsplash.com/photo-1593750187970-84858a2aaf5e',
      animal: 'Goat',
      description: 'Farm veterinary care',
    },
    {
      url: 'https://images.unsplash.com/photo-1762655338189-58dd9a5bea18',
      animal: 'Pig',
      description: 'Livestock health management',
    },
    {
      url: 'https://images.unsplash.com/photo-1758395522044-c55fd32e778a',
      animal: 'Chicken',
      description: 'Poultry health inspection',
    },
    {
      url: 'https://images.unsplash.com/photo-1759164955426-cd2a0a8fc636',
      animal: 'Cat',
      description: 'Feline preventive care',
    },
    {
      url: 'https://images.unsplash.com/photo-1654119938236-de0d8ed4641d',
      animal: 'Farm Animals',
      description: 'Mixed domestic animals',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Upload className="text-emerald-700" size={24} />
          </div>
          <div>
            <h3 className="text-2xl text-gray-900">Upload Treatment Images</h3>
            <p className="text-gray-600">Add images of Daniel treating domestic animals</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-dashed border-emerald-300 rounded-xl p-12 text-center hover:border-emerald-500 transition-all cursor-pointer">
          <label className="cursor-pointer">
            <Upload className="mx-auto text-emerald-600 mb-4" size={72} />
            <p className="text-xl text-gray-700 mb-2">
              Click to upload or drag and drop
            </p>
            <p className="text-gray-500 mb-4">
              PNG, JPG up to 10MB - Multiple files supported
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Recommended: Images showing Daniel with cow, pig, goat, chicken, cat, dog, horse, sheep
            </p>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all shadow-md">
              Select Images
            </button>
          </label>
        </div>

        {selectedImages.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Upload size={20} />
              New Uploads ({selectedImages.length})
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedImages.map((img, idx) => (
                <div key={idx} className="relative group">
                  <img src={img} alt={`Upload ${idx}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
                  <button
                    onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== idx))}
                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <button className="mt-6 bg-emerald-700 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2 shadow-md">
              <Save size={20} />
              Save All Images to Gallery
            </button>
          </div>
        )}
      </div>

      {/* Current Images */}
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <h3 className="text-2xl text-gray-900 mb-6">Current Profile Images - Daniel with Animals</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {animalImages.map((img, idx) => (
            <div key={idx} className="group relative">
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={img.url}
                  alt={img.description}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{img.animal}</p>
                    <p className="text-sm text-gray-200">{img.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="flex-1 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm flex items-center justify-center gap-1">
                  <Edit2 size={14} />
                  Edit
                </button>
                <button className="bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Education & Certificates Management
function EducationManagement() {
  const [education, setEducation] = useState([
    {
      id: 1,
      degree: 'Doctor of Veterinary Medicine (DVM)',
      institution: 'University of Veterinary Science',
      year: '2018',
      description: 'Graduated with honors, specialized in domestic animal care',
    },
  ]);

  const [newEducation, setNewEducation] = useState({
    degree: '',
    institution: '',
    year: '',
    description: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      setEducation([...education, { id: Date.now(), ...newEducation }]);
      setNewEducation({ degree: '', institution: '', year: '', description: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <GraduationCap className="text-blue-700" size={24} />
            </div>
            <div>
              <h3 className="text-2xl text-gray-900">Education & Certifications</h3>
              <p className="text-gray-600">Manage academic background and professional certificates</p>
            </div>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2"
          >
            {showForm ? <X size={20} /> : <Plus size={20} />}
            {showForm ? 'Cancel' : 'Add New'}
          </button>
        </div>

        {showForm && (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
            <h4 className="text-lg text-gray-900 mb-4">Add Education/Certification</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Degree/Certification Title *</label>
                <input
                  type="text"
                  value={newEducation.degree}
                  onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                  placeholder="e.g., Doctor of Veterinary Medicine (DVM)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Institution *</label>
                <input
                  type="text"
                  value={newEducation.institution}
                  onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                  placeholder="University or Organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  value={newEducation.year}
                  onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
                  placeholder="2018"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  value={newEducation.description}
                  onChange={(e) => setNewEducation({ ...newEducation, description: e.target.value })}
                  placeholder="Brief description or achievements..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  onClick={handleAddEducation}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add Education
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 mb-1">{edu.degree}</h4>
                  <p className="text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
                  {edu.description && <p className="text-gray-600">{edu.description}</p>}
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-100 text-blue-700 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="bg-red-100 text-red-700 p-2 rounded-lg hover:bg-red-200 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Skills & Expertise Management
function SkillsManagement() {
  const [skills, setSkills] = useState([
    'Advanced Surgical Techniques',
    'Emergency & Critical Care',
    'Preventive Medicine',
    'Diagnostic Imaging',
    'Large Animal Medicine',
    'Small Animal Care',
  ]);

  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Briefcase className="text-purple-700" size={24} />
          </div>
          <div>
            <h3 className="text-2xl text-gray-900">Professional Skills & Expertise</h3>
            <p className="text-gray-600">Manage your professional skills and competencies</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-purple-200">
          <h4 className="text-lg text-gray-900 mb-4">Add New Skill</h4>
          <div className="flex gap-4">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
              placeholder="Enter skill or expertise area..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleAddSkill}
              className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors flex items-center gap-2"
            >
              <Plus size={20} />
              Add Skill
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-2 border-purple-200 flex items-center justify-between group hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <Award className="text-purple-600" size={20} />
                <span className="text-gray-800">{skill}</span>
              </div>
              <button
                onClick={() => setSkills(skills.filter((_, i) => i !== idx))}
                className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Services Management (Preventive Care, Surgery, Disease Management, Emergency Treatment)
function ServicesManagement() {
  const [services, setServices] = useState([
    {
      id: 'preventive',
      icon: Heart,
      title: 'Preventive Care',
      description: 'Regular check-ups, vaccinations, and health monitoring',
      color: 'emerald',
      details: [
        'Annual wellness examinations',
        'Vaccination programs',
        'Parasite prevention',
        'Nutritional counseling',
        'Dental care',
      ],
    },
    {
      id: 'surgery',
      icon: Scissors,
      title: 'Surgery',
      description: 'Advanced surgical procedures with proven outcomes',
      color: 'blue',
      details: [
        'Soft tissue surgery',
        'Orthopedic procedures',
        'Spay/neuter operations',
        'Emergency surgery',
        'Post-operative care',
      ],
    },
    {
      id: 'disease',
      icon: Pill,
      title: 'Disease Management',
      description: 'Diagnosis and treatment of animal diseases',
      color: 'purple',
      details: [
        'Infectious disease treatment',
        'Chronic condition management',
        'Diagnostic testing',
        'Treatment planning',
        'Follow-up care',
      ],
    },
    {
      id: 'emergency',
      icon: AlertCircle,
      title: 'Emergency Treatment',
      description: '24/7 emergency veterinary services',
      color: 'red',
      details: [
        'Critical care',
        'Trauma treatment',
        'Poison control',
        'Intensive monitoring',
        'Stabilization procedures',
      ],
    },
  ]);

  const [editingService, setEditingService] = useState<string | null>(null);
  const [editData, setEditData] = useState({ title: '', description: '', details: [''] });

  const startEdit = (service: any) => {
    setEditingService(service.id);
    setEditData({
      title: service.title,
      description: service.description,
      details: [...service.details],
    });
  };

  const saveEdit = (serviceId: string) => {
    setServices(
      services.map((s) =>
        s.id === serviceId
          ? { ...s, title: editData.title, description: editData.description, details: editData.details }
          : s
      )
    );
    setEditingService(null);
  };

  const addDetail = () => {
    setEditData({ ...editData, details: [...editData.details, ''] });
  };

  const updateDetail = (index: number, value: string) => {
    const newDetails = [...editData.details];
    newDetails[index] = value;
    setEditData({ ...editData, details: newDetails });
  };

  const removeDetail = (index: number) => {
    setEditData({ ...editData, details: editData.details.filter((_, i) => i !== index) });
  };

  const colorMap: any = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', icon: 'text-emerald-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-600' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'text-red-600' },
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-100 p-3 rounded-lg">
            <Heart className="text-emerald-700" size={24} />
          </div>
          <div>
            <h3 className="text-2xl text-gray-900">Service Categories Management</h3>
            <p className="text-gray-600">Edit service descriptions and details</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const colors = colorMap[service.color];
            const isEditing = editingService === service.id;

            return (
              <div
                key={service.id}
                className={`${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className={colors.icon} size={32} />
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.title}
                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                        className="text-xl font-semibold border-2 border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      <h4 className={`text-xl ${colors.text}`}>{service.title}</h4>
                    )}
                  </div>
                  {!isEditing ? (
                    <button
                      onClick={() => startEdit(service)}
                      className="bg-white text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                    >
                      <Edit2 size={18} />
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => saveEdit(service.id)}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                      >
                        <Save size={18} />
                      </button>
                      <button
                        onClick={() => setEditingService(null)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  )}
                </div>

                {isEditing ? (
                  <textarea
                    value={editData.description}
                    onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                    rows={2}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 mb-4"
                  />
                ) : (
                  <p className="text-gray-700 mb-4">{service.description}</p>
                )}

                <div className="space-y-2">
                  <h5 className="text-sm text-gray-600 font-semibold">Services Included:</h5>
                  {isEditing ? (
                    <div className="space-y-2">
                      {editData.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-2">
                          <input
                            type="text"
                            value={detail}
                            onChange={(e) => updateDetail(idx, e.target.value)}
                            className="flex-1 border-2 border-gray-300 rounded px-3 py-1"
                          />
                          <button
                            onClick={() => removeDetail(idx)}
                            className="bg-red-100 text-red-700 px-3 rounded hover:bg-red-200"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={addDetail}
                        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2"
                      >
                        <Plus size={16} />
                        Add Service Item
                      </button>
                    </div>
                  ) : (
                    <ul className="space-y-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
