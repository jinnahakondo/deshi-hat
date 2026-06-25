"use client"
import { Button } from '../ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination({ totalPage }: { totalPage: number }) {

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()

    const currentPage = Number(searchParams.get("page")) || 1


    const createQueryUrl = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", String(page))
        router.push(`${pathName}?${params.toString()}`)
    }

    return (
        <div className=''>
            <Button
                variant={"secondary"}
                onClick={() => createQueryUrl(currentPage - 1)}
                disabled={currentPage <= 1}
            >Prev</Button>

            {
                [...Array(totalPage)].map((_, i: number) => <Button
                    key={i}
                    variant={currentPage === (i + 1) ? "default" : "secondary"}
                    onClick={() => createQueryUrl(i + 1)}
                >
                    {i + 1}
                </Button>)
            }
            <Button
                variant={"secondary"}
                onClick={() => createQueryUrl(currentPage + 1)}
                disabled={currentPage >= totalPage}
            >Next</Button>
        </div>
    )
}
