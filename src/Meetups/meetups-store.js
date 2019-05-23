import { writable } from 'svelte/store';

const meetups = writable([
    {
        id: "m1",
        title: "Smart Apps with SvelteJS",
        subtitle: "Learn to script in 2 hours",
        description:
            "In this meetup, experts will teach you how to code for the smart web!",
        imageUrl: "https://venturebeat.com/wp-content/uploads/2015/11/coding.jpg",
        address: "247 Nerd Road, 24360 North York",
        contactEmail: "innovate@w3ai.net",
        isFavorite: false
    },
    {
        id: "m2",
        title: "Swim Together",
        subtitle: "Let's go for some swiming",
        description: "We will simply swim some rounds!",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/220px-Natacio.jpg",
        address: "314 Nerd Road, 36500 North York",
        contactEmail: "swim@w3ai.net",
        isFavorite: false
    }
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        };
        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            const meetupIndex = items.findIndex(i => i.id === id);
            const updatedMeetup = { ...items[meetupIndex], ...meetupData };
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
    removeMeetup: (id) => {
        meetups.update(items => {
            return items.filter(i => i.id !== id);
        });
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            const updatedMeetup = { ...items.find(m => m.id === id) }; // returns the meetup obj with id
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite; // toggle with ! operator
            const meetupIndex = items.findIndex(m => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    }
};

export default customMeetupsStore;

