import { AccessTime24Regular, Box24Regular, Mail24Regular, MailRead24Regular, ShareScreenPerson24Regular, TaskListSquareAdd24Regular } from "@fluentui/react-icons";
import './App.scss'
import IconBox from "./components/IconBox";
function App() {
  const data = [
    {
      id: 1,
      color: "#b6b690",
      icon: <AccessTime24Regular  style={{width:'80px',height:'80px'}}/>,
      label: "KPI's",
      href: "https://google.com",
      tabs: 1
    },
    {
      id: 2,
      color: "#debfc6",
      icon: <MailRead24Regular  style={{width:'80px',height:'80px'}}/>,
      label: "Dayforce",
      href: "https://facebook.com",
      tabs: 2
    },
    {
      id: 3,
      color: "#d29f91",
      icon: <Mail24Regular  style={{width:'80px',height:'80px'}}/>,
      label: "Email",
      href: "https://firefox.com",
      tabs: 1
    },
    {
      id: 4,
      color: "#b6b690",
      icon: <Box24Regular  style={{width:'80px',height:'80px'}}/>,
      label: "OneStock",
      href: "https://twitter.com",
      tabs: 2
    },
    {
      id: 5,
      color: "#debfc6",
      icon: <ShareScreenPerson24Regular style={{width:'80px',height:'80px'}} />,
      label: "Fuse/HR",
      href: "https://gmail.com",
      tabs: 1
    },
    {
      id: 6,
      color: "#d29f91",
      icon: <TaskListSquareAdd24Regular style={{width:'80px',height:'80px'}} />,
      label: "Yoobick",
      href: "https://google.com",
      tabs: 1
    }
  ]

  return (
    <div className="home-container">
      <div className="icon-boxes-container">
        {data.map((d) => 
          <IconBox 
            key={d.id}
            color={d.color}
            icon={d.icon}
            label={d.label}
            href={d.href}
            tabs={d.tabs}
          />
        )}
      </div>  
    </div>
  )
}

export default App
