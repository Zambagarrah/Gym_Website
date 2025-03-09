import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './notfound.css';

export function NotFound() {
    return (
        <div className="not-found-container text-center">
            <div className="not-found-header">
                <h1>404 - Page Not Found</h1>
            </div>
            <div className="not-found-content">
                <FaExclamationTriangle size={100} className="not-found-icon" />
                <p>Oops! The page you are looking for does not exist.</p>
                <a href="/" className="link-btn btn-danger">
                    <FaHome /> Go to Home
                </a>
            </div>
        </div>
    );
};