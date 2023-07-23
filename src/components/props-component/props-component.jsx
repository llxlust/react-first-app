export function PropsComponent({
  firstName,
  person: { age },
  children,
  secondComponent,
  htmlTag,
  lastName,
}) {
  return (
    <div>
      <p>
        My first name: {firstName}
        <br />
        Last name: {lastName}
        <br />
        age: {age}
      </p>

      {children}
      {secondComponent}

      {htmlTag}
    </div>
  );
}
