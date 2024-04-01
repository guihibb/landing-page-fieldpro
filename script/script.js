function showBar(element) {
    const bar = document.querySelector('.bar');
    console.log("0", element)
    bar.style.transform = 'translateY(0)';
  }
  
  function hideBar() {
    const bar = document.querySelector('.bar');
    console.log("0")
    bar.style.transform = 'translateY(100%)';
  }
  

  const video = document.getElementById('myVideo');
  const body = document.body;
  
  video.addEventListener('timeupdate', function() {
    if (video.currentTime >= 10) {
      body.style.backgroundColor = '#000';
    }
  });

  

  const video2 = document.getElementById('video2');

  video2.addEventListener("click", function() {
    if (video2.paused) {
        video2.play();
    } else {
        video2.pause();
    }
});

  document.getElementById("downloadButton").addEventListener("click", function() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /windows/i.test(userAgent) || /linux/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.app.fieldpro";
    } else if (/iPad|iPhone|iPod/i.test(userAgent) || /macintosh|mac os x/i.test(userAgent)) {
        window.location.href = "https://apps.apple.com/br/app/fieldpro/id1534612946";
    } else {
        window.location.href = "https://play.google.com/store/apps/details?id=com.app.fieldpro";
    }
});

document.addEventListener('DOMContentLoaded', function() {
  var isAutoplayBlocked = false;

  var video = document.getElementById('video2');
  
  // Verifica se o autoplay do vídeo está bloqueado
  video.play().then(function() {
    // O autoplay do vídeo não foi bloqueado
  }).catch(function(error) {
    // O autoplay do vídeo foi bloqueado
    isAutoplayBlocked = true;
    document.getElementById('play').style.display = 'block';
  });
  
  // Pára a reprodução do vídeo depois de verificar o autoplay
  video.pause();
});