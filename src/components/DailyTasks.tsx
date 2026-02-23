import React, { useState } from 'react';
import { Calendar, Upload, Image as ImageIcon, Plus, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DailyTask {
  id: number;
  date: string;
  animalType: string;
  taskDescription: string;
  notes: string;
  image?: string;
}

export function DailyTasks() {
  const [tasks, setTasks] = useState<DailyTask[]>([
    {
      id: 1,
      date: '2026-01-19',
      animalType: 'Cow',
      taskDescription: 'Routine health checkup and vaccination for dairy cattle herd',
      notes: 'Completed vaccination for 15 cows. All animals in good health. Recommended dietary adjustments for two cows showing weight loss.',
      image: 'https://images.unsplash.com/photo-1699711676690-5f58cc35b51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBjb3clMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY4ODA4MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      date: '2026-01-18',
      animalType: 'Goat',
      taskDescription: 'Emergency treatment for goat with respiratory infection',
      notes: 'Administered antibiotics and provided supportive care. Owner educated on proper housing ventilation. Follow-up scheduled in 3 days.',
      image: 'https://images.unsplash.com/photo-1593750187970-84858a2aaf5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBnb2F0JTIwZmFybXxlbnwxfHx8fDE3Njg4MDgxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      date: '2026-01-17',
      animalType: 'Pig',
      taskDescription: 'Pre-breeding health assessment for pig farm',
      notes: 'Examined 8 breeding sows. All cleared for breeding program. Discussed nutrition plan with farm manager.',
      image: 'https://images.unsplash.com/photo-1762655338189-58dd9a5bea18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBwaWclMjBsaXZlc3RvY2t8ZW58MXx8fHwxNzY4ODA4MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      date: '2026-01-16',
      animalType: 'Chicken',
      taskDescription: 'Poultry flock health inspection and vaccination program',
      notes: 'Inspected 200+ chickens. Administered Newcastle disease vaccine. Recommended improved biosecurity measures.',
      image: 'https://images.unsplash.com/photo-1758395522044-c55fd32e778a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBjaGlja2VuJTIwcG91bHRyeXxlbnwxfHx8fDE3Njg4MDgxODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      date: '2026-01-15',
      animalType: 'Cat',
      taskDescription: 'Feline dental cleaning and oral health assessment',
      notes: 'Performed professional dental cleaning. Extracted one infected tooth. Owner advised on dental care routine.',
      image: 'https://images.unsplash.com/photo-1759164955426-cd2a0a8fc636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjB2ZXRlcmluYXJ5JTIwY2FyZXxlbnwxfHx8fDE3Njg3ODU4NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      date: '2026-01-14',
      animalType: 'Mixed Farm Animals',
      taskDescription: 'Farm visit for general livestock health management',
      notes: 'Conducted wellness checks across multiple species. Provided deworming treatment. Discussed herd management strategies.',
      image: 'https://images.unsplash.com/photo-1654119938236-de0d8ed4641d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYW5pbWFsJTIwdmV0ZXJpbmFyeSUyMGNhcmV8ZW58MXx8fHwxNzY4ODA4MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newTask, setNewTask] = useState<Partial<DailyTask>>({
    date: new Date().toISOString().split('T')[0],
    animalType: '',
    taskDescription: '',
    notes: '',
  });
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTask = () => {
    if (newTask.animalType && newTask.taskDescription) {
      const task: DailyTask = {
        id: Date.now(),
        date: newTask.date || new Date().toISOString().split('T')[0],
        animalType: newTask.animalType,
        taskDescription: newTask.taskDescription,
        notes: newTask.notes || '',
        image: uploadedImagePreview || undefined,
      };
      setTasks([task, ...tasks]);
      setNewTask({
        date: new Date().toISOString().split('T')[0],
        animalType: '',
        taskDescription: '',
        notes: '',
      });
      setUploadedImagePreview('');
      setShowUploadForm(false);
    }
  };

  const animalTypes = ['Cow', 'Goat', 'Pig', 'Chicken', 'Cat', 'Dog', 'Horse', 'Sheep', 'Rabbit', 'Duck', 'Turkey', 'Donkey', 'Guinea Pig', 'Hamster', 'Other'];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl text-gray-900 mb-4">Daily Tasks & Activities</h2>
            <p className="text-xl text-gray-600">
              Daily log of veterinary activities with domestic animals
            </p>
          </div>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-2"
          >
            {showUploadForm ? <X size={20} /> : <Plus size={20} />}
            {showUploadForm ? 'Cancel' : 'Add New Task'}
          </button>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-emerald-200">
            <h3 className="text-2xl text-gray-900 mb-6">Add Daily Task</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Date *</label>
                <input
                  type="date"
                  value={newTask.date}
                  onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Animal Type *</label>
                <select
                  value={newTask.animalType}
                  onChange={(e) => setNewTask({ ...newTask, animalType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select animal type</option>
                  {animalTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Task Description *</label>
                <input
                  type="text"
                  value={newTask.taskDescription}
                  onChange={(e) => setNewTask({ ...newTask, taskDescription: e.target.value })}
                  placeholder="e.g., Routine health checkup and vaccination"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Notes & Observations</label>
                <textarea
                  value={newTask.notes}
                  onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
                  placeholder="Add detailed notes about the task..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">Upload Image (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-emerald-500 transition-colors">
                  {uploadedImagePreview ? (
                    <div className="relative">
                      <img
                        src={uploadedImagePreview}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                      <button
                        onClick={() => setUploadedImagePreview('')}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <Upload className="mx-auto text-gray-400 mb-2" size={48} />
                      <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  onClick={handleAddTask}
                  disabled={!newTask.animalType || !newTask.taskDescription}
                  className="w-full bg-emerald-700 text-white py-3 px-6 rounded-lg hover:bg-emerald-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Add Task to Log
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Timeline */}
        <div className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Image */}
                {task.image && (
                  <div className="md:col-span-1">
                    <ImageWithFallback
                      src={task.image}
                      alt={task.taskDescription}
                      className="w-full h-full object-cover min-h-[250px]"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={`${task.image ? 'md:col-span-2' : 'md:col-span-3'} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                          {task.animalType}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">
                            {new Date(task.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl text-gray-900">{task.taskDescription}</h3>
                    </div>
                  </div>

                  {task.notes && (
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                      <h4 className="text-sm text-gray-600 mb-2">Notes & Observations:</h4>
                      <p className="text-gray-700 leading-relaxed">{task.notes}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}