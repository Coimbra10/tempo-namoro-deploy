const images=["images/foto1.jpg","images/foto2.jpg","images/foto3.jpg"];let currentIndex=0;function updateImage(){const a=document.getElementById("photo");a.src=images[currentIndex],a.classList.add("fade-in"),setTimeout(()=>a.classList.remove("fade-in"),500)}document.getElementById("prevButton").addEventListener("click",()=>{currentIndex=(currentIndex-1+images.length)%images.length,updateImage()}),document.getElementById("nextButton").addEventListener("click",()=>{currentIndex=(currentIndex+1)%images.length,updateImage()});function calculateDaysTogether(a){const b=new Date,c=Math.abs(a-b);return Math.ceil(c/86400000)}const anniversaryDate=new Date(2024,1,24);document.getElementById("tempo").textContent=`Estamos juntos há ${calculateDaysTogether(anniversaryDate)} dias!`;