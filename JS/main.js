document.addEventListener('mousemove', e => (
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.0035}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .008}deg;
		`
  })
))