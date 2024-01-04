import React from 'react'
import PostItem from 'src/components/posts/PostItem/PostItem'

const Feed: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center gap-6">
        {/* Example: Rendering multiple PostItems */}
        {[...Array(6)].map((_, index) => (
          <PostItem key={index} />
        ))}
      </div>
    </div>
  )
}

export default Feed
