import FilmStudios from "./film-studios/FilmStudios";
import Genres from "./genres/Genres";
import Oscars from "./oscars/Oscars";
import People from "./people/People";
import Services from "./services/Services";
import Years from "./year/Years";

const Sidebar = () => {
  return (
    <div>
      <Services />
      <Genres />
      <Oscars />
      <Years />
      <People />
      <FilmStudios />
    </div>
  );
};
export default Sidebar;
