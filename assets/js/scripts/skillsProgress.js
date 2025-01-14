export const skillsProgressInit = () => {
	const skillsProgressItems = document.querySelectorAll('.skills-progress__value');

	skillsProgressItems.forEach((skillsProgressItem) => {
		const skillsProgressValue = skillsProgressItem.textContent;
		skillsProgressItem.style.width = skillsProgressValue + '%';
	});
};
