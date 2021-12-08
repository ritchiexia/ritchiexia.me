import Icon from "./Icon"

const Icons = ( {icons} ) => {
  console.log(icons)
  return (
    <div className="profileiconlist">
      {icons.map((icon) => (
        <Icon key={icon.id} icon={icon} />
      ))}
    </div>
  )
}

export default Icons
