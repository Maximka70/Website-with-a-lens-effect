document.addEventListener('mousemove', e => (
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.0035}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .008}deg;
		`
  })
))


document.addEventListener('deviceorientation', e => {
  const { beta, gamma } = e;
  const clampedBeta = Math.max(-90, Math.min(90, beta));
  const clampedGamma = Math.max(-45, Math.min(45, gamma));

  const moveX = clampedGamma * 0.5;
  const moveY = clampedBeta * -0.5;

  Object.assign(document.documentElement.style, {
    '--move-x': `${moveX}deg`,
    '--move-y': `${moveY}deg`
  });
})