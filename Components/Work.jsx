import Image from "next/image"
import Link from "next/link"
export default function Work({ workList }) {
    return (
        <section id="projects">
            <div className="container">
                <h2 className="project-heading heading">My <span>Work</span></h2>
                <div className="items">
                    {workList.length !== 0 && workList.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="item-image">
                                <Image className="project-Image" src={item.image} alt={''} priority={false} width={500} height={500} quality={100} layout="fixed"></Image>
                            </div>
                            <div className="item-text">
                                <div className="item-text-wrap">
                                    <p className="item-text-category">{item.category}</p>
                                    <h2 className="item-text-title">{item.title}</h2>
                                    <Link className="web-link" href={item.link}><i class="fa-solid fa-link"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}