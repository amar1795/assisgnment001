function Avatar({url, className}) {
  return (
    <img 
    loading='lazy'
    className={`w-10 h-10 below-430:h-8 below-430:w-8 rounded-full object-cover object-center cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}

    src={url}
    alt="profile picture" />
  )
}
export default Avatar;




