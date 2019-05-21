<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";
  import EditMeetup from "./Meetups/EditMeetup.svelte";

  let meetups = [
    {
      id: "m1",
      title: "Smart Apps with SvelteJS",
      subtitle: "Learn smart coding in 2 hours",
      description:
        "In this meetup, experts will teach you how to code for the smart web!",
      imageUrl: "https://venturebeat.com/wp-content/uploads/2015/11/coding.jpg",
      address: "247 Nerd Road, 365-ADHD NYork",
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
      address: "247 Nerd Road, 36500 North York",
      contactEmail: "swim@w3ai.net",
      isFavorite: false
    }
  ];

  let editMode;

  function addMeetup(event) {
    const newMeetup = {
      id: Math.random().toString(),
      title: event.detail.title,
      subtitle: event.detail.subtitle,
      description: event.detail.description,
      imageUrl: event.detail.imageUrl,
      contactEmail: event.detail.email,
      address: event.detail.address
    };

    // meetups.push(newMeetup);    // DOES NOT WORK IN SVELTE - NO '=' SIGN
    meetups = [newMeetup, ...meetups];
    editMode = null;
  }

  function toggleFavorite(event) {
    const id = event.detail;
    const updatedMeetup = { ...meetups.find(m => m.id === id) }; // returns the meetup obj with id
    updatedMeetup.isFavorite = !updatedMeetup.isFavorite; // toggle with ! operator
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
      margin: 1rem;
  }
</style>

<Header />

<main>
<div class="meetup-controls">
  <Button caption="New Meetup" on:click={() => (editMode = 'add')} />
</div>
  {#if editMode === 'add'}
    <EditMeetup on:save="{addMeetup}" />
  {/if}
  <MeetupGrid {meetups} on:togglefavorite={toggleFavorite} />
</main>
