let currentIndex = 0;
const images = [
    { src: './ibrahim-rifath-0oupcJsr_lo-unsplash.jpg', alt: 'beautiful forest scenery'},
    { src: './boris-smokrovic-DPXytK8Z59Y-unsplash.jpg', alt: 'blue bird on a branch'},
    { src: './giraffe-standing-tall-african.jpg', alt: 'Giraffe Standing  '},
    { src: './boris-smokrovic-RLLR0oRz16Y-unsplash.jpg', alt: 'a bird spreading its wings'},
    { src: './clem-onojeghuo-7rrgPPljqYU-unsplash.jpg', alt: 'A bird'},
    { src: './jcob-nasyr-67sVPjK6Q7I-unsplash.jpg', alt: 'Bird stting in rainforest'},
    { src: './beautiful-waterfall-image.jpg', alt: 'Beautiful wallpaper stock photo'},
    { src: './photo-zebras-ngorongoro-crater-tanzania.jpg', alt: 'BeautifulZebrasin Tanzania'},
   
]

const imageContainer = document.getElementById('imageContainer');
const mainImage = document.getElementById('mainImage');
    // Loop for each image and create a thumbnail
images.forEach( function(image){
    let thumb = document.createElement('img');
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.classList.add('thumb');
    //Event listener when thumbnail is clicked
thumb.onclick = function(){
    mainImage.src = image.src;
    mainImage.alt = image.alt;
    currentIndex = index; // To update the current index 
};
    //Append the thumbnail to the scrollabe container 
imageContainer.appendChild(thumb);

});
    //Function handle the use of righ and left key to navigate to text and previous image
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1);
        mainImage.src = images[currentIndex].src;
        mainImage.alt = image[currentIndex].alt;
    }
    else if (event.key === 'ArrowLeft'){
        currentIndex = (currentIndex - 1);
        mainImage.src = images[currentIndex].src;
        mainImage.alt = image[currentIndex].alt;
    }
    });