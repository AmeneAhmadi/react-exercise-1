export default function Part3() {
  const isLoggedIn = false;
  return (
    <>
      <h6>Part3</h6>
      {isLoggedIn ? (
        <h3>Welcome...</h3>
      ) : (
        <h3>
          You are not authorized! Log in <a href="#">here</a>
        </h3>
      )}
    </>
  );
}
