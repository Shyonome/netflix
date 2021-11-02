import Title from "./Title"
import Scrollbar from "./Scrollbar"

const Section = ({ title, data }) => {
    return (
        <section>
            <Title title = {title} />
            {data.map((elem, index) => {
                return (
                    <Scrollbar key = {index} data = {elem} />
                );
            })}
        </section>
    )
}

export default Section