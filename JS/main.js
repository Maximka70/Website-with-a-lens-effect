document.addEventListener('mousemove', e => (
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.0035}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .008}deg;
		`
  })
))


function handleOrientation(e) {
  const beta = e.beta;
  const gamma = e.gamma;

  const limitedBeta = Math.max(-60, Math.min(60, beta));
  const limitedGamma = Math.max(-45, Math.min(45, gamma));

  const tiltX = limitedBeta * -0.5;
  const tiltY = limitedGamma * 0.5;

  document.documentElement.style.setProperty('--tilt-x', `${tiltX}deg`);
  document.documentElement.style.setProperty('--tilt-y', `${tiltY}deg`);
}

function initTiltTracking() {
  if (typeof DeviceOrientationEvent?.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
        } else {
          alert('Разрешение на сенсоры не получено');
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('deviceorientation', handleOrientation);
  }
}
window.addEventListener('click', initTiltTracking, { once: true });