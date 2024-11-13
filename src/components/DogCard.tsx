import React from 'react';
import { DogBreed } from '../types';
import {
  Heart,
  Dog,
  Brain,
  Zap,
  Volume2,
  Brush,
  Shield,
  Scissors,
} from 'lucide-react';

interface DogCardProps {
  dog: DogBreed;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const renderRating = (value: number, max: number = 5) => {
    return (
      <div className='flex gap-1'>
        {[...Array(max)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i < value ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform'>
      <div className='relative pb-[66.67%] bg-gray-100'>
        <img
          src={dog.image_link}
          alt={dog.name}
          className='absolute inset-0 w-full h-full object-contain bg-white'
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500';
          }}
        />
      </div>
      <div className='p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>{dog.name}</h2>

        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Heart className='w-5 h-5 text-red-500' />
              <span className='text-sm text-gray-600'>Good with Children</span>
            </div>
            {renderRating(dog.good_with_children)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Dog className='w-5 h-5 text-blue-500' />
              <span className='text-sm text-gray-600'>Good with Dogs</span>
            </div>
            {renderRating(dog.good_with_other_dogs)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Brain className='w-5 h-5 text-purple-500' />
              <span className='text-sm text-gray-600'>Trainability</span>
            </div>
            {renderRating(dog.trainability)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Zap className='w-5 h-5 text-yellow-500' />
              <span className='text-sm text-gray-600'>Energy Level</span>
            </div>
            {renderRating(dog.energy)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Volume2 className='w-5 h-5 text-green-500' />
              <span className='text-sm text-gray-600'>Barking Level</span>
            </div>
            {renderRating(dog.barking)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Shield className='w-5 h-5 text-indigo-500' />
              <span className='text-sm text-gray-600'>Protectiveness</span>
            </div>
            {renderRating(dog.protectiveness)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Scissors className='w-5 h-5 text-pink-500' />
              <span className='text-sm text-gray-600'>Shedding</span>
            </div>
            {renderRating(dog.shedding)}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Brush className='w-5 h-5 text-orange-500' />
              <span className='text-sm text-gray-600'>Grooming Needs</span>
            </div>
            {renderRating(dog.grooming)}
          </div>
        </div>

        <div className='mt-6 pt-6 border-t border-gray-100'>
          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <h3 className='text-sm font-medium text-gray-600 mb-2'>Size</h3>
                <p className='text-sm'>
                  <span className='font-semibold'>Height:</span>{' '}
                  {dog.min_height_male}-{dog.max_height_male} inches
                </p>
                <p className='text-sm'>
                  <span className='font-semibold'>Weight:</span>{' '}
                  {dog.min_weight_male}-{dog.max_weight_male} lbs
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-medium text-gray-600 mb-2'>
                Life Expectancy
              </h3>
              <p className='text-sm font-semibold'>
                {dog.min_life_expectancy}-{dog.max_life_expectancy} years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
