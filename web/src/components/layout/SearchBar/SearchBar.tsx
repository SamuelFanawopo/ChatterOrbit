import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  return (
    <div>
      <div className="flex items-center border rounded-full px-3 py-1">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          className="bg-transparent p-2 focus:outline-none text-gray-800"
          placeholder="Search..."
        />
      </div>
    </div>
  )
}

export default SearchBar
