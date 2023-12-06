import { useGlobalContext } from "../context";

function Modal() {
  const {mealToShow} = useGlobalContext();
  if(mealToShow===undefined) return(<dialog id="show-recipe"></dialog>)

  const {thumbnail_url, name, original_video_url, sections,description} = mealToShow;

  function closeModal(event){
    const modal = event.target.parentNode;
    modal.close();
  }

  
  return (
    <dialog id="show-recipe">
      <i className="fa-solid fa-xmark" onClick={closeModal}></i>
        <img src={thumbnail_url} alt={name} />
        <h2>{name}: <a href={original_video_url} target="_blank">Watch how to cook</a></h2>
        
        <p>{description}</p>
        <ul className="ingedients-container">
          {
            sections[0].components.map((ingredient,i) => <li key={i}>{ingredient.raw_text}</li>)
          }
        </ul> 
    </dialog>
  )
}

export default Modal