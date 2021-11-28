image_array = [
'Images\dad.jpg',
'Images\mom.jpg',
'Images\sanjiv.jpg',
'Images\daksh.jpg',
'Images\everyone.jpg'
]

function nextImage()
{
  random_index = Math.floor(Math.random() * image_array.length);

  select_image = image_array[random_index]

  document.getElementById("family_member_image").src = `./Images/${select_image}`
}