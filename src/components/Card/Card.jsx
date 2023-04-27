import { Link } from 'react-router-dom';
import style from "./Card.module.css"
export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.card}>
         <button className={style.mybuttonasd} onClick={() => onClose(id)} >x</button>
         <div className={style.img}>
         <div className={style.link}> 
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         </div>
         <img src={image} alt={name} />
         </div>
        


        <div className={style.text}>
            


          <div className={style.content}>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Status: {status}</h2>
         <h2>Origin: {origin}</h2>
          </div>
      
      </div>
        </div>

      
   );
   }