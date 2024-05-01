

// document.addEventListener('DOMContentLoaded', function () {
//     const loadMoreBtn = document.getElementById('loadMoreBtn');
//     const imagesPerLoad = 4;
//     const allImages = document.querySelectorAll('#imageContainer .gallary_item');
//     let currentOffset = 0;

//     function showAdditionalImages() {
//       for (let i = currentOffset; i < currentOffset + imagesPerLoad; i++) {
//         if (allImages[i]) {
//           allImages[i].style.display = 'block';
//         }
//       }
//       currentOffset += imagesPerLoad;

//       if (currentOffset >= allImages.length) {
//         loadMoreBtn.style.display = 'none';
//       }
//     }

//     // Hide images initially
//     for (let i = imagesPerLoad; i < allImages.length; i++) {
//       allImages[i].style.display = 'none';
//     }

//     loadMoreBtn.addEventListener('click', showAdditionalImages);
//   });



