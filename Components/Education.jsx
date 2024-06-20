export default function Education({ educationList }) {

    return (
        <section id="education" className="education">

            <h2 className="heading">Education</h2>
            <div className="timeline-items">

                {educationList.length !== 0 && educationList.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">{item.date}</div>
                        <div className="timeline-content">
                            <h3>{item.heading}</h3>
                            <p>{item.para}</p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}