import { SITE_DETAIL_MENU_CONFIG } from "@crema/constants"
import { useMemo } from "react"
import { useParams } from "react-router-dom"

const useSiteDetail = () => {
  const { id, mainMenu, subMenu } = useParams()

  const _subMenu = useMemo(() => {
    if (!subMenu) {
      return SITE_DETAIL_MENU_CONFIG[mainMenu]?.defaultSubMenu
    }
    return subMenu
  }, [mainMenu, subMenu])

  return {
    id,
    mainMenu,
    subMenu: _subMenu
  }
}

export default useSiteDetail