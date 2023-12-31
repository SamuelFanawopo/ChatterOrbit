import React from 'react'
import PostItem from 'src/components/posts/PostItem/PostItem'

const Feed: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example: Rendering multiple PostItems */}
        {[...Array(6)].map((_, index) => (
          <PostItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default Feed
