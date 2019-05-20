<script>
  import Header from "./UI/Header.svelte";
  import MeetupGrid from "./Meetups/MeetupGrid.svelte";

  const meetups = [
    {
      id: "m1",
      title: "Coding Smart Apps",
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
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

<Header />

<main>
    <form>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" />
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" />
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" />
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" />
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" />
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" />
        </div>
    </form>
    <MeetupGrid {meetups} />
</main>


