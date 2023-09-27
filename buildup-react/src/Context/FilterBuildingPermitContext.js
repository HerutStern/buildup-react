import { createContext, useState } from "react";

export const FilterBuildingPermitContext = createContext(null)
export const SetFilterBuildingPermitContext = createContext(null)

const FilterBuildingPermitProvider = ({children}) => {
  const [filterBuildingPermit, setFilterBuildingPermit] = useState({
    params:{
      id: '',
      building_permit_name: '',
      status: '',
      project_manager: '',
      creation_date: '',
      approval_date: ''
    }
  })

  return(
    <FilterBuildingPermitContext.Provider value={filterBuildingPermit}>
      <SetFilterBuildingPermitContext.Provider value={setFilterBuildingPermit}>
        {children}
      </SetFilterBuildingPermitContext.Provider>
    </FilterBuildingPermitContext.Provider>
  )

}

export default FilterBuildingPermitProvider