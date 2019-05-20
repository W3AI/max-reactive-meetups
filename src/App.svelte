<script>
    import Header from './UI/Header.svelte';
    import MeetupItem from './Meetups/MeetupItem.svelte';

    const meetups = [
        {
            id: 'm1',
            title: 'Coding Smart Apps',
            subtitle: 'Learn smart web coding in 2 hours',
            description: 'In this meetup, we will have some experts that teach you how to code for the smart web!',
            imageUrl: 'https://venturebeat.com/wp-content/uploads/2015/11/coding.jpg',
            address: '247 Nerd Road, 36500 New York',
            contactEmail: 'innovate@w3ai.net'
        },
        {
            id: 'm2',
            title: 'Swim Togethr',
            subtitle: 'Let\'s go for some swiming',
            description: 'We will simply swim some rounds!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/220px-Natacio.jpg',
            address: '247 Nerd Road, 36500 New York',
            contactEmail: 'swim@w3ai.net'
        },

    ];
</script>

<Header />

{#each meetups as meetup}
    <MeetupItem />
{/each}
