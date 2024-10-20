import Courses from "./course";
import football from "../../../assets/football.mp4"; 
import art from "../../../assets/art.mp4";
import cooks from "../../../assets/cooks.mp4"

export default function CoursesBody() {
    return(
        <div className="coures_body">
            <div className="coures_title_area">
                <h1 className="courses_title">See our best courses</h1>
            </div>
            <Courses video={football} title="Stop being the Reserve"/>
            <Courses video={art} title="Become an Artist"/>
            <Courses video={cooks} title="Become a CHEF"/>
        </div>
    );
}