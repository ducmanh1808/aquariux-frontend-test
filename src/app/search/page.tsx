'use client';

import SearchForm from '@/containers/Search/SearchForm';
import SearchHistory from '@/containers/Search/SearchHistory';

export default function SearchPage() {
  return (
    <div className="p-4 space-y-8">
      <SearchForm />
      <SearchHistory />
    </div>
  );
}
