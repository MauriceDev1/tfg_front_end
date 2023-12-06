interface IconBoxProps {
    color: string,
    icon: any,
    label: string,
    href: string,
    tabs: number,
  }
  
  const IconBox = ({ color, icon, label, href, tabs }: IconBoxProps) => {
    return (
      <a href={href} target={tabs === 1 ? '_self' : '_blank'} rel="noreferrer">
        <div className="icon-box" >
          <div className="icon-container"style={{ backgroundColor: color }}>
            <div className="icon">
              {icon}
            </div>
          </div>
          <div className="label-container">
            <p>
              {label}
            </p>
          </div>
        </div>
      </a>
    )
  }
  
  export default IconBox