import Button from 'react-bootstrap/Button';
import './MyButton.css'; // Make sure this matches your CSS file path

function MyButton({ link, children }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button className="custom-button">{children}</Button>
    </a>
  );
}

export default MyButton;
