import Image from "next/image"
export default function Work({ workList }) {
    return (
        <section id="work-a">
            <div className="container">
                <h2 className="project-heading heading">My <span>Work</span></h2>
                <div className="items">
                    {workList.length !== 0 && workList.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="item-image">
                                <Image className="project-Image" src={`/item${index + 1}.png`} alt={''} priority={false} width={500} height={500} quality={100} layout="fixed"></Image>
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">{item.category}</p>
                                    <h2 className="item-text-title">{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}