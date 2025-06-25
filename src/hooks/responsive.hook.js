import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return {
        isMobile
    }
}

export default useResponsive