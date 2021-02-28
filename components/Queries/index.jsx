import QueryItem from '../QueryItem'
import styles from './Queries.module.css'

export default function Queries({ data }) {
    return (
        <div className="container">
            <section className={styles.queries}>
                {data.map((item, index) => (
                    <QueryItem
                        key={index}
                        query={item.query}
                        answer={item.answer}
                    />
                ))}
            </section>
        </div>
    )
}
