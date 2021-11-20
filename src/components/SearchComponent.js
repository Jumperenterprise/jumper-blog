import React from 'react'

function SearchComponent() {
    return (
        <section>
            <div className="section">
                <div className="row input__container">
                    <div className="col m7 input-field input-container">
                        <i className="material-icons">search</i>
                        <input id="search" className="" type="text" placeholder="Buscar" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchComponent
