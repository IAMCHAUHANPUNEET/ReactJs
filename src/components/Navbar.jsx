import { MdOutlineDarkMode } from "react-icons/md";
function Navbar({ handleOnclick }) {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="navlist">
            <li>Home</li>
            <li>
              <MdOutlineDarkMode onClick={handleOnclick} />{" "}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
