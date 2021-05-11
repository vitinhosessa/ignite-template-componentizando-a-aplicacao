import { GenreResponseProps } from "../App";
import { Button } from './Button';

interface ISideBarProps {
  parentCallback(id: number): void
  genres: GenreResponseProps[]
  selectedGenreId: number
}

export function SideBar(props: ISideBarProps) {

  function sendDataToParent(id: number) {
    props.parentCallback(id)
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => sendDataToParent(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

    </nav>
  )
}