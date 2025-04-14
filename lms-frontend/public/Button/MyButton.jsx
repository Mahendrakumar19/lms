
// import Button from 'react-bootstrap/Button';
// import './MyButton.css'
// function MyButton({ link, onClick, children }) {
//   if (onClick) {
//     return (
//       <Button variant="primary" onClick={onClick}>
//         {children}
//       </Button>
//     );
//   }
  
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer">
//       <Button variant="primary">{children}</Button>
//     </a>
//   );
// }

// export default MyButton;
import Button from 'react-bootstrap/Button';
import './MyButton.css'; // Import the CSS file

function MyButton({ link, onClick, children }) {
  if (onClick) {
    return (
      <Button 
        className="custom-button" 
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Button className="custom-button">{children}</Button>
    </a>
  );
}

export default MyButton;