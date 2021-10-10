export function Section({ title, children }) {
  return (
    <div>
      <p> {title}</p>
      {children}
    </div>
  );
}
