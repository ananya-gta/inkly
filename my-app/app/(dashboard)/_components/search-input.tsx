"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import queryString from "query-string"
import { ChangeEvent, useEffect, useState } from "react"
import { useDebounceValue } from "usehooks-ts"

export const Searchinput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [debouncedvalue] = useDebounceValue(value, 500);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const url = queryString.stringifyUrl({
            url: "/",
            query: {
                search: debouncedvalue,
            }
        }, { skipEmptyString: true, skipNull: true });
        router.push(url);
    }, [debouncedvalue, router])

    return (
        <div className="w-full relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4" />
            <Input
                className="w-full max-w-129 pl-9" placeholder="Search boards"
                onChange={handleChange} value={value} />
        </div>
    )
}