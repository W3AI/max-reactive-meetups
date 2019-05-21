<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let email = "";
  let description = "";
  let imageUrl = "";

  let meetups = [
    {
      id: "m1",
      title: "Smart Apps with SvelteJS",
      subtitle: "Learn smart web coding in 2 hours",
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

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imageUrl: imageUrl,
      contactEmail: email,
      address: address
    };

    // meetups.push(newMeetup);    // DOES NOT WORK IN SVELTE - NO '=' SIGN
    meetups = [newMeetup, ...meetups];
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

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={event => (title = event.target.value)} />
    <TextInput
      id="subtitle"
      label="Subitle"
      value={subtitle}
      on:input={event => (subtitle = event.target.value)} />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={event => (address = event.target.value)} />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={event => (imageUrl = event.target.value)} />
    <TextInput
      id="email"
      label="E-Mail"
      type="email"
      value={email}
      on:input={event => (email = event.target.value)} />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      on:input={event => (description = event.target.value)} />
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} on:togglefavorite="{toggleFavorite}" />
</main>
