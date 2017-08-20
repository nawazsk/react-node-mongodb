import React from "react";
import ContestPreview from "./ContestPreview";
const ContestList = ({contests, onContestClick}) => {
  return (
    <div className="ContestList">
    {
      Object.keys(contests).map(contestID =>
        <ContestPreview key={contestID} onClick={onContestClick} {...contests[contestID]} />
      )
    }
    </div>
  )
}

ContestList.propTypes = {
  contests : React.PropTypes.object,
  onContestClick : React.PropTypes.func.isRequired
}

export default ContestList;
