<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

  let meetups = [
    {
      id: "m1",
      title: "Smart Apps with Svelte",
      subtitle: "Learn smart web coding in 2 hours",
      description:
        "In this meetup, experts will teach you how to code for the smart web!",
      imageUrl: "https://venturebeat.com/wp-content/uploads/2015/11/coding.jpg",
      address: "247 Nerd Road, 36500 New York",
      contactEmail: "innovate@w3ai.net"
    },
    {
      id: "m2",
      title: "Swim Together",
      subtitle: "Let's go for some swiming",
      description: "We will simply swim some rounds!",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Natacio.jpg/220px-Natacio.jpg",
      address: "247 Nerd Road, 36500 New York",
      contactEmail: "swim@w3ai.net"
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

</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
    <form on:submit|preventDefault="{addMeetup}">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title} />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle} />
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" bind:value={imageUrl} />
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" bind:value={email} />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description} />
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>


