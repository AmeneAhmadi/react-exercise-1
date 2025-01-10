export default function Part6() {
  const styles = {
    backgroundColor: "#0aafd8",
    color: "#ffffff",
    padding: "1rem",
    borderRadius: "10px",
    textAlign: "center",
    width:"50%",
    margin:"1rem auto"
  };

  return (
    <>
      <h6>Part6</h6>
      <p>This part renders a div with dynamic styles.</p>
      <div>
        <div style={styles}>This is a dynamically styled div!</div>
      </div>
    </>
  );
}
