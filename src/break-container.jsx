import PropTypes from 'prop-types';

const BreakContainer=({label,decBtnId,incBtnId,lenId,len,changeLength})=>{

    function handleDecchange(){
        changeLength(-1);
    }

    function handleIncchange(){
        changeLength(1);
    }

    return(

        <div className="break-container">
            <label htmlFor={label}>{label}</label>
            <div className="brk-btn-wrapper">
                <button id={decBtnId} onClick={handleDecchange}><i className="fa-solid fa-chevron-down"></i></button>
                <p id={lenId}>{len}</p>
                <button id={incBtnId} onClick={handleIncchange}><i className="fa-solid fa-chevron-up"></i></button>
            </div>
        </div>

    )
}

BreakContainer.propTypes={
    label:PropTypes.string,
    decBtnId:PropTypes.string,
    incBtnId:PropTypes.string,
    lenId:PropTypes.string,
    len:PropTypes.number,
    changeLength:PropTypes.func,
}

export default BreakContainer;