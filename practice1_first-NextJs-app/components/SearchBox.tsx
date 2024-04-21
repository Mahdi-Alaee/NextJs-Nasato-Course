'use client'

import { Combobox } from "@headlessui/react";

export default function SearchBox(){
    return (
        <Combobox>
            <Combobox.Input className="p-2 outline-none" type="text" placeholder="Search ..." />
        </Combobox>
    )
}