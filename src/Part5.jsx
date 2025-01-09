export default function Part5() {
  const items = ["React", "JavaScript", "HTML", "CSS"];
  return (
    <>
      <h6>Part5</h6>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
