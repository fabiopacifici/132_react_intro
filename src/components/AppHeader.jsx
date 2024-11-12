// use relative paths to access files inside (src folder)
import reactLogo from '../assets/img/react.svg'
// use absolute paths to access files inside (public folder)
import viteLogo from '/vite.svg'

export default function AppHeader() {

  // logic here
  const title = 'React Shop';

  // markup here
  return (
    <header>

      <div className="logo">
        <img src={reactLogo} alt="" />
        {title.toUpperCase()}
      </div>

    </header>
  )
}