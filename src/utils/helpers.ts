import { eventDataType, eventsType, sequentialEventsType } from "../types";

export const computedSequentialEvents = (arr: eventsType, sliceStart: number, sliceEnd: number) => {
	// Sort events by Date in a descending order
	const sortedEvents = arr.sort((a, b) => {
		return a.createdAt > b.createdAt ? -1 : 1;
	});
	// Show maximum of 6 events and group sequential events with same author and event type
	const mergedEvents = sortedEvents
		.slice(sliceStart, sliceEnd)
		.reduce((accumulator, { author, type, ...rest }, i, arr) => {
			if (arr[i - 1] && arr[i - 1].author === author && arr[i - 1].type === type) {
				const prev = accumulator[accumulator.length - 1];

				prev.eventData = ([] as eventDataType).concat(prev.eventData, rest);
			} else accumulator.push({ author, type, eventData: [rest] });

			return accumulator;
		}, [] as sequentialEventsType[]);

	return mergedEvents;
};

export const getAuthorInitials = (authorName: string) => {
	if (!authorName) return "";
	return authorName.charAt(0).toUpperCase();
};
