const UserSuggestions = () => {
  // Mock data for recommended users, replace with real data
  const defaultProfilePic = '../../../assets/default_icon.jpg'

  const recommendations = [
    { name: 'Alice Johnson', recommender: 'John Doe' },
    { name: 'David Smith', recommender: 'Jane Smith' },
    { name: 'Emma Wilson', recommender: 'Mike Brown' },
    { name: 'James Williams', recommender: 'Anna Johnson' },
    { name: 'Olivia Brown', recommender: 'Chris Davis' },
  ]

  return (
    <aside className="mt-20 w-65 bg-white shadow-lg rounded-lg p-4 mr-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Who to follow
      </h3>
      <div className="space-y-4">
        {recommendations.map((user, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src={defaultProfilePic}
                alt="Profile"
                className="object-cover w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-md font-medium text-gray-700">
                  {user.name}
                </h4>
                <p className="text-sm text-gray-500">Followed by </p>{' '}
                <p className="text-sm text-gray-500"> {user.recommender}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-semibold">
              Follow
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-semibold"
        >
          See more
        </a>
      </div>
    </aside>
  )
}

export default UserSuggestions
