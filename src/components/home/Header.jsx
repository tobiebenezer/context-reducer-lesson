import Button from "../ui/button/Button";
import "./Header.css"

function Header({ name, x, tinubu, brand }) {
const {name1, model } = brand;

  console.log(name1,model);

  return (
    <header>
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>Name : {name === "" ? "Goat" : name}</li>
          <li>Result: {tinubu}</li>
          <li>Exam : {x}</li>
        </ul>
      </div>
      <Button x={x}/>
    </header>

  );
}

export default Header