import { createContext, useState } from "react";
import { BUILDING_PERMIT_URL } from "../infra/urls";

export const BuildingPermitListContext = createContext(null)
export const SetBuildingPermitListContext = createContext(null)

const BuildingPermitListProvider = ({children}) => {
  const [buildingPermitList, setBuildingPermitList] = useState({
    rows: [],
    next: null,
    previous: null,
    url: BUILDING_PERMIT_URL
  })

  return(
    <BuildingPermitListContext.Provider value={buildingPermitList}>
      <SetBuildingPermitListContext.Provider value={setBuildingPermitList}>
        {children}
      </SetBuildingPermitListContext.Provider>
    </BuildingPermitListContext.Provider>
  )

}

export default BuildingPermitListProvider