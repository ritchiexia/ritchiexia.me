const Icon = ({ icon }) => {
  console.log(icon.src)
  return (
    <div>
      <a href={icon.href}><img className="profileicon" src={icon.src} alt="profileicon" /></a>
    </div>
  )
}

export default Icon
