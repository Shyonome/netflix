import Title from "./Title"
import Scrollbar from "./Scrollbar"

const Section = ({ title, data }) => {
    return (
        <section>
            <Title title = {title} />
            <Scrollbar data = {data} />
        </section>
    )
}

export default Section