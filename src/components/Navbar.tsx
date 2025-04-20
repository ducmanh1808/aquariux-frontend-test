'use client';

import Link from 'next/link';
import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { LuSearch } from 'react-icons/lu';
import { useWeatherStore } from '@/store/weatherStore';

const Navbar: React.FC = () => {
  const { city, countryCode } = useWeatherStore();

  return (
    <nav className="w-screen fixed top-0 left-0 shadow-xl bg-white flex items-center justify-between px-10 py-2 h-12 z-[1000]">
      <div className="flex items-center">
        <GrLocation className="text-gray-600 text-lg mr-2" />
        <h1 className="text-lg font-semibold text-gray-900 capitalize">
          {`${city}, ${countryCode}`}
        </h1>
      </div>
      <Link href="/search">
        <LuSearch className="text-gray-600 text-lg" />
      </Link>
    </nav>
  );
};

export default Navbar;
