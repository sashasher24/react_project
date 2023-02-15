const MINUTES_IN_HOUR = 60;

export const getCourseDuration = (timeInMinutes: number) => {
	const hours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
	const minutes = timeInMinutes % MINUTES_IN_HOUR;

	const time = hours === 1 ? 'hour' : 'hours';

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')} ${time}`;
};
