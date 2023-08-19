export type eventMessageType = {
	title: string;
	description: string;
	receiver: string;
};

export type eventActivityType = {
	type: string;
	status: string;
};

export type eventType = {
	type: string;
	createdAt: string;
	author: string;
	activity?: eventActivityType;
	message?: eventMessageType;
};

export type eventsType = eventType[];

export type eventDataType = {
	activity?: eventActivityType;
	message?: eventMessageType;
	createdAt: string;
}[];

export type sequentialEventsType = {
	type: string;
	author: string;
	eventData: eventDataType;
};
