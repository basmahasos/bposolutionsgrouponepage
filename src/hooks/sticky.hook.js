import { useEffect, useState } from 'react'

const useSticky = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setIsSticky(window.scrollY > 50);
        }

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])
    return{
        isSticky
    }
}

export default useSticky