import Courses from "./course";
import football from "../../../assets/football.mp4"; 
import art from "../../../assets/art.mp4";
import cooks from "../../../assets/cooks.mp4"

export default function CoursesBody() {
    return(
        <div className="coures_body">
            <div className="coures_title_area">
                <h1 className="courses_title">Veja os nossos melhores cursos</h1>
            </div>
            <Courses video={football} title="Deixe de ser o Reserva"/>
            <Courses video={art} title="Torne-se um Artista"/>
            <Courses video={cooks} title="Torne-se um CHEF"/>
        </div>
    );
}