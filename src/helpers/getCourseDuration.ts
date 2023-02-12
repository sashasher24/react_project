export const getCourseDuration = (timeInMinutes: number) => {
	const hours = Math.floor(timeInMinutes / 60);
	const minutes = timeInMinutes % 60;

	const time = hours === 1 ? 'hour' : 'hours';

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')} ${time}`;
};
