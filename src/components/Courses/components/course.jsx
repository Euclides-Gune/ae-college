import PropTypes from "prop-types";

export default function Courses({ video, title }) {
    return(
        <div>
           <div className="courses">
            <div className="course_video">
                    <video src={video} autoPlay controls className="video"></video>
                </div>
                <div className="course_group">
                    <div className="course_title">
                        <h1>{title}</h1>
                    </div>
                    <div className="courses_description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo dolorum libero. Explicabo voluptate libero tempore vitae, eveniet error soluta ipsam officiis voluptas ducimus a nulla ut sapiente distinctio est? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad voluptas, voluptates, officiis quo in numquam, magnam laudantium libero soluta earum non a itaque corrupti! Quaerat a impedit nihil unde perspiciatis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolorem pariatur quia consectetur a. Tempora maiores, quas soluta possimus nostrum error illum porro adipisci impedit neque? Dolor expedita voluptatem omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam optio ratione eum expedita nihil vitae quibusdam ad itaque et! Tempora iure blanditiis fuga non maiores ipsam ipsum magni fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempore in magnam beatae aspernatur repellat. Quod minus nisi perferendis, odit accusantium iste recusandae, maiores cupiditate voluptas sequi repudiandae, eveniet beatae.</p>
                    </div>
                    <button className="courses_access_button">Access course</button>
                </div>
           </div>
        </div>
    );
}

Courses.propTypes = {
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}