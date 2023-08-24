cloudinary.v2.uploader
  .upload('80s-vid.mp4', {
    folder: '',
    resource_type: 'video'})
  .then(console.log);