import React from 'react';
import './CustomButton.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export function CustomButton(props) {
    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/login')
    }

    return (
        <Link to='sign-up'>
            <button onClick={handleSubmit} className='custom-btn'>{props.content}</button>
        </Link>
    );
}