export default function ErrorMessage({ message }) {
  return (
    <div style={{ textAlign: "center", color: "red", margin: "20px 0" }}>
      <p>{message}</p>
    </div>
  );
};