import Title from "./Title"
import Scrollbar from "./Scrollbar"

const Section = ({ title, data }) => {
    return (
        <section>
            <Title title = {title} />
            <div className = "container-scrollbar">
                {data.map((elem, index) => {
                    return (
                        <Scrollbar key = {index} data = {elem} />
                    );
                })}
            </div>
        </section>
    )
}

export default Section