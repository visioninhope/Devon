'use client'
import { List, PanelsTopLeft, PanelLeft, SquarePen } from 'lucide-react'
import { useState } from 'react'
import Sidebar from '@/components/sidebar/sidebar'
import SelectProjectDirectoryModal from '@/components/modals/select-project-directory-modal'

const HeaderSidebar = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <header
                id="header"
                className="flex w-full absolute top-0 px-3 items-center gap-1 pb-1 pt-12 h-14"
            >
                <div
                    id="header-drag-region"
                    className="absolute w-full h-full top-0 left-0"
                ></div>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="no-drag relative p-2 z-10"
                >
                    <PanelsTopLeft size="1.4rem" />
                </button>
                <a
                    href="/"
                    className="no-drag text-white text-xl font-semibold z-10"
                >
                    Devon
                </a>
                <SelectProjectDirectoryModal
                    trigger={
                        <button
                            className={`no-drag ml-[7rem] p-2 ${expanded ? 'visible' : 'hidden'} z-10`}
                        >
                            <SquarePen size="1.4rem" className="no-drag text-primary" />
                        </button>
                    }
                    header={<h1 className="text-2xl font-bold mb-5">Create new chat</h1>}
                />
            </header>
            <Sidebar expanded={expanded} setExpanded={setExpanded} />
        </>
    )
}

export default HeaderSidebar