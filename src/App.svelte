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
    <MeetupGrid {meetups} />
</main>


