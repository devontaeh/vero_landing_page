export const scrollToWaitlist = () => {
  const waitlistElement = document.getElementById("waitlist");
  if (waitlistElement) {
    waitlistElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};
