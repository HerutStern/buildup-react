import { createContext, useState } from "react";

export const BuildingPermitContext = createContext(null)
export const SetBuildingPermitContext = createContext(null)

const BuildingPermitProvider = ({children}) => {
  const [buildingPermit, setBuildingPermit] = useState({
    user: null
  })

  return(
    <BuildingPermitContext.Provider value={buildingPermit}>
      <SetBuildingPermitContext.Provider value={setBuildingPermit}>
        {children}
      </SetBuildingPermitContext.Provider>
    </BuildingPermitContext.Provider>
  )

}

export default BuildingPermitProvider