export default function Part2() {
  const favoriteColor = "Blue";
  return (
    <>
      <h6>Part2</h6>
      <p>This part shows dynamic text inside static text. The color is dynamic.  </p>
      <h3>My favorite color is &quot;<span className="blue">{favoriteColor}</span>&quot;</h3>
    </>
  );
}
