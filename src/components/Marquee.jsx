import ScrollVelocity from "./ui/ScrollVelocity";

const Marquee = () => {
  return (
    <div>
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={50}
        className="custom-scroll-text py-10 bg-green"
      />
    </div>
  );
};

export default Marquee;
