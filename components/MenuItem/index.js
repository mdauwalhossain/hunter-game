import Link from 'next/link'
import { useRouter } from "next/router"

export default function MenuItem(props) {
    const router = useRouter()

    return (
        <span className={router.pathname == props.route ? props.active : ""}>
            <Link href={props.route}>
                {props.name}
            </Link>
        </span>
    )
}
