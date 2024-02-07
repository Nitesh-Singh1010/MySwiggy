const heading = React.createElement("h1", { id: "h1Heading", xyz: "abc" }, [
  React.createElement("h1", {}, "1st heading"),
  React.createElement("h1", {}, "2nd heading")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
