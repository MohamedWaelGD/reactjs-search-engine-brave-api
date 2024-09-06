import React, { useEffect, useState } from 'react'

const SearchInput = (props: any) => {
  const { setSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearch(searchTerm);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, setSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="relative">
      <input
        type='search'
        placeholder='Search...'
        className='bg-none outline-none border-none py-2 px-5 rounded-full w-72 text-sky-950 shadow-sm'
        onChange={handleInputChange}/>
    </div>
  )
}

export default SearchInput
