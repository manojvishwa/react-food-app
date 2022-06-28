import React from 'react'

const Category = ({filterItem, catItems}) => {
  return (
    <>
       <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">

            {
                catItems.map((curElement, index) => {
                    return <button className="btn btn-warning" key={index} onClick={() => filterItem(curElement)}>{curElement}</button>
                })
            }
        </div>
      </div>
    </>
  )
}

export default Category