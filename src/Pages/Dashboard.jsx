
import Descs from "./Descs"
import Projects from "./Projects"
import Qual from "./Qual"
export default function Dashboard() {
  return (
    <div className="container py-4">
        <Descs/>
        <Qual/>
        <Projects/>
    </div>
  )
}
