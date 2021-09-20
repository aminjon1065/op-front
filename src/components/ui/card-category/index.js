import React, {useState} from 'react';
import formatter from './../../../tools/DateFormatter'

const CardCategory = ({id, category, count, icon, created}) => {
    const [hover, setHover] = useState('shadow-sm');
    const onHover = () => {
        setHover('shadow')
    }

    const onLeaveHover = () => {
        setHover('shadow-sm')
    }
    return (
        <>
            <div className={`card-body bg-white rounded m-1 ${hover}`} onMouseEnter={onHover}
                 onMouseLeave={onLeaveHover}
                 style={{
                     maxWidth: '200px',
                     backgroundColor: '#8EC5FC',
                     backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
                 }}>
                <div className="float-end">
                    <i className={icon}></i>
                </div>
                <h5 className="text-muted fw-normal mt-0"
                    title="Number of Customers">{category}</h5>
                <h5 className="mt-3 mb-3"><i className="fas fa-sort-numeric-up-alt"></i> {count}</h5>
                <div className="mb-0 text-muted">
                    <div className="text-dark me-2"><i className="fas fa-hashtag"></i> {id}</div>
                    <span className="text-nowrap">{formatter.format(Date.parse(created))}</span>
                </div>
            </div>
        </>
    );
};

export default CardCategory;